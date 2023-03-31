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
    <div className={`text-3xl text-white ${poppins.className}`}>Ai Asker</div>
  );
}
