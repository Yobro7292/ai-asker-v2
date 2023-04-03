import Header from "@/components/Header/Index";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Index";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Asker",
};
export default function Home() {
  return (
    <main className={styles.main}>
      <Header logo headerButtons links />
      <Hero />
      <Footer />
    </main>
  );
}
