import { setUser, setisFirstTime } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/utils/hooks";
import { useState } from "react";
import Loader from "../common/Loader/Index";

export default function RegisterModal() {
  const [name, setName] = useState<string>("");
  const browserId = useAppSelector((state) => state.auth.visitorId);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    setLoading(true);
    if (name.trim() !== "" && browserId) {
      const user = {
        browserId: browserId,
        name: name,
      };
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      });

      const data = await res.json();
      if (data && data.user) {
        dispatch(setisFirstTime(false));
        dispatch(setUser(data.user));
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 z-10">
          <div className="w-full h-full absolute top-0 left-0 bg-neutral-900 opacity-80"></div>
          <div className="z-50 w-full p-4 h-full flex justify-center items-center">
            <div className="relative bg-neutral-700 rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-6 sm:mb-8 text-xl font-medium text-white text-center">
                  Never see you before 🤔
                </h3>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Please provide your name
                    </label>
                    <input
                      type="text"
                      className="bg-neutral-900 text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                      placeholder="John"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                    />
                  </div>

                  <button
                    className="w-full text-black bg-white hover:bg-gray-200 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
