import Link from "next/link";

export interface PoppinsFontClasses {
  poppins: {
    style: Style;
    className: string | undefined;
  };
}

export interface Style {
  fontFamily: string | undefined;
  fontStyle?: string | undefined;
  fontWeight?: number | undefined;
}

export interface Link {
  lable: string;
  href: string;
}

const links: Link[] = [
  { lable: "Home", href: "#" },
  { lable: "About", href: "#" },
  { lable: "Contact us", href: "#" },
];
export default function Links({ poppins }: PoppinsFontClasses) {
  return (
    <>
      {" "}
      <div
        className={`w-full hidden lg:flex justify-center items-center text-md text-white font-light ${poppins.className} py-2`}
      >
        {links.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.href}
              className={`${
                i !== 0 && i !== links.length - 1 ? "px-6" : "px-0"
              } text-md text-white hover:text-gray-200 font-thin`}
            >
              {link.lable}
            </Link>
          );
        })}
      </div>
    </>
  );
}
