"use client";
import { Poppins } from "next/font/google";
import styles from "./hero.module.css";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700", "800"],
});

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <>
      <div className={styles.center}>
        <Particles
          className="absolute w-full top-0 left-0 min-h-screen"
          id="tsparticles"
          options={{
            fps_limit: 120,
            interactivity: {
              detect_on: "canvas",
              events: {
                onDiv: {
                  selectors: "#repulse-div",
                  enable: true,
                  mode: "repulse",
                  type: "circle",
                },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                attract: { distance: 200, duration: 0.4, factor: 5 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              line_linked: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 0.8,
                straight: false,
              },
              number: { density: { enable: true, value_area: 800 }, value: 80 },
              opacity: {
                anim: { enable: true, opacity_min: 0.3, speed: 1, sync: false },
                random: false,
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                anim: { enable: true, size_min: 0.1, speed: 4, sync: false },
                random: true,
                value: 3,
              },
            },
            retina_detect: true,
          }}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div
          className={`relative w-full sm:w-[90%] lg:w-[80%] h-56 py-56 flex flex-col justify-center items-center rounded-xl sm:shadow-lg backdrop-blur-sm px-2 mx-4 -mt-[40px] sm:mt-0 sm:px-6 lg:px-12 text-white ${poppins.className}`}
        >
          <p className="text-sm sm:text-lg lg:text-xl font-light mb-4 sm:mb-5 lg:mb-6">
            YOUR PERSONAL BOT IS HERE
          </p>
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold my-4 text-center">
            Ask Anything You Want{" "}
          </span>

          <div
            className="w-[8rem] h-[8rem] bg-[#00000024] p-4 mt-8 ring ring-teal-400 ring-offset-2 ring-offset-white rounded-full z-10 flex justify-center items-center text-4xl font-bold text-white  cursor-pointer shadow-xl"
            id="repulse-div"
          >
            <Image
              src={"/rocket.svg"}
              alt={"rocket"}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
