import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

export let counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
        reset:(state)=>{
            state.count=initialState.count;
        },
    }
})

export const {increment,decrement,reset}=counterSlice.actions;
export let counterReducer=counterSlice.reducer;