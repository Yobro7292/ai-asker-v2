"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppSelector } from "@/lib/utils/hooks";

export default function StartButton() {
  const UserId = useAppSelector((state) => state.auth.user.id);
  return (
    <motion.div
      className="w-[8rem] h-[8rem] bg-stone-800 p-4 mt-8 ring ring-stone-300 ring-offset-8 ring-offset-black rounded-full z-10 flex justify-center items-center text-4xl font-bold text-white  cursor-pointer shadow-xl"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
    >
      {UserId === "" || UserId === null ? (
        <Image
          src={"/svg/loading.svg"}
          alt={"rocket"}
          width={100}
          height={100}
          className="animate-spin cursor-not-allowed"
        />
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.2,
            rotate: 90,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
        >
          <Link href={"/playground"}>
            <Image
              src={"/rocket.svg"}
              alt={"rocket"}
              width={100}
              height={100}
            />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
