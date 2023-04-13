import { useAppSelector } from "@/lib/utils/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Links({ poppins }: PoppinsFontClasses) {
  const Limit = useAppSelector((state) => state.auth.user.limit);
  const [remainLimit, setRemainLimit] = useState<number>(0);
  useEffect(() => {
    setRemainLimit(Limit);
  }, [Limit]);
  return (
    <div
      className={`w-full hidden lg:flex justify-center items-center text-md text-white font-light ${poppins.className} py-2`}
    >
      asas
      <p> Remaining Limit </p>
    </div>
  );
}
