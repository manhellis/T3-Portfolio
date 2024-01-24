import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { gsap } from "gsap";

/*
This creates a threejs scene and sets up a camera, renderer and imports a gltf model as the main
model in the scene.
T
The gsap library is used to create a timeline of camera positions, which are then animated
via buttons on the page.

*/


const scene = new THREE.Scene();
const frustumSize = 15;
const camera = new THREE.PerspectiveCamera( 
    75, // field of view
    window.innerWidth / window.innerHeight, //aspec ratio
    0.1, //near and
    1000 // far clipping planes
);

window.addEventListener("resize", onWindowResize); // on window resize adjsuting the render and camera
// configuring render settings, environment 
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
// settings for renderer required for the look. including the bg color, tone mapping and aesthetic look.
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

document.body.appendChild(renderer.domElement); // appending canvas element to body

const loader = new GLTFLoader(); // gltf is a 3d file format, loading the model
loader.load(
    "/ManhDiorama_scene.glb",
    function (gltf) {
		// configuring scale, ensuring shadows are functioning
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

        scene.add(model); // appending mode to scene
    },
    undefined,
    function (error) {
        console.error(error);
    }
);



function animate() { // animation loop required by 3js
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
// gsap animation section, first setting first camera position
gsap.set(camera.position, {
    x: -40,
    y: 20,
    z: 95,
});
function createCameraAnimationTimeline() {
    // Create a new timeline, paused by default
    const tl = gsap.timeline({ paused: true });
	// each .to is a tween object, where camera position is the target and xyz coords are animated
    tl.to(camera.position, {
        x: -40,
        y: 20,
        z: 95,
        duration: 2,
        ease: "power2.inOut",// easing function for movement 
    }).addLabel("position1"); // labels allows for easy navigation between positions

    tl.to(camera.position, {
        x: 40,
        y: 20,
        z: 80,
        duration: 3, 
        ease: "power2.inOut",
    }).addLabel("position2");

    tl.to(camera.position, {
        x: 100,
        y: 20,
        z: 50,
        duration: 4, 
        ease: "power2.inOut",
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
const cameraAnimationTimeline = createCameraAnimationTimeline(); // returns timeline object
cameraAnimationTimeline.seek("position1"); // set first position


// Event listeners for buttons forwards and backwards 
// timeline.tweenFromTo is a gsap method that allows for easy navigation between labels
document.querySelector(".cam1").addEventListener("click", () => {
    cameraAnimationTimeline.tweenFromTo(
        cameraAnimationTimeline.currentLabel(),
        cameraAnimationTimeline.previousLabel()
    );
});

document.querySelector(".cam2").addEventListener("click", () => {
    cameraAnimationTimeline.tweenFromTo(
        cameraAnimationTimeline.currentLabel(),
        cameraAnimationTimeline.nextLabel()
    );
});

function onWindowResize() { // on window resize, adjust the camera and renderer size
    const aspect = window.innerWidth / window.innerHeight;

    camera.left = (-frustumSize * aspect) / 2;
    camera.right = (frustumSize * aspect) / 2;
    camera.top = frustumSize / 2;
    camera.bottom = -frustumSize / 2;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}


animate(); // begins 3js display


// nav menu api call
$(document).ready(function () {
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (data.status === "success") {
                $(".dogImageContainer").html(
                    '<img src="' +
                        data.message +
                        '" alt="Random Dog" style=" height: 72px; object-fit: cover;" />'
                );
            } else {
                $(".dogImageContainer").text("Failed to load image.");
            }
        },
        error: function () {
            $(".dogImageContainer").text("Error fetching data.");
        },
    });
});
