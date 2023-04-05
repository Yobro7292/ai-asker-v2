import { Poppins } from "next/font/google";
import styles from "../page.module.css";
import Header from "@/components/Header/Index";
import PlaygroundArea from "@/components/PlaygroundArea";

export const metadata = {
  title: "Playground Ai Asker",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className={`${styles.main} ${poppins.className}`}>
      <div className="min-h-screen flex flex-col justify-between items-stretch">
        <Header logo={true} />
        <PlaygroundArea />
      </div>
    </main>
  );
}
