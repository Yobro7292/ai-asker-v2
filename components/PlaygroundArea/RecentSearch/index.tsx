import { useAppSelector } from "@/lib/utils/hooks";
import { useEffect, useState } from "react";

export default function RecentSearch({
  setOutput,
}: {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const recents = useAppSelector((state) => state.auth.recents);
  const [recent, setRecent] = useState(recents);
  useEffect(() => {
    setRecent(recents);
  }, [recents]);
  return (
    <div className="hidden max-h-[81vh] lg:flex lg:flex-col justify-start items-center w-full bg-black-low bg-n rounded-md py-2 px-3 overflow-auto">
      {recent &&
        recent.map((data, i) => {
          if (data.title !== "") {
            return (
              <div key={i} className="min-h-[60px] w-full my-2">
                <div
                  className="w-full px-4 py-4 rounded-lg bg-black-high text-base text-gray-300 inline-block text-ellipsis !overflow-hidden whitespace-nowrap"
                  onClick={() => {
                    if (data.content) setOutput(data.content);
                  }}
                >
                  {data.title}
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
