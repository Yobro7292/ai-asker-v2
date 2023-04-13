import Typewriter from "typewriter-effect";
import { useAppSelector } from "@/lib/utils/hooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface OutputProps {
  thinking: boolean;
}
export default function OutputArea({ thinking }: OutputProps) {
  const OutputText = useAppSelector((state) => state.auth.outputText);
  const [output, setOutput] = useState<string>();
  useEffect(() => {
    setOutput(OutputText);
  }, [OutputText]);
  return (
    <div
      className={`relative w-full bg-black-high rounded-lg mb-1 py-4 px-4 text-lg text-gray-100 focus:outline-none text-justify overflow-auto min-h-[70vh] max-h-[70vh] whitespace-pre-line`}
    >
      {thinking ? (
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="animate-pulse"
        >
          Thinking...
        </motion.p>
      ) : (
        <>
          <Typewriter
            options={{
              delay: 8,
              strings: output,
              autoStart: true,
            }}
          />
        </>
      )}
    </div>
  );
}
