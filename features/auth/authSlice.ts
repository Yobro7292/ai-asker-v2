import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../lib/utils/store";

// Define a type for the slice state
interface CounterState {
  visitorId: string | null;
  isFirstTime: boolean;
  user: {
    id: string;
    name: string;
    limit: number;
    createdAt: string;
    updatedAt: string;
  };
  recents: res[];
}
interface res {
  id?: string;
  title?: string;
  content?: string;
  userId?: string;
  createdAt?: Date;
}
// Define the initial state using that type
const initialState: CounterState = {
  visitorId: null,
  isFirstTime: true,
  user: {
    id: "",
    name: "",
    limit: 0,
    createdAt: "",
    updatedAt: "",
  },
  recents: [],
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setVisitorId: (state, action: { payload: string; type: any }) => {
      state.visitorId = action.payload;
    },
    setisFirstTime: (state, action: { payload: boolean }) => {
      state.isFirstTime = action.payload;
    },
    setUser: (state, action: { payload: CounterState["user"] }) => {
      state.user = action.payload;
    },
    setRecents: (state, action: { payload: res }) => {
      state.recents.push(action.payload);
    },
    setRecentsBunch: (state, action: { payload: CounterState["recents"] }) => {
      state.recents = action.payload;
    },
  },
});

export const {
  setVisitorId,
  setisFirstTime,
  setUser,
  setRecents,
  setRecentsBunch,
} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth;

export default authSlice.reducer;
