"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
const baseColor = new THREE.Color("#918CC6"); // Blue, representing slower speed
const maxSpeedColor = new THREE.Color("#f5974e"); // Red, representing higher speed
THREE.ColorManagement.enabled = true;

function OrbitingCircle({ orbitRadius, speed, xOffset }) {


    const speedFactor = (speed - 0.1) / (1 - 0.2); // Normalize speed between 0.1 and 0.6 for color interpolation
    // Dynamically update the color based on speed
    const color = new THREE.Color().lerpColors(
        baseColor,
        maxSpeedColor,
        speedFactor
    );

    // Use react-spring to animate the circle's position around the orbit
    const { spring } = useSpring({
        from: { spring: 0 },
        to: { spring: 2 * Math.PI }, // Complete a full orbit
        loop: true, // Loop the animation
        config: { duration: (1 / speed) * 10000 }, // Control the speed of the orbit
    });

    // Calculate the position of the circle using the spring value
    const position = spring.to((spring) => [
        Math.cos(spring) * orbitRadius + xOffset, // Adjusted x position with xOffset
        Math.acos(spring) * orbitRadius, // y position (keeping it in a 2D plane for simplicity)
        Math.sin(spring) * orbitRadius, // z position
    ]);

    return (
        <a.mesh position={position}>
            <circleGeometry args={[1, 32]} />
            {/* Circle geometry with radius 0.5 and 32 segments */}
            <meshBasicMaterial color={color} /> {/* Basic blue material */}
        </a.mesh>
    );
}

const createCircles = (count) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
        const orbitRadius = Math.random() * 5 + 2; // Random radius between 2 and 7
        const speed = Math.random() * 0.5 + 0.1; // Random speed between 0.1 and 0.6
        const xOffset = Math.random() * 10 - 5; // Random xOffset between -5 and 5
        circles.push({ orbitRadius, speed, xOffset });
    }
    return circles;
};

export default function OptimizedStage() {
    const circles = useMemo(() => createCircles(80), []);
    return (
        <Canvas camera={{ position: [0, 0, 10], near: 1, far: 100 }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[0, 10, 0]} />
            {/* <OrbitingCircle orbitRadius={5} speed={0.2} /> */}
            {circles.map(({ orbitRadius, speed, xOffset}, index) => (
                <OrbitingCircle
                    key={index}
                    orbitRadius={orbitRadius}
                    speed={speed}
                    xOffset={xOffset}
                />
            ))}

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
                autoRotateSpeed={0.1}
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
        </Canvas>
    );
}
