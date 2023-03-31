"use client" 
import { Poppins } from "next/font/google";
import styles from "./hero.module.css";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Image from "next/image";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "800"],
});

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);
  return (
    <>
      <div className={styles.center}>
      <Particles id="tsparticles" options={{
    "fps_limit": 60,
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onDiv": {
          "selectors": "#repulse-div",
          "enable": true,
          "mode": "repulse",
          "type": "circle"
        },
        "resize": true
      },
      "modes": {
        "push": { "quantity": 4 },
        "attract": { "distance": 200, "duration": 0.4, "factor": 5 }
      }
    },
    "particles": {
      "color": { "value": "#ffffff" },
      "line_linked": {
        "color": "#ffffff",
        "distance": 150,
        "enable": true,
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 },
        "bounce": false,
        "direction": "none",
        "enable": true,
        "out_mode": "out",
        "random": false,
        "speed": 1,
        "straight": false
      },
      "number": { "density": { "enable": true, "value_area": 800 }, "value": 80 },
      "opacity": {
        "anim": { "enable": true, "opacity_min": 0.3, "speed": 2, "sync": false },
        "random": false,
        "value": 0.5
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "anim": { "enable": false, "size_min": 0.1, "speed": 40, "sync": false },
        "random": true,
        "value": 3
      }
    },
    "retina_detect": true
  }} init={particlesInit} loaded={particlesLoaded} />
        <div
          className={`w-[90%] h-56 py-56 bg-black opacity-70 flex flex-col justify-center items-center rounded-xl shadow-lg backdrop-blur-xl px-12 text-white ${poppins.className}`}
        >
          <p className="text-xl font-light mb-6">YOUR PERSONAL BOT IS HERE</p>
          <span className="text- text-5xl font-extrabold my-4">Ask Anything You Want </span>
        
        <div className="w-[8rem] h-[8rem] bg-teal-800 p-4 mt-8 ring ring-teal-400 ring-offset-2 rounded-full z-10 flex justify-center items-center text-4xl font-bold text-white  cursor-pointer shadow-xl" id='repulse-div'>
          <Image src={'/rocket.svg'} alt={'rocket'} width={100} height={100} />
        </div>
        
          
        </div>
      </div>
    </>
  );
}
