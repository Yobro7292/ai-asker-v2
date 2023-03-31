"use client"
import Button from "../common/Button";

export interface HeaderButtonsProps {
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


export default function HeaderButtons({ poppins }: HeaderButtonsProps) {
  const onButtonClicked = () => {
    
  }
  return (
    <>
      {" "}
      <div
        className={`w-full hidden lg:flex justify-end text-md text-white font-light ${poppins.className} py-2`}
      >
        <Button label={"Get Started"} clickEvent={onButtonClicked} />
      </div>
    </>
  );
}
