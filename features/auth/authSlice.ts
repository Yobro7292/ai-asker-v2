import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/utils/store'

// Define a type for the slice state
interface CounterState {
  visitorId: string | null
  isFirstTime: boolean,
  user: {
    _id: string,
    name: string,
    limit: number,
    createdAt: string,
    updatedAt: string
  },
  recent: {
    title: string,
    content: string | null
  }[]
}

// Define the initial state using that type
const initialState: CounterState = {
  visitorId: null,
  isFirstTime: true,
  user:{
    _id: "",
    name: "",
    limit: 0,
    createdAt: "",
    updatedAt: ""
  },
  recent: [{
    title: "",
    content: ""
  }]
}
interface recentData {
  
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setVisitorId: (state, action:{payload: string, type:any}) => {
      state.visitorId = action.payload
    },
    setisFirstTime: (state, action:{payload: boolean})=>{
      state.isFirstTime = action.payload
    },
    setUser: (state, action:{payload:CounterState["user"]})=>{
      state.user = action.payload
    },
    setRecents: (state, action:{payload: CounterState["recent"]})=>{
      action.payload.map((data)=>{
        state.recent.push(data)
      })
    }
  },
})

export const {  setVisitorId, setisFirstTime, setUser, setRecents } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth

export default authSlice.reducer