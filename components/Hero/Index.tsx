"use client";
import { Poppins } from "next/font/google";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import styles from "./hero.module.css";
import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particalOptions } from "../../lib/utils/particalOptions";
import { useAppDispatch } from "@/lib/utils/hooks";
import { setVisitorId } from "@/features/auth/authSlice";
import StartButton from "../StartButton/Index";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700", "800"],
});

export default function Hero() {
  const { isLoading, data } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );
  const dispatch = useAppDispatch();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  useEffect(() => {
    if (!isLoading && data && data.visitorFound) {
      const { visitorId } = data;
      dispatch(setVisitorId(visitorId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <>
      <div className={styles.center}>
        <Particles
          className="absolute w-full top-0 left-0 min-h-screen pointer-events-none"
          id="tsparticles"
          options={particalOptions}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div
          className={`relative w-full sm:w-[90%] lg:w-[80%] h-56 py-56 flex flex-col justify-center items-center rounded-xl backdrop-blur-sm px-2 mx-4 -mt-[40px] sm:mt-0 sm:px-6 lg:px-12 text-white ${poppins.className}`}
        >
          <p className="text-sm sm:text-lg lg:text-xl font-light mb-4 sm:mb-5 lg:mb-6">
            YOUR PERSONAL BOT IS HERE
          </p>
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold my-4 text-center">
            Ask Anything You Want{" "}
          </span>
          <StartButton />
        </div>
      </div>
    </>
  );
}
