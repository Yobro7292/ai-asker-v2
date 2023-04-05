import Loader from "../common/Loader/Index";

interface OutputProps {
  output: string;
  thinking: boolean;
}
export default function OutputArea({ output, thinking }: OutputProps) {
  return (
    <div className="relative w-full h-full flex justify-center items-center bg-black-high">
      {thinking ? (
        <Loader />
      ) : (
        <textarea
          className="w-full h-full resize-none bg-black-high rounded-lg mb-1 py-4 px-4 text-gray-100 focus:outline-none text-justify"
          value={output}
          readOnly
        ></textarea>
      )}
    </div>
  );
}
