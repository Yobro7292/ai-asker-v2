import { setOutputText } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/utils/hooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface RecentProps {
  onClose?: () => void;
}
export default function RecentSearch({ onClose }: RecentProps) {
  const recents = useAppSelector((state) => state.auth.recents);
  const [recent, setRecent] = useState(recents);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setRecent(recents);
  }, [recents]);
  return (
    <div className="max-h-[81vh] lg:min-h-[81vh] flex flex-col justify-start items-center w-full bg-black-low bg-n rounded-md py-2 px-3 overflow-auto">
      {recent &&
        recent.map((data, i) => {
          if (data.title !== "") {
            return (
              <div key={i} className="min-h-[60px] w-full my-2">
                <motion.div
                  className="w-full px-4 py-4 rounded-lg bg-black-high text-base text-gray-300 inline-block text-ellipsis !overflow-hidden whitespace-nowrap"
                  onClick={() => {
                    if (data.content) {
                      dispatch(setOutputText(data.content));
                      if (onClose) onClose();
                    }
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  {data.title}
                </motion.div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
