"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import {
    EffectComposer,
    N8AO,
    Bloom,
    ToneMapping,
} from "@react-three/postprocessing";
import { Stats } from "@react-three/drei";
import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
// 5c577a
// f5974e
// potential new colors

//i use a not brand color for blue
const baseColor = new THREE.Color("#847FCF"); // Brighter purple
const maxSpeedColor = new THREE.Color("#FF9F4D"); // More vibrant orange
THREE.ColorManagement.enabled = true; // scaling performance r3f
// should rewrite this entire canvas, first create meshes by color, then create instances of each mesh color type, then append instanced gemoetries together?
const Circle = ({ orbitRadius, inclination, phase, speed, direction }) => {
    const ref = useRef();
    // Create a MeshLambertMaterial ref
    const materialRef = useRef(new THREE.MeshLambertMaterial());

    // Use the speed to influence the color of the sphere
    const speedFactor = (speed) * 7; // Normalize speed 
    // Dynamically update the color based on speed
    const color = new THREE.Color().lerpColors(
        baseColor,
        maxSpeedColor,
        speedFactor
    );
    materialRef.current.color = color;
    materialRef.current.emissive = color;
    useFrame(() => {
        const t = (performance.now() / 1000) * speed + phase;
        const x = orbitRadius * Math.sin(inclination) * Math.cos(t) * direction;
        const y = orbitRadius * Math.sin(inclination) * Math.sin(t) * direction;
        const z = orbitRadius * Math.cos(inclination);
        ref.current.position.set(x, y, z);

        // // Dynamically update the color based on speed
        // const color = new THREE.Color().lerpColors(
        //     baseColor,
        //     maxSpeedColor,
        //     speedFactor
        // );
        // materialRef.current.color = color;
    });
    // const sphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
    // return (
    //     <instancedMesh ref={ref} args={[sphereGeo, materialRef.current, 1]}/>
    // );
    return (
        <mesh ref={ref} material={materialRef.current} castShadow receiveShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
    );
};
// const Circle = ({ orbitRadius, inclination, phase, speed, direction }) => {
//     const ref = useRef();

//     // Normalize speed between 0.1 and 1 for color interpolation
//     const speedFactor = (speed - 0.1) / 0.9;

//     // Calculate color based on speed
//     const baseColor = new THREE.Color("skyblue");
//     const maxSpeedColor = new THREE.Color("salmon");
//     const color = baseColor.clone().lerp(maxSpeedColor, speedFactor);

//     // Use spring animation for position
//     const { pos } = useSpring({
//         to: async (next, cancel) => {
//             while (true) {
//                 await next({
//                     pos: [
//                         Math.sin(performance.now() / 1000) *
//                             orbitRadius *
//                             direction,
//                         Math.cos(performance.now() / 1000) *
//                             orbitRadius *
//                             direction,
//                         0,
//                     ],
//                 });
//             }
//         },
//         from: { pos: [0, 0, 0] },
//         config: { mass: 1, tension: 180, friction: 12 },
//         loop: { reverse: false },
//     });

    

//     return (
//         <a.mesh ref={ref} position={pos} castShadow receiveShadow>
//             <sphereGeometry args={[0.5, 32, 32]} />
//             <meshLambertMaterial color={color} emissive={color} />
//         </a.mesh>
//     );
// };
const generateCircles = (count) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
        const orbitRadius = Math.random() * 9 + 1;
        const inclination = Math.random() * Math.PI;
        const phase = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 0.1; // Adjust the range as needed
        const direction = Math.random() > 0.5 ? 1 : -1;
        circles.push({ orbitRadius, inclination, phase, speed, direction });
    }
    return circles;
};
const InstancedCircles = ({ count }) => {
    const meshRef = useRef();
    
    // Add params back with proper initialization
    const params = useMemo(() => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push({
                orbitRadius: Math.random() * 9 + 1,
                inclination: Math.random() * Math.PI,
                phase: Math.random() * 2 * Math.PI,
                speed: Math.random() * 0.1,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }
        return arr;
    }, [count]);

    const colorArray = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const { speed } = params[i]; // Get speed from params
            const speedFactor = speed * 7;
            const color = new THREE.Color().lerpColors(baseColor, maxSpeedColor, speedFactor);
            arr[i * 3] = color.r;
            arr[i * 3 + 1] = color.g;
            arr[i * 3 + 2] = color.b;
        }
        return arr;
    }, [count, params]); // Add params as dependency

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const matrix = new THREE.Matrix4();
        
        params.forEach(({ orbitRadius, inclination, phase, speed, direction }, i) => {
            const t = elapsedTime * speed + phase;
            const x = orbitRadius * Math.sin(inclination) * Math.cos(t) * direction;
            const y = orbitRadius * Math.sin(inclination) * Math.sin(t) * direction;
            const z = orbitRadius * Math.cos(inclination);
            
            // Update instance matrix
            matrix.makeTranslation(x, y, z);
            meshRef.current.setMatrixAt(i, matrix);
            
            // Update colors
            const speedFactor = speed * 7;
            const color = new THREE.Color().lerpColors(baseColor, maxSpeedColor, speedFactor);
            colorArray[i * 3] = color.r;
            colorArray[i * 3 + 1] = color.g;
            colorArray[i * 3 + 2] = color.b;
        });
        
        meshRef.current.instanceMatrix.needsUpdate = true;
        
        // Add null check for geometry and color attribute
        if (meshRef.current?.geometry?.attributes?.color) {
            meshRef.current.geometry.attributes.color.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <sphereGeometry args={[0.5, 32, 32]}>
                <instancedBufferAttribute
                    attach="attributes-color"
                    args={[colorArray, 3]}
                />
            </sphereGeometry>
            <meshLambertMaterial 
                vertexColors={true}
                emissiveIntensity={1.5}
                // Remove fixed white emissive color
                emissive={baseColor} // Use base color as emissive base
            />
        </instancedMesh>
    );
};

export default function Stage() {
    return (
        <Canvas camera={{ position: [0, 0, 15], near: 1, far: 20 }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[0, 10, 0]} />
            <InstancedCircles count={80} />
            <EffectComposer>
                <ToneMapping adaptive={true} />
                <N8AO aoRadius={0.5} intensity={1} />
                <Bloom
                    luminanceThreshold={1}
                    intensity={0.5}
                    levels={9}
                    mipmapBlur
                />
            </EffectComposer>

            {/* <Stats /> */}
            <OrbitControls
                autoRotate
                autoRotateSpeed={0.001}
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
        </Canvas>
    );
}
