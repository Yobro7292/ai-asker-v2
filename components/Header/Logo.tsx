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

export default function Logo({ poppins }: PoppinsFontClasses) {
  return (
    <Link
      href={"/"}
      className={`w-full flex justify-start text-3xl text-white font-extrabold ${poppins.className}`}
    >
      Ai Asker
    </Link>
  );
}
