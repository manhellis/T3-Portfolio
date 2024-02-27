"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { EffectComposer, N8AO, Bloom } from '@react-three/postprocessing'
import * as THREE from "three";

const baubleMaterial = new THREE.MeshLambertMaterial({ color: "#f5974eff", emissive: "red" })


const Circle = ({ orbitRadius, inclination, phase, speed }) => {
    const ref = useRef();

    // Animating the circle's orbit in 3D space
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + phase;
        // Spherical coordinates to Cartesian coordinates conversion
        const x = orbitRadius * Math.sin(inclination) * Math.cos(t);
        const y = orbitRadius * Math.sin(inclination) * Math.sin(t);
        const z = orbitRadius * Math.cos(inclination);
        ref.current.position.set(x, y, z);
    });

    return (
        <mesh ref={ref} castShadow receiveShadow material={baubleMaterial} >
            <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
    );
};

const generateCircles = (count) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
        // Random orbit radius between 1 and 5
        const orbitRadius = Math.random() * 10 + 1;
        // Random inclination to vary the tilt of the orbit plane
        const inclination = Math.random() * Math.PI; // 0 to 180 degrees in radians
        // Phase offset to start at a different point on the orbit
        const phase = Math.random() * 2 * Math.PI; // 0 to 360 degrees in radians
        // Random speed of orbit
        const speed = Math.random() * 0.5 + 0.1; // Ensuring a minimum speed
        circles.push({ orbitRadius, inclination, phase, speed });
    }
    return circles;
};

export default function Stage() {
    const circles = useMemo(() => generateCircles(80), []);
    return (
        <Canvas
            gl={{ antialias: false }}
            camera={{ position: [0, 0, 15], near: 1, far: 20 }}
        >
            <color attach="background" args={['#f8f9f5']} />
            <ambientLight intensity={1.5} />
            <pointLight position={[0, 10, 0]} />
            {circles.map((props, index) => (
                <Circle key={index} {...props} />
            ))}
            <EffectComposer disableNormalPass>
                <N8AO aoRadius={0.5} intensity={1} />
                <Bloom
                    luminanceThreshold={1}
                    intensity={0.5}
                    levels={9}
                    mipmapBlur
                />
            </EffectComposer>
        </Canvas>
    );
}
