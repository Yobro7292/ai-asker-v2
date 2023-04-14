import { setOutputText } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/utils/hooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
interface RecentProps {
  onClose?: () => void;
}
export default function RecentSearch({ onClose }: RecentProps) {
  const recents = useAppSelector((state) => state.auth.recents);
  const [recent, setRecent] = useState(recents);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setRecent(recents);
  }, [recents]);
  return (
    <div className="max-h-[81vh] lg:min-h-[81vh] flex flex-col justify-start items-center w-full bg-black-low bg-n rounded-md lg:py-2 px-2 lg:px-3 overflow-auto">
      <p className="hidden lg:block text-sm font-me my-2">
        Your recent searches
      </p>
      {recent &&
        recent.map((data, i) => {
          if (data.title !== "") {
            return (
              <div
                key={i}
                className="min-h-[60px] w-full flex justify-center items-center lg:my-2"
              >
                <motion.div
                  className="w-full px-4 py-2 lg:py-4 rounded-lg bg-neutral-800 text-base text-gray-300 inline-block text-ellipsis !overflow-hidden whitespace-nowrap"
                  onClick={() => {
                    if (data.content) {
                      dispatch(setOutputText(data.content));
                      if (onClose) onClose();
                      if (pathname == "/") router.push("/playground");
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
                  <p className="text-sm lg:text-base">{data.title}</p>
                </motion.div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
