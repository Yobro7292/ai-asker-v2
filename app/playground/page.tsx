import { Poppins } from "next/font/google";
import styles from "../page.module.css";
import Header from "@/components/Header/Index";
import PlaygroundArea from "@/components/PlaygroundArea";
import BraveDetection from "@/lib/utils/BraveDetection";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";

export const metadata = {
  title: "Playground Ai Asker",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <BraveDetection>
      <FpjsProvider
        loadOptions={{
          apiKey: process.env.FINGERPRINT_PUBLIC_KEY || "",
        }}
      >
        <main className={`${styles.main} ${poppins.className}`}>
          <div className="w-full max-h-screen flex flex-col justify-start items-center">
            <Header logo={true} />
            <PlaygroundArea />
          </div>
        </main>
      </FpjsProvider>
    </BraveDetection>
  );
}
