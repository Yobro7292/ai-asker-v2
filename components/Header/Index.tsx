import { Poppins } from "next/font/google";
import Logo from "./Logo";
import Links from "./Links";
import HeaderButtons from "./HeaderButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "600", "300"],
});

export default function Header() {
  return (
    <div className="w-full bg-transparent absolute top-0 left-0 flex justify-between items-center px-20 py-6 z-10">
      <Logo poppins={poppins} />
      <Links poppins={poppins} />
      <HeaderButtons poppins={poppins} />
    </div>
  );
}
