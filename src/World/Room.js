import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; // Import the GLTFLoader
import Experience from "../Experience.js";
import GSAP from "gsap";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import * as Tone from 'tone'

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        this.roomChildren = {};
        this.synth = new Tone.Synth().toDestination();
        this.raycaster = new THREE.Raycaster();
        this.camera = this.experience.camera.perspectiveCamera;

        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        };

        this.setModel();
        this.setAnimation();
       
        //this.onMouseMove();
        // Bind this to the class instance for event handlers
        this.onMouseClick = this.onMouseClick.bind(this);
        window.addEventListener("click", (event) => this.onMouseClick(event));

         // Check if note and logo models are loaded
         console.log(this.resources.items);
         console.log('----resources----')
        //  if (this.resources.items.musicNote && this.resources.items.discord) {
        //     // Both models are loaded, add them to the scene
        //     this.scene.add(this.resources.items.musicNote.clone());
        //     this.scene.add(this.resources.items.discord.clone());
        // } else {
        //     // Models are still loading, listen for the 'ready' event
        //     this.resources.once("ready", () => {
        //         // Once models are loaded, add them to the scene
        //         this.scene.add(this.resources.items.discord.clone());
        //         this.scene.add(this.resources.items.musicNote.clone());
        //     });
        // }
    }

    async displayRandomModelAboveAkaiLP() {
        const akaiLP = this.roomChildren["akai_lp"];
        if (!akaiLP) return;
    
        const akaiLPPosition = akaiLP.position.clone();
        const randomOffset = new THREE.Vector3(
            -5.638711, // No change in X offset
            Math.random() * (10 - 6.3) + 6.3, // Random Y offset between 5 and 10 (adjust as needed)
            2.3243 // No change in Z offset
        );
    
        const modelPath = "./models/note.glb"; // Adjust the path to your model file
        //console.log(this.roomChildren);
        // Once loaded, create a mesh from the model geometry
        const modelMesh = new THREE.Mesh(this.roomChildren.musicNote.geometry, this.roomChildren.musicNote.material); // Assuming the model has a single child
        
        this.roomChildren.musicNote.position = (akaiLPPosition.add(randomOffset)); // Set position
        this.scene.add(this.roomChildren.musicNote); // Add the mesh to the scene
    }
    
    
    setModel() {
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            //todo: check this
            console.log(child);
           

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    //console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            if (child.name === "macmini_1_0" ||  child.name === "pot" ||
            child.name === "plant" || 
            child.name === "metalSun" ||
            child.name === "spotify" ||
            child.name === "applemusiclogo" || 
            child.name === "soundcloud" ||
            child.name === "youtube" ||
            child.name === "instagram" ||
            child.name === "tiktok" ) {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }
            
            if (child.name === "table") {
                // console.log(child);
                child.children[0].material = new THREE.MeshPhysicalMaterial();
                child.children[0].material.roughness = 0;
                child.children[0].material.color.set(0x549dd2);
                child.children[0].material.ior = 3;
                child.children[0].material.transmission = 1;
                child.children[0].material.opacity = 1;
                child.children[0].material.depthWrite = false;
                child.children[0].material.depthTest = false;
            }

            if (
                child.name === "akai_lp" ||
                child.name === "cylinder" ||
                child.name === "krkspeakerl_rubber_0001" ||
                child.name === "krkspeakerl_rubber_0002" ||
                child.name === "object_5" ||
                child.name === "cords" ||
                child.name === "object_4001" ||
                child.name === "plane001" ||
                child.name === "table001" ||  
                child.name === "pot" ||
                child.name === "plant" || 
                child.name === "metalSun" ||
                child.name === "spotify" ||
                child.name === "applemusiclogo" || 
                child.name === "soundcloud" ||
                child.name === "youtube" ||
                child.name === "instagram" ||
                child.name === "tiktok" ||
                child.name === "musicNote"
            ) {
                child.scale.set(1, 1, 1);
            }else {
                child.scale.set(0, 0, 0);
            }

          
            this.roomChildren[child.name.toLowerCase()] = child;
        });

        const width = 0.5;
        const height = 0.7;
        const intensity = 1;
        const rectLight = new THREE.RectAreaLight(
            0xffffff,
            intensity,
            width,
            height
        );
        rectLight.position.set(7.68244, 7, 0.5);
        rectLight.rotation.x = -Math.PI / 2;
        rectLight.rotation.z = Math.PI / 4;
        this.actualRoom.add(rectLight);

        this.roomChildren["rectLight"] = rectLight;

        const rectLightHelper = new RectAreaLightHelper(rectLight);
        rectLight.add(rectLightHelper);
        //console.log(this.room);

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11, 0.11, 0.11);
    }

    setAnimation() {
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        this.swim = this.mixer.clipAction(this.room.animations[0]);
        this.swim.play();
    }

    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.rotation =
                ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.05;
        });
    }

    playSynth() {
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        //this.swim = this.mixer.clipAction(this.room.animations[0]);
        //this.swim.play();
        
        // Trigger the synth to play a note
        if (this.roomChildren && this.roomChildren["akai_lp"]) {
            console.log("You're playing the piano");
    
            // Play a random note
            const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
            const randomNote = notes[Math.floor(Math.random() * notes.length)];
            const noteToPlay = randomNote + "4";
            this.synth.triggerAttackRelease(noteToPlay, "8n");
    
            // Trigger the animation on the piano object
            const pianoObject = this.roomChildren["akai_lp"];
            const initialScale = pianoObject.scale.clone();
            const targetScale = initialScale.clone().multiplyScalar(1.1); // Scale up by 10%
            const duration = 0.5; // Duration of the animation in seconds
    
            // Define the animation
            const scaleAnimation = GSAP.timeline();
            scaleAnimation.to(pianoObject.scale, { x: targetScale.x, y: targetScale.y, z: targetScale.z, duration: duration });
            scaleAnimation.to(pianoObject.scale, { x: initialScale.x, y: initialScale.y, z: initialScale.z, duration: duration });
    
            console.log('Play the piano');
            this.displayRandomModelAboveAkaiLP();
        }
        
    }

    onMouseClick(event) {
        if (!this.raycaster) return;

        // Calculate the mouse position in normalized device coordinates
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        console.log("Mouse position:", mouse);
    
        // Update the raycaster with the mouse position and camera
        this.raycaster.setFromCamera(mouse, this.camera);
        this.raycaster.far = 1000; // or some larger value

    
        console.log("akai_lp object:", this.roomChildren["akai_lp"].position);

        // Find objects intersecting with the ray
        const intersects = this.raycaster.intersectObject(this.roomChildren["akai_lp"], true);
        
        console.log('intersects click')
        console.log(intersects);
        
    
        // Check if there's any intersection
        if (intersects.length > 0) {
            // Check if the clicked object is the "akai_lp"
            console.log('intersecting');
            console.log(intersects[0].object.name);
            if (intersects[0].object.name === "AKAI_LP") {
                console.log("Clicked akai_lp object!");
               
            }
        }

        //todo fix on click
        this.playSynth();
    }
    

    resize() {}

    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.actualRoom.rotation.y = this.lerp.current;

        this.mixer.update(this.time.delta * 0.0009);
    }
}