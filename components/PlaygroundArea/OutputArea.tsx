import Typewriter from "typewriter-effect";
import Loader from "../common/Loader/Index";

interface OutputProps {
  output: string;
  thinking: boolean;
}
export default function OutputArea({ output, thinking }: OutputProps) {
  return (
    <div
      className={`relative w-full bg-black-high rounded-lg mb-1 py-4 px-4 text-lg text-gray-100 focus:outline-none text-justify overflow-auto min-h-[70vh] max-h-[70vh] whitespace-pre-line`}
    >
      {thinking ? (
        <Loader />
      ) : (
        <>
          <Typewriter
            options={{
              delay: 2,
              strings: output,
              autoStart: true,
            }}
          />
        </>
      )}
    </div>
  );
}
