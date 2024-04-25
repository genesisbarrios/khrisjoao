import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import GUI from "lil-gui";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // Set the background color of the scene to black
        this.scene.background = new THREE.Color(0x000000);

        // this.gui = new GUI({ container: document.querySelector(".hero-main") });
        this.obj = {
            colorObj: { r: 0, g: 0, b: 0 },
            intensity: 3,
        };

        this.setSunlight();
        // this.setGUI();
    }

    setGUI() {
        this.gui.addColor(this.obj, "colorObj").onChange(() => {
            this.sunLight.color.copy(this.obj.colorObj);
            this.ambientLight.color.copy(this.obj.colorObj);
            console.log(this.obj.colorObj);
        });
        this.gui.add(this.obj, "intensity", 0, 10).onChange(() => {
            this.sunLight.intensity = this.obj.intensity;
            this.sunLight.ambientLight = this.obj.intensity;
        });
    }

    setSunlight() {
        // Set neon blue color
        const neonBlue = new THREE.Color(0x00d4ff); // Adjust the blue color value as needed
    
        // Set neon red color
        const neonRed = new THREE.Color(0xff3300); // Adjust the red color value as needed
    
        // Adjust intensity for both lights
        const intensity = 5; // Adjust intensity as needed for brightness
    
        // Create blue light
        this.sunLightBlue = new THREE.DirectionalLight(neonBlue, 7);
        this.sunLightBlue.castShadow = true;
        this.sunLightBlue.shadow.camera.far = 20;
        this.sunLightBlue.shadow.mapSize.set(2048, 2048);
        this.sunLightBlue.shadow.normalBias = 0.05;
        this.sunLightBlue.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLightBlue);
    
        // Create red light
        this.sunLightRed = new THREE.DirectionalLight(neonRed, intensity);
        this.sunLightRed.castShadow = true;
        this.sunLightRed.shadow.camera.far = 20;
        this.sunLightRed.shadow.mapSize.set(2048, 2048);
        this.sunLightRed.shadow.normalBias = 0.05;
        this.sunLightRed.position.set(1.5, 7, 3); // Adjust the position as needed
        this.scene.add(this.sunLightRed);
    
        // Create ambient light with a combination of both colors
        this.ambientLight = new THREE.AmbientLight(new THREE.Color().addColors(neonBlue, neonRed), intensity * 0.5);
        this.scene.add(this.ambientLight);
    }
    
    switchTheme(theme) {
        // No need to change background color in switchTheme method
        // Only change light colors and intensities
        
        if (theme === "dark") {
            GSAP.to(this.sunLightRed.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(this.sunLightBlue.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(this.sunLightRed, {
                intensity: 0.78,
            });
            GSAP.to(this.sunLightBlue, {
                intensity: 0.78,
            });
            GSAP.to(this.ambientLight.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(this.ambientLight, {
                intensity: 0.78,
            });
        } else {
            GSAP.to(this.sunLightRed.color, {
                r: 1,
                g: 0,
                b: 0,
            });
            GSAP.to(this.sunLightBlue.color, {
                r: 0,
                g: 0.82,
                b: 1,
            });
            GSAP.to(this.sunLightRed, {
                intensity: 5,
            });
            GSAP.to(this.sunLightBlue, {
                intensity: 7,
            });
            GSAP.to(this.ambientLight.color, {
                r: 0,
                g: 0.82,
                b: 1,
            });
            GSAP.to(this.ambientLight, {
                intensity: 5,
            });
        }
    }

    resize() {}

    update() {}
}