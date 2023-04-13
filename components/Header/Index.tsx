"use client";
import { Poppins } from "next/font/google";
import Logo from "./Logo";
import HeaderButtons from "./HeaderButtons";
import { Menu } from "./Menu";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/utils/hooks";
import { useEffect, useState } from "react";

interface Propstype {
  logo?: boolean;
  links?: boolean;
  headerButtons?: boolean;
}
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "600", "300"],
});

export default function Header({ logo, links, headerButtons }: Propstype) {
  const user = useAppSelector((state) => state.auth.user);
  const Limit = useAppSelector((state) => state.auth.user.limit);
  const [remainLimit, setRemainLimit] = useState<number>(0);
  const pathname = usePathname();
  useEffect(() => {
    setRemainLimit(Limit);
  }, [Limit]);
  return (
    <div
      className={`w-full bg-transparent top-0 left-0 flex justify-between items-center px-5 sm:px-10 lg:px-20 py-2 sm:py-6 z-10 backdrop-blur-sm ${
        pathname === "/" ? "absolute mt-0" : "mt-3"
      }`}
    >
      {logo && <Logo poppins={poppins} />}
      {user.name !== "" && (
        <div className="w-full text-sm font-medium hidden lg:flex justify-end text-white py-2">
          <p>
            {" "}
            You have{" "}
            <span
              className={`font-semibold ${
                remainLimit <= 1 ? "text-red-500" : "text-green-500"
              }`}
            >
              {" "}
              {remainLimit}{" "}
            </span>{" "}
            questions left.
          </p>
        </div>
      )}

      {user && user.name && (
        <div className="w-full text-lg font-medium uppercase hidden lg:flex justify-end text-white py-2">
          {" "}
          hi, {user.name}{" "}
        </div>
      )}
      {!user && headerButtons && <HeaderButtons poppins={poppins} />}
      <Menu remainLimit={remainLimit} user={user} poppins={poppins} />
    </div>
  );
}
