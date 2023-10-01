import { createSlice } from "@reduxjs/toolkit";

export const mailSlice=createSlice({
    name:'mail',
    initialState:{
        sendmessageIs:false,
        selectedmessage:null,
    },

    reducers:{
        OpenCompose:(state)=>{
            state.sendmessageIs=true;
        },
        CloseCompose:(state)=>{
            state.sendmessageIs=false;
        },
        Openmessage:(state,actions)=>{
            state.selectedmessage=actions.payload
        }
    }
})
export const {OpenCompose, CloseCompose,Openmessage}=mailSlice.actions
export const SelectsendmessageIs=(state)=>state.mail.sendmessageIs;
export const Selectmail=(state)=>state.mail.selectedmessage;
export default mailSlice.reducer;