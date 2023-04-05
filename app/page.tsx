import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import Header from "@/components/Header/Index";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Index";
import Footer from "@/components/Footer";
import BraveDetection from "@/lib/utils/BraveDetection";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "AI Asker",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "600", "300"],
});

export default function Home() {
  return (
    <BraveDetection>
      <FpjsProvider
        loadOptions={{
          apiKey: "HZmE91qHgdYIkzF16cfX",
        }}
      >
        <main className={`${styles.main} ${poppins.className}`}>
          <Header logo headerButtons links />
          <Hero />
          <Footer />
        </main>
      </FpjsProvider>
    </BraveDetection>
  );
}
