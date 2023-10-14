import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isOpen:false,
    
}

export const slice = createSlice({
    name: 'modal',
    initialState,
    reducers:{toggleModal:(state)=>{state.isOpen=!state.isOpen}} });


    export const modalReducer = slice.reducer;