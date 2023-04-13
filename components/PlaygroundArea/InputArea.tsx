import {
  setIsReachedLimits,
  setOutputText,
  setRecents,
  setUpdatedLimit,
} from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/utils/hooks";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface InputProps {
  thinking: boolean;
  setThinking: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenPaymentModel: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function InputArea({
  thinking,
  setThinking,
  setIsOpenPaymentModel,
}: InputProps) {
  const [question, setQuestion] = useState<string>("");
  const UserId = useAppSelector((state) => state.auth.user.id);
  const Limit = useAppSelector((state) => state.auth.user.limit);
  const VisitorId = useAppSelector((state) => state.auth.visitorId);
  const dispatch = useAppDispatch();

  const setLimit = async () => {
    const res = await fetch(`/api/user/${VisitorId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: Limit - 1,
      }),
    });
    const resData = await res.json();
    if (resData) {
      dispatch(setUpdatedLimit(Limit - 1));
    }
  };

  const setRecentsData = async (content: string) => {
    if (UserId) {
      const res = await fetch(`/api/recents/${UserId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recents: {
            title: question,
            content: content,
          },
        }),
      });
      const resData = await res.json();
      if (resData) {
        dispatch(setRecents(resData));
      }
    }
  };

  const submitHandler = async () => {
    if (question !== "") {
      if (Limit === 0 || Limit <= 0) {
        dispatch(setOutputText(""));
        dispatch(setIsReachedLimits(true));
        setIsOpenPaymentModel(true);
      } else {
        setThinking(true);
        dispatch(setOutputText(""));
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
            if (resData.data) {
              dispatch(setOutputText(resData.data));
              setThinking(false);
              setRecentsData(resData.data);
              setLimit();
            }
          } else {
            dispatch(setOutputText("Sorry something went wrong!"));
            setThinking(false);
          }
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
      <button
        onClick={submitHandler}
        className="px-2 py-2 m-2 cursor-pointer invert bg-black rounded-lg disabled:cursor-not-allowed"
        disabled={thinking}
      >
        {thinking ? (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [1.1, 1],
              opacity: 1,
            }}
          >
            <Image
              src="/svg/loading.svg"
              width={30}
              height={30}
              alt="send button"
              className="animate-spin"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{
              scale: 0,
              rotate: 60,
              opacity: 0,
            }}
            animate={{
              scale: [1.1, 1],
              rotate: 0,
              opacity: 1,
            }}
          >
            <Image
              src="/svg/send.svg"
              width={30}
              height={30}
              alt="send button"
            />
          </motion.div>
        )}
      </button>
    </div>
  );
}
