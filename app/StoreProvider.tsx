"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/utils/store";

export function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
