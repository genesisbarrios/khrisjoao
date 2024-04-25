import * as THREE from "three";
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
    }

    

    setModel() {
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            // console.log(child);

            // if (child.name === "Aquarium") {
            //     // console.log(child);
            //     child.children[0].material = new THREE.MeshPhysicalMaterial();
            //     child.children[0].material.roughness = 0;
            //     child.children[0].material.color.set(0x549dd2);
            //     child.children[0].material.ior = 3;
            //     child.children[0].material.transmission = 1;
            //     child.children[0].material.opacity = 1;
            //     child.children[0].material.depthWrite = false;
            //     child.children[0].material.depthTest = false;
            // }

            if (child.name === "macmini_1_0") {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }

            // if (child.name === "Mini_Floor") {
            //     child.position.x = -0.289521;
            //     child.position.z = 8.83572;
            // }

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
                child.name === "table001" 
            ) {
                child.scale.set(1, 1, 1);
            }

            child.scale.set(0, 0, 0);
            // if (child.name === "cube") {
            //     // child.scale.set(1, 1, 1);
            //     child.position.set(0, -1, 0);
            //     child.rotation.y = Math.PI / 4;
            // }

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
        console.log(this.room);

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
        }
        
    }

    onMouseClick(event) {
        if(this.camera){
            console.log('mouse click')
            // Calculate the mouse position in normalized device coordinates
            const mouse = new THREE.Vector2();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
            console.log(this.camera);
            // Update the raycaster with the mouse position and camera
            this.raycaster.setFromCamera(mouse, this.camera.orthographicCamera);
        
            // Find objects intersecting with the ray
            const intersects = this.raycaster.intersectObjects(this.room.roomChildren);
        
            if (intersects.length > 0) {
            // Handle the intersection here
            const clickedObject = intersects[0].object;
        
            if (clickedObject.name === "akai_lp") {
                // Perform actions specific to the "akai_lp" object
                console.log("Clicked akai_lp object!");
                this.playSynth();
            }
            }
        }

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