import Image from "next/image";
import { useState } from "react";

interface InputProps {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  setThinking: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function InputArea({ setOutput, setThinking }: InputProps) {
  const [question, setQuestion] = useState<string>("");

  const submitHandler = async () => {
    if (question !== "") {
      setThinking(true);
      setOutput("");
      const res = await fetch("/api/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      if (res) {
        const resData = await res.json();
        if (resData && resData.success) {
          if (resData.data && resData.data.choices.length) {
            const outputMessage = resData.data.choices[0].message.content;
            setOutput(outputMessage);
            setThinking(false);
          }
        } else {
          setOutput("Sorry something went wrong!");
          setThinking(false);
        }
      }
    }
  };
  return (
    <div className="w-full flex justify-between items-center bg-black-high rounded-lg mt-1">
      <input
        type="text"
        className="w-full m-0 py-4 px-4 border-none text-xl text-gray-100 bg-transparent focus:outline-none"
        placeholder="Ask me anything"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <Image
        src="/svg/send.svg"
        width={40}
        height={40}
        alt="send button"
        className="px-2 py-1 m-2 cursor-pointer invert bg-black rounded-lg"
        onClick={submitHandler}
      />
    </div>
  );
}
