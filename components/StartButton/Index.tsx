"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StartButton() {
  return (
    <motion.div
      className="w-[8rem] h-[8rem] bg-stone-800 p-4 mt-8 ring ring-stone-300 ring-offset-8 ring-offset-black rounded-full z-10 flex justify-center items-center text-4xl font-bold text-white  cursor-pointer shadow-xl"
      animate={{
        rotate: [0, 360],
      }}
    >
      <Link href={"/playground"}>
        <Image src={"/rocket.svg"} alt={"rocket"} width={100} height={100} />
      </Link>
    </motion.div>
  );
}
