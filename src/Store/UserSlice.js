import { createSlice } from "@reduxjs/toolkit";

export const UserSlice=createSlice({
    name:'user',
    initialState:{
       
       value:null,
    },

    reducers:{
        SignIn:(state,actions)=>{
            state.value=actions.payload;
        },
     SignOut:(state)=>{
            state.value=null;
        },
       
    }
})
export const {SignIn, SignOut}=UserSlice.actions

export const Selectuser=(state)=>state.user.value;
export default UserSlice.reducer;