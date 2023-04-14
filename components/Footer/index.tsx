import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  {
    title: "Instagram",
    image: (
      <Image
        src="/svg/instagram.svg"
        width={24}
        height={24}
        alt={"instagram"}
      />
    ),
    href: "https://www.instagram.com/yogi_hariyani",
  },
  {
    title: "Twitter",
    image: (
      <Image src="/svg/twitter.svg" width={24} height={24} alt={"twitter"} />
    ),
    href: "https://twitter.com/YogiHariyani",
  },
  {
    title: "Github",
    image: (
      <Image src="/svg/github.svg" width={24} height={24} alt={"github"} />
    ),
    href: "https://github.com/yobro7292",
  },
  {
    title: "Daily Dev",
    image: (
      <Image src="/dailyDev.png" width={24} height={24} alt={"dailydev"} />
    ),
    href: "https://app.daily.dev/yogi_hariyani",
  },
];
export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-transparent opacity-50 xbackdrop-blur-sm w-full  absolute bottom-10 sm:bottom-0 left-0"
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
