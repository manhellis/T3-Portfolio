"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import Link from "next/link";
import { useState } from "react";
import TabContainer from "@/app/components/TabContainer"; // Ensure this import path is correct
import { faCirclePlay, faComments, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenCode from "@/app/components/FullScreenCode";
const Page = ({ params }) => {


    const scene = `// cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFD966 } );
const cube = new THREE.Mesh( geometry, material );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff} ) );
function animate() {
    requestAnimationFrame(animate);
    

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    render.render(scene,camera)
}
`
    const tabContent1JSX = (
        <>
            <h1 className={post.h1}>Narrative:</h1>
            <p className={post.p}>
                ThreeJs was recommended as a JavaScript Library for implementing
                a term project. Intrigued by the possibility of building a 3D
                scene and navigating it within the browser, I embarked on this
                creative journey.
            </p>
            <h1 className={post.h1}>Development Process:</h1>
            <h2 className={post.h2}>Basic Scene:</h2>
            <p className={post.p}>
                My initial step was to create a basic 3D scene, which consisted
                of a spinning cube. This required constructing a camera object,
                cube object, lights, and the scene itself, which was then
                rendered using WebGL.
            </p>
            <p className={post.p}>
                Enhancements like animated rotation, lighting effects, and
                orbital control were added to enrich the basic cube scene.
                Additionally, I explored importing external models and
                highlighting edge geometry.
            </p>
            <FullScreenCode code={scene} />
        </>
    );
    const r2 = `const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x908e7f);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const pmremGenerator = new THREE.PMREMGenerator(renderer);


scene.background = new THREE.Color(0xbfe3dd);
scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(renderer),
    0.04
).texture;
loader.load(
    "/ManhDiorama_scene.glb",
    function (gltf) {
        gltf.scene.scale.set(2, 2, 2);
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.rotation.set(0, 90, 0);

        scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
function createCameraAnimationTimeline() {
    // Create a new timeline
    const tl = gsap.timeline({ paused: true });

    // Define various target positions to animate to
    tl.to(camera.position, {
        x: -40,
        y: 20,
        z: 95,
        duration: 2, // Customize duration as needed
        ease: "power2.inOut",
        onUpdate: () => {
            // controls.target.set(-30, 20, 80);
            // controls.update();
        },
        onComplete: () => {
            showElement(pos1);
            hideElement(pos2);
        },
    }).addLabel("position1");

    // Animation to the second position
    tl.to(camera.position, {
        x: 40,
        y: 20,
        z: 80,
        duration: 3, // Customize duration as needed
        ease: "power2.inOut",
        onUpdate: () => {
            // controls.target.set(4, 20, 80);
            // controls.update();
        },
        onComplete: () => {
            hideElement(pos1);
            hideElement(pos3);
            showElement(pos2);
        },
    }).addLabel("position2");

    // Animation to the third position
    tl.to(camera.position, {
        x: 100,
        y: 20,
        z: 50,
        duration: 4, // Customize duration as needed
        ease: "power2.inOut",
        // onUpdate: () => controls.update(),
        onComplete: () => {
            hideElement(pos2);
            showElement(pos3);
        },
    }).addLabel("position3");

    tl.to(camera.position, {
        x: 100,
        y: 40,
        z: 20,
        duration: 6,
        ease: "power2.inOut",
		
    }).addLabel("position4");


    tl.to(camera.position, {
        x: 100,
        y: 50,
        z: 0,
        duration: 6,
        ease: "power2.inOut",
    }).addLabel("position5");

    tl.paused(true);
    return tl;
}

// Create the timeline
const cameraAnimationTimeline = createCameraAnimationTimeline();
cameraAnimationTimeline.seek("position1");
// Event listener for button to animate to the first position
document.querySelector(".cam1").addEventListener("click", () => {
    // controls.enabled = false;
    cameraAnimationTimeline.tweenFromTo(
        cameraAnimationTimeline.currentLabel(),
        cameraAnimationTimeline.previousLabel()
    );
});

// Event listener for button to animate to the second position
document.querySelector(".cam2").addEventListener("click", () => {
    // controls.enabled = false;
    cameraAnimationTimeline.tweenFromTo(
        cameraAnimationTimeline.currentLabel(),
        cameraAnimationTimeline.nextLabel()
    );
});
`
    const tabContent2JSX = (
        <>
            <h2 className={post.h1}>My Own Scene:</h2>
            <p className={post.p}>
                Progressing beyond the basics, I constructed a custom scene in
                Blender using free game assets and optimized it for web display.
                This included using baked textures for efficiency and adding
                advanced lighting and post-processing effects.
            </p>
            <h2 className={post.h1}>GSAP Navigation:</h2>
            <p className={post.p}>
                To introduce interactive navigation, I employed GSAP to animate
                camera movements and linked these animations to HTML button
                controls, allowing users to explore the scene dynamically.
            </p>
            <h1 className={post.h1}>Conclusion & Reflections:</h1>
            <p className={post.p}>
                Through this project, I gained valuable insights into 3D web
                technologies and their practical applications. This experience
                has equipped me with unique skills I hope to apply in creative
                design, data-driven reporting, and producing visually engaging
                content.
            </p>
            <FullScreenCode code={r2} />
        </>
    );
    const tabContent3JSX = (
        <>
            <div className={post.linkContainer}>
                <Link
                    className={post.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://web-scripting-term-project.vercel.app/"
                >
                    Visit Site{" "}
                </Link>
            </div>
        </>
    );

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Exploring ThreeJs for Web 3D</h1>
                <h2>Project Overview</h2>
            </div>

            <TabContainer
                contentTabs={[
                    { title: "Intro", icon: <FontAwesomeIcon size='xl'icon={faCirclePlay} />,content: tabContent1JSX },
                    { title: "Conclusion", icon: <FontAwesomeIcon size='xl'icon={faComments} />, content: tabContent2JSX },
                    { title: "Visit Site", icon: <FontAwesomeIcon size='xl'icon={faGlobe} />, content: tabContent3JSX },
                ]}
            />
        </div>
    );
};

export default Page;
