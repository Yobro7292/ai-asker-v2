import Image from "next/image";

export default function InputArea() {
  return (
    <div className="w-full flex justify-between items-center bg-black-high rounded-lg mt-1">
      <input
        type="text"
        className="w-full m-0 py-4 px-4 border-none text-xl text-gray-100 bg-transparent focus:outline-none"
        placeholder="Ask me anything"
      />
      <Image
        src="/svg/send.svg"
        width={40}
        height={40}
        alt="send button"
        className="px-2 py-1 m-2 cursor-pointer invert bg-black rounded-lg"
      />
    </div>
  );
}
