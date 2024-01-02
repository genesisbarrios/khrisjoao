import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ASScroll from "@ashthornton/asscroll";
import * as Tone from 'tone'

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        this.synth = new Tone.Synth().toDestination();
        // this.room.children.forEach((child) => {
        //     if (child.type === "RectAreaLight") {
        //         this.rectLight = child;
        //     }
        // });
        // this.circleFirst = this.experience.world.floor.circleFirst;
        // this.circleSecond = this.experience.world.floor.circleSecond;
        // this.circleThird = this.experience.world.floor.circleThird;

        //this.setSmoothScroll();
        //this.setScrollTrigger();
        //this.addButtonToScene();
        

        GSAP.registerPlugin(ScrollTrigger);

        //document.querySelector(".page").style.overflow = "visible";

        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            //this.setSmoothScroll();
        }
        //this.setScrollTrigger();
       window.addEventListener("click", this.onMouseClick);
    }
  
    
    setupASScroll() {
        // https://github.com/ashthornton/asscroll
        const asscroll = new ASScroll({
            ease: 0.1,
            disableRaf: true,
        });

        GSAP.ticker.add(asscroll.update);

        ScrollTrigger.defaults({
            scroller: asscroll.containerElement,
        });

        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
            scrollTop(value) {
                if (arguments.length) {
                    asscroll.currentPos = value;
                    return;
                }
                return asscroll.currentPos;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            fixedMarkers: true,
        });

        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);

        requestAnimationFrame(() => {
            asscroll.enable({
                newScrollElements: document.querySelectorAll(
                    ".gsap-marker-start, .gsap-marker-end, [asscroll]"
                ),
            });
        });
        return asscroll;
    }

    setSmoothScroll() {
        this.asscroll = this.setupASScroll();
    }

    playSynth() {
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        //this.swim = this.mixer.clipAction(this.room.animations[0]);
        //this.swim.play();
        if(this.roomChildren){
            console.log(this.roomChildren)
            this.roomChildren["akai_lp"].addEventListener("click", () => {
                console.log("you're playing the piano");
                //play a random note
                const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
                this.synth.triggerAttackRelease("C4", "8n");
                console.log('play the piano')
            });
        }
    }

    onMouseClick(event) {
        // if(this.camera){
        //     console.log('mouse click')
        //     // Calculate the mouse position in normalized device coordinates
        //     const mouse = new THREE.Vector2();
        //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        //     console.log(this.camera);
        //     // Update the raycaster with the mouse position and camera
        //     this.raycaster.setFromCamera(mouse, this.camera.orthographicCamera);
        
        //     // Find objects intersecting with the ray
        //     const intersects = this.raycaster.intersectObjects(this.room.roomChildren);
        
        //     if (intersects.length > 0) {
        //     // Handle the intersection here
        //     const clickedObject = intersects[0].object;
        
        //     if (clickedObject.name === "akai_lp") {
        //         // Perform actions specific to the "akai_lp" object
        //         console.log("Clicked akai_lp object!");
        //         this.playSynth();
        //     }
        //     }
        // }

       // this.playSynth();
      }

     

   
    resize() {}

    update() {}
}