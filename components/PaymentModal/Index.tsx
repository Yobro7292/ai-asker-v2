import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface PaymentModelProps {
  setIsOpenPaymentModel: Dispatch<SetStateAction<boolean>>;
}
export default function PaymentModal({
  setIsOpenPaymentModel,
}: PaymentModelProps) {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 z-10">
        <div className="w-full h-full absolute top-0 left-0 bg-neutral-900 opacity-80"></div>
        <div className="z-50 w-full p-4 h-full flex justify-center items-center">
          <div className="relative bg-neutral-700 rounded-lg w-full shadow sm:w-[60%] lg:w-[40%]">
            <div className="flex flex-col justify-start">
              <div className=" px-4 py-4 w-full flex justify-between items-center bg-black-high">
                <p className="text-xl font-medium text-white">
                  Sorry! You reached your Limits
                </p>
                <div
                  className="p-1"
                  onClick={() => {
                    setIsOpenPaymentModel(false);
                  }}
                >
                  <Image
                    src="/svg/close.svg"
                    width={30}
                    height={30}
                    alt="close"
                  />
                </div>
              </div>

              <p className="text-xs font-light text-gray-400 text-center py-8">
                Payment Model Comming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
