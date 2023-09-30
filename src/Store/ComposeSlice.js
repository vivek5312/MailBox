import { createSlice } from "@reduxjs/toolkit";

export const mailSlice=createSlice({
    name:'mail',
    initialState:{
        sendmessageIs:false,
    },

    reducers:{
        OpenCompose:(state)=>{
            state.sendmessageIs=true;
        },
        CloseCompose:(state)=>{
            state.sendmessageIs=false;
        },
    }
})
export const {OpenCompose, CloseCompose}=mailSlice.actions
export const SelectsendmessageIs=(state)=>state.mail.sendmessageIs;
export default mailSlice.reducer;