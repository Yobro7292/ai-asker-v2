"use client";
import { useAppDispatch, useAppSelector } from "@/lib/utils/hooks";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import RecentSearch from "./RecentSearch";
import { useEffect, useState } from "react";
import RegisterModal from "../RegisterModal/Index";
import {
  setUser,
  setVisitorId,
  setisFirstTime,
} from "@/features/auth/authSlice";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import Loader from "../common/Loader/Index";

export default function PlaygroundArea() {
  const isFirstTimeUser = useAppSelector((state) => state.auth.isFirstTime);
  const visitorId = useAppSelector((state) => state.auth.visitorId);
  const [loading, setLoading] = useState<boolean>(true);
  const [output, setOutput] = useState<string>("");
  const [thinking, setThinking] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isLoading, data } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );

  const getUserData = async () => {
    if (visitorId) {
      const res = await fetch(`/api/user/${visitorId}`);
      if (res) {
        const resData = await res.json();
        if (resData && resData.success) {
          dispatch(setisFirstTime(false));
          dispatch(setUser(resData.user));
          setLoading(false);
        } else {
          dispatch(setisFirstTime(true));
          setLoading(false);
        }
      }
    }
  };
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visitorId]);

  useEffect(() => {
    if (!visitorId) {
      if (!isLoading && data && data.visitorFound) {
        const { visitorId } = data;
        dispatch(setVisitorId(visitorId));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <>
      {loading && <Loader />}
      {!loading && isFirstTimeUser && <RegisterModal />}
      <div className="grid grid-cols-4 gap-2 w-full sm:py-2 sm:px-16 mb-20 sm:mb-4 min-h-[70vh] max-h-[70vh]">
        <RecentSearch setOutput={setOutput} />
        <div className="col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 flex flex-col justify-between items-center w-full bg-black-low rounded-md p-2">
          <OutputArea output={output} thinking={thinking} />
          <InputArea
            setOutput={setOutput}
            setThinking={setThinking}
            thinking={thinking}
          />
        </div>
      </div>
    </>
  );
}
