import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface User{
    name:string,
    email:string,
    password:string,
    phoneNumber:number,
    Address:string,
}

const initialState = {
    currentUser:{} as Object
}

const ReduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    RegisterUser:(state,{payload}:PayloadAction<User>)=>{
        state.currentUser = payload
    },
    LoginUser:(state,{payload}:PayloadAction<User>)=>{
        state.currentUser = payload
    },
    LogOut:(state,{payload}:PayloadAction<User>)=>{
        state.currentUser = {}
    },
  }
});

export const {RegisterUser,LoginUser,LogOut} = ReduxState.actions

export default ReduxState.reducer