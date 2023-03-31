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
];
export default function HeaderButtons({ poppins }: PoppinsFontClasses) {
  return (
    <>
      {" "}
      <div
        className={`text-md text-white font-light ${poppins.className} py-2`}
      >
        {/* {links.map((button, i) => {
          return (
            <button
              key={i}
              className={`${
                i !== 0 && i !== links.length - 1 ? "mx-4" : "mx-0"
              } text-md text-white hover:text-gray-200 font-thin px-6 py-2 bg-lime-700 rounded-full`}
            >
              {button.lable}
            </button>
          );
        })} */}
        <button
          className={`px-6 py-3 text-sm text-black bg-white rounded-xl font-semibold hover:bg-gray-800 hover:text-white `}
        >
          Get Started
        </button>
      </div>
    </>
  );
}
