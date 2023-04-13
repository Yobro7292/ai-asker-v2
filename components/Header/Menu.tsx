import { CounterState } from "@/features/auth/authSlice";
import Image from "next/image";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import RecentSearch from "../PlaygroundArea/RecentSearch";
import { useAppSelector } from "@/lib/utils/hooks";

interface MenuProps {
  remainLimit: number;
  user: CounterState["user"];
  poppins: {
    style: Style;
    className: string | undefined;
  };
}
interface Style {
  fontFamily: string | undefined;
  fontStyle?: string | undefined;
  fontWeight?: number | undefined;
}
export const Menu = ({ remainLimit, user, poppins }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Recents = useAppSelector((state) => state.auth.recents);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={`${poppins.className} self-end`}>
      <Image
        src={"/menu-btn.svg"}
        alt={"menu-button"}
        width={60}
        height={60}
        className="block lg:hidden text-white"
        onClick={toggleDrawer}
      />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bg-black-high"
        overlayColor={"#000"}
        overlayOpacity={0.7}
      >
        <div className="bg-[#1a1a1a] w-full h-full flex flex-col justify-start">
          <div className="bg-transparent w-full px-2 py-4 font-medium text-xl">
            {" "}
            Hello, {user.name}
          </div>
          <div className="bg-transparent w-full px-2 py-4 font-normal text-sm">
            {" "}
            You have{" "}
            <span
              className={`font-semibold ${
                remainLimit <= 1 ? "text-red-500" : "text-green-500"
              }`}
            >
              {remainLimit}
            </span>{" "}
            questions left.
          </div>
          {Recents.length > 1 && (
            <div className="flex flex-col px-1 py-1">
              <p>Your recent chats..</p>
              <RecentSearch onClose={toggleDrawer} />
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};
