import { Poppins } from "next/font/google";
import styles from "./hero.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

export default function Hero() {
  return (
    <>
      <div className={styles.center}>
        <div
          className={`w-[90%] flex justify-center items-center rounded-xl shadow-lg backdrop-blur-xl px-12 py-56 text-white ${poppins.className}`}
        >
          Whereas recognition of the inherent dignity
        </div>
      </div>
    </>
  );
}
