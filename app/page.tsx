import Header from "@/components/Header/Index";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Index";
import Footer from "@/components/Footer";
import { getCookie } from "cookies-next";

export const metadata = {
  title: "AI Asker",
};
export default function Home() {
  console.log(getCookie("key"));
  return (
    <main className={styles.main}>
      <Header logo headerButtons links />
      <Hero />
      <Footer />
    </main>
  );
}
