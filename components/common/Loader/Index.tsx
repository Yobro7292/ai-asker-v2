import Image from "next/image";

export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 z-10">
      <div className="w-full h-full absolute top-0 left-0 bg-neutral-900 opacity-80"></div>
      <div className="z-50 w-full p-4 h-full flex justify-center items-center">
        <div className="relative bg-transparent rounded-lg shadow-lg">
          <div className="animate-spin">
            <Image
              src={"/svg/loading.svg"}
              alt={"loading"}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
