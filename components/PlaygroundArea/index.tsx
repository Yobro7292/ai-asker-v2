"use client";
import { useAppDispatch, useAppSelector } from "@/lib/utils/hooks";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import RecentSearch from "./RecentSearch";
import React, { useEffect } from "react";
import RegisterModal from "../RegisterModal/Index";
import { setUser, setisFirstTime } from "@/features/auth/authSlice";

export default function PlaygroundArea() {
  const isFirstTimeUser = useAppSelector((state) => state.auth.isFirstTime);
  const visitorId = useAppSelector((state) => state.auth.visitorId);
  const dispatch = useAppDispatch();

  const getUserData = async () => {
    const res = await fetch(`/api/user/${visitorId}`);
    if (res) {
      const data = await res.json();
      console.log(data);
      if (data && data.success) {
        dispatch(setisFirstTime(false));
        dispatch(setUser(data.user));
      } else {
        dispatch(setisFirstTime(true));
      }
    }
  };
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {isFirstTimeUser && <RegisterModal />}
      <div className="grid grid-cols-4 gap-2 w-full h-full sm:py-2 sm:px-16 flex-1 sm:mb-4">
        <RecentSearch />
        <div className="col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 flex flex-col justify-between items-center w-full bg-black-low rounded-md p-2">
          <OutputArea />
          <InputArea />
        </div>
      </div>
    </React.Fragment>
  );
}
