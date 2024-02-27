"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, N8AO, Bloom } from "@react-three/postprocessing";
import { Stats } from "@react-three/drei";
import * as THREE from "three";

const baseColor = new THREE.Color("#F5974E "); // Blue, representing slower speed
const maxSpeedColor = new THREE.Color("#5C577A"); // Red, representing higher speed

const Circle = ({ orbitRadius, inclination, phase, speed, direction }) => {
    const ref = useRef();
    // Create a MeshLambertMaterial ref
    const materialRef = useRef(new THREE.MeshLambertMaterial());

    // Use the speed to influence the color of the sphere
    const speedFactor = (speed - 0.1) / (0.6 - 0.1); // Normalize speed between 0.1 and 0.6 for color interpolation

    useFrame(() => {
        const t = (performance.now() / 1000) * speed + phase;
        const x = orbitRadius * Math.sin(inclination) * Math.cos(t) * direction;
        const y = orbitRadius * Math.sin(inclination) * Math.sin(t) * direction;
        const z = orbitRadius * Math.cos(inclination);
        ref.current.position.set(x, y, z);

        // Dynamically update the color based on speed
        const color = new THREE.Color().lerpColors(
            baseColor,
            maxSpeedColor,
            speedFactor
        );
        materialRef.current.color = color;
    });

    return (
        <mesh ref={ref} material={materialRef.current} castShadow receiveShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
    );
};

const generateCircles = (count) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
        const orbitRadius = Math.random() * 9 + 1;
        const inclination = Math.random() * Math.PI;
        const phase = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 0.5 + 0.1; // Adjust the range as needed
        const direction = Math.random() > 0.5 ? 1 : -1;
        circles.push({ orbitRadius, inclination, phase, speed, direction });
    }
    return circles;
};
const InstancedCircles = ({ count }) => {
    const meshRef = useRef();
    const materialRef = useRef(new THREE.MeshLambertMaterial());
   
    // Generate positions and speed factors
    const [positions, speedFactors, phases, directions, color] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const speedFactors = new Float32Array(count);
        const phases = new Float32Array(count);
        const directions = new Float32Array(count);
        const color = new THREE.Color().lerpColors(
            baseColor,
            maxSpeedColor,
            speedFactors
        );
        for (let i = 0; i < count; i++) {
            // configure
            const orbitRadius = Math.random() * 9 + 1;
            const inclination = Math.random() * Math.PI;
            const phase = Math.random() * 2 * Math.PI;
            const speed = Math.random() * 0.5 + 0.1;
            const direction = Math.random() > 0.5 ? 1 : -1;

            positions[i * 3 + 0] = orbitRadius;
            positions[i * 3 + 1] = inclination;
            positions[i * 3 + 2] = 0; // z position is not needed for the orbit calculation
            speedFactors[i] = speed;
            phases[i] = phase;
            directions[i] = direction;
        }
        return [positions, speedFactors, phases, directions, color];
    }, [count]);

    // Animation
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const speed = speedFactors[i];
            const phase = phases[i];
            const direction = directions[i];
            const t = elapsedTime * speed + phase;

            const orbitRadius = positions[i * 3 + 0];
            const inclination = positions[i * 3 + 1];

            const x =
                orbitRadius * Math.sin(inclination) * Math.cos(t) * direction;
            const y =
                orbitRadius * Math.sin(inclination) * Math.sin(t) * direction;
            const z = orbitRadius * Math.cos(inclination); // Adjust if you need 3D movement

            // color 
            materialRef.current.color = color;


            meshRef.current.setMatrixAt(
                i,
                new THREE.Matrix4().makeTranslation(x, y, z)
            );
            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshLambertMaterial />
        </instancedMesh>
    );
};

export default function Stage() {
    // const circles = useMemo(() => generateCircles(80), []);
    return (
        <Canvas camera={{ position: [0, 0, 15], near: 1, far: 20 }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[0, 10, 0]} />
            {/* {circles.map((props, index) => (
                <Circle key={index} {...props} />
            ))} */}
            <InstancedCircles count={80} />
            <EffectComposer>
                <N8AO aoRadius={0.5} intensity={1} />
                <Bloom
                    luminanceThreshold={1}
                    intensity={0.5}
                    levels={9}
                    mipmapBlur
                />
            </EffectComposer>
            <Stats />
        </Canvas>
    );
}
