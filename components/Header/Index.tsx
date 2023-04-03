"use client";
import { Poppins } from "next/font/google";
import Logo from "./Logo";
import Links from "./Links";
import HeaderButtons from "./HeaderButtons";
import { Menu } from "./Menu";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <div
      className={`w-full bg-transparent top-0 left-0 flex justify-between items-center px-5 sm:px-10 lg:px-20 py-2 sm:py-6 z-10 backdrop-blur-sm ${
        pathname === "/" ? "absolute mt-0" : "mt-3"
      }`}
    >
      {logo && <Logo poppins={poppins} />}
      {links && <Links poppins={poppins} />}
      {headerButtons && <HeaderButtons poppins={poppins} />}
      <Menu />
    </div>
  );
}
