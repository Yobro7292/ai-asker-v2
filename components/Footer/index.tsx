import Github from "@/assets/svg/github";
import Instagram from "@/assets/svg/instagram";
import Twitter from "@/assets/svg/twitter";
import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  { title: "Instagram", image: <Instagram />, href: "#" },
  { title: "Twitter", image: <Twitter />, href: "#" },
  { title: "Github", image: <Github />, href: "#" },
  {
    title: "Daily Dev",
    image: (
      <Image src="/dailyDev.png" width={24} height={24} alt={"dailydev"} />
    ),
    href: "#",
  },
];
export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-transparent backdrop-blur-sm w-full z-10 absolute bottom-0 left-0"
    >
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <ul className="my-4 flex justify-center gap-6 md:gap-8">
          {socialMedia.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-white"
                >
                  <span className="sr-only">{item.title}</span>
                  {item.image}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
