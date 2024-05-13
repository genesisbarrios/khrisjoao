import { EventEmitter } from "events";
import Experience from "./Experience.js";
import GSAP from "gsap";
import convert from "./Utils/convertDivsToSpans.js";
import * as THREE from "three";

export default class Preloader extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.device = this.sizes.device;

        this.sizes.on("switchdevice", (device) => {
            this.device = device;
        });

        this.world.on("worldready", () => {
            this.setAssets();
            this.playIntro();
            this.playSecondIntro();
        });
    }

    setAssets() {
        this.room = this.experience.world.room.actualRoom;
        this.roomChildren = this.experience.world.room.roomChildren;

        this.roomChildren.pot = this.resources.assets[11];
        this.roomChildren.plant = this.resources.assets[12];
        this.roomChildren.metalSun = this.resources.assets[10];
        this.roomChildren.musicNote = this.resources.assets[9];
        
        console.log('-resources-');
        console.log(this.resources);
        console.log(this.resources.assets)
    }

    unHideButton() {
        //unhide elements
        
        const welcomeBox = document.getElementById("welcomeBox");
        if (welcomeBox) {

            welcomeBox.classList.remove("hide");

            // Set the style properties for the button and welcome elements
            welcomeBox.style.flexDirection = "column";
            welcomeBox.style.justifyContent = "center";
            welcomeBox.style.alignItems = "center";
            welcomeBox.style.height = "25%";
            welcomeBox.style.width = "25%";
            welcomeBox.style.alignSelf = "center";
            
       }
    }

    firstIntro() {
        return new Promise((resolve) => {
            this.timeline = new GSAP.timeline();
            //this.timeline.set(".animatedis", { y: 0, yPercent: 100 });
            this.timeline.to(".preloader", {
                opacity: 0,
                delay: 1,
                onComplete: () => {
                    document
                        .querySelector(".preloader")
                        .classList.add("hidden");

                       
                },
            });
        });
    }

    secondIntro() {
        return new Promise((resolve) => {
            
            this.secondTimeline = new GSAP.timeline();

            this.secondTimeline
                .to(
                    this.room.position,
                    {
                        x: 0,
                        y: 0,
                        z: 0,
                        ease: "power1.out",
                    },
                    "same"
                )
                .to(
                    this.roomChildren.akai_lp.scale,
                    {
                        x: 0.02,
                        y: 0.02,
                        z: 0.02,
                    },
                    "same"
                )
                .to(
                    this.roomChildren.akai_lp.position,
                    {
                        x: -5.638711,
                        y: 6.2,
                        z: 2.3243,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[1].position,//pot
                    {
                        x: -5.638711,
                        y: 6.2,
                        z: 2.3243,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[1].scale,//pot
                    {
                        x: 2,
                        y: 2,
                        z: 2,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[12].position,//plant
                    {
                        x: -5.638711,
                        y: 6.2,
                        z: 2.3243,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[12].scale,//plant
                    {
                        x: 10,
                        y: 10,
                        z: 10,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[9].position,//music note
                    {
                        x: -5.638711,
                        y: 6.2,
                        z: 2.3243,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[9].scale,//music note
                    {
                        x: 5,
                        y: 5,
                        z: 5,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[10].position,//metalSun
                    {
                        x: -5.638711,
                        y: 6.2,
                        z: 2.3243,
                    },
                    "same"
                )
                .to(
                    this.resources.assets[10].scale,//metalSun
                    {
                        x: 15,
                        y: 15,
                        z: 15,
                    },
                    "same"
                )
                .to(
                    this.roomChildren.cords.scale,
                    {
                        x: 0,
                        y: 3,
                        z: 2,
                    },
                    "same"
                )
                .to(
                    this.roomChildren.cords.position,
                    {
                        x: -4.8,
                        y: -11.5618,
                        z: -1,
                    },
                    "same"
                )
                .to(
                    this.roomChildren.table001.scale,
                    {
                        x: 15,
                        y: 15,
                        z: 35,
                    },
                    "same"
                )
                .to(
                    this.roomChildren.table001.position,
                    {
                        x: 0.638711,
                        y: -5.5618,
                        z: 1.3243,
                    },
                    "same"
                )
                .to(//monitor
                    this.roomChildren.plane001.scale,
                    {
                        x: 8,
                        y: 3,
                        z: 5,
                    },
                    "same"
                    )
                .to(
                    this.roomChildren.plane001.position,
                    {
                        x: 0.638711,
                        y: 14,
                        z: 1.3243,
                    },
                    "same"
                )
                .to(this.roomChildren.macmini_1_0.scale, {
                    x: 3,
                    y: 3,
                    z: 3,
                },
                "same"
                )
                .to(
                    this.roomChildren.macmini_1_0.position,
                    {
                        x: 7.638711,
                        y: 6.5618,
                        z: 0.3243,
                    },
                    "same"
                )
                .to(this.roomChildren.krkspeakerl_rubber_0001.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                },
                "same"
                )
                .to(
                    this.roomChildren.krkspeakerl_rubber_0001.position,
                    {
                        x: -10.638711,
                        y: 6.2,
                        z: 0.3243,
                    },
                    "same"
                )
                .to(this.roomChildren.krkspeakerl_rubber_0001.rotation, {
                    z: 45,
                },
                "same"
                )
                .to(this.roomChildren.krkspeakerl_rubber_0002.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                },
                "same"
                )
                .to(
                    this.roomChildren.krkspeakerl_rubber_0002.position,
                    {
                        x: 10.638711,
                        y: 6.2,
                        z: 0.3243,
                    },
                    "same"
                )
                .to(this.roomChildren.krkspeakerl_rubber_0002.rotation, {
                    z: -90,
                },
                "same"
                )
                .to(
                    this.camera.orthographicCamera.position,
                    {
                        
                        y:5,
                        //y: zoomInValues.cameraPositionY,
                        //duration: 3,
                        onUpdate: () => {
                            this.camera.orthographicCamera.lookAt(0,1,0);
                        },
                    }
                )
                .to(this.camera.orthographicCamera, {
                    zoom: 2,
                    duration: 1,
                    onUpdate: () => {
                        // Update the camera's projection matrix during the animation
                        this.camera.orthographicCamera.updateProjectionMatrix();
                    }
                })
                .to(".arrow-svg-wrapper", {
                    opacity: 1,
                    onComplete: resolve
                });

                // Call resolve to indicate that the animation is complete
                this.secondTimeline.call(resolve);
                });

    }

    onScroll(e) {
        if (e.deltaY > 0) {
            this.removeEventListeners();
            this.playSecondIntro();
        }
    }

    onTouch(e) {
        this.initalY = e.touches[0].clientY;
    }

    onTouchMove(e) {
        let currentY = e.touches[0].clientY;
        let difference = this.initalY - currentY;
        if (difference > 0) {
            console.log("swipped up");
            this.removeEventListeners();
            this.playSecondIntro();
         
        }
        this.intialY = null;
    }

    removeEventListeners() {
        window.removeEventListener("wheel", this.scrollOnceEvent);
        window.removeEventListener("touchstart", this.touchStart);
        window.removeEventListener("touchmove", this.touchMove);
    }

    addEventListeners() {
        window.addEventListener("wheel", this.scrollHandler);
        window.addEventListener("touchmove", this.touchMoveHandler);
    }

    async playIntro() {
        this.scaleFlag = true;
        await this.firstIntro();
        this.moveFlag = true;
        this.scrollOnceEvent = this.onScroll.bind(this);
        this.touchStart = this.onTouch.bind(this);
        this.touchMove = this.onTouchMove.bind(this);
        addEventListeners()
    }
    async playSecondIntro() {
        console.log("second intro")
        this.moveFlag = false;
        await this.secondIntro();
        this.unHideButton();

        this.secondTimeline.call(this.unHideButton.bind(this));
        
        this.scaleFlag = false;
        this.emit("enablecontrols");
    }

    move() {
        if (this.device === "desktop") {
            this.room.position.set(-1, 0, 0);
        } else {
            this.room.position.set(0, 0, -1);
        }
    }

    scale() {
        this.roomChildren.rectLight.width = 0;
        this.roomChildren.rectLight.height = 0;

        if (this.device === "desktop") {
            this.room.scale.set(0.11, 0.11, 0.11);
        } else {
            this.room.scale.set(0.07, 0.07, 0.07);
        }
    }

    update() {
        // if (this.moveFlag) {
        //     this.move();
        // }

        if (this.scaleFlag) {
            this.scale();
        }
    }
}