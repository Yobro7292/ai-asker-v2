import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import Header from "@/components/Header/Index";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Index";
import Footer from "@/components/Footer";
import BraveDetection from "@/lib/utils/BraveDetection";

export const metadata = {
  title: "AI Asker",
};
export default function Home() {
  return (
    <BraveDetection>
      <FpjsProvider
        loadOptions={{
          apiKey: "HZmE91qHgdYIkzF16cfX",
        }}
      >
        <main className={styles.main}>
          <Header logo headerButtons links />
          <Hero />
          <Footer />
        </main>
      </FpjsProvider>
    </BraveDetection>
  );
}
