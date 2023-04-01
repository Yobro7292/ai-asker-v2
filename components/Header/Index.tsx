import { Poppins } from "next/font/google";
import Logo from "./Logo";
import Links from "./Links";
import HeaderButtons from "./HeaderButtons";
import { Menu } from "./Menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "600", "300"],
});

export default function Header() {
  return (
    <div className="w-full bg-transparent absolute top-0 left-0 flex justify-between items-center px-5 sm:px-10 lg:px-20 py-2 sm:py-6 z-10 backdrop-blur-sm">
      <Logo poppins={poppins} />
      <Links poppins={poppins} />
      <HeaderButtons poppins={poppins} />
      <Menu />
    </div>
  );
}
