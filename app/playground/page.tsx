import styles from "../page.module.css";
import Header from "@/components/Header/Index";
import RecentSearch from "@/components/RecentSearch";
import PlaygroundArea from "@/components/PlaygroundArea";
export const metadata = {
  title: "Playground Ai Asker",
};
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="min-h-screen flex flex-col justify-between items-stretch">
        <Header logo={true} />
        <div className="grid grid-cols-4 gap-2 w-full h-full sm:py-2 sm:px-16 flex-1 sm:mb-4">
          <RecentSearch />
          <PlaygroundArea />
        </div>
      </div>
    </main>
  );
}
