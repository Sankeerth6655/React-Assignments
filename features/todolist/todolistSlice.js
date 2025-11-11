import { createSlice } from "@reduxjs/toolkit";
let initialState={
    todos:['message','date fix','go out','meet','interact']
}

export const todolistSlice=createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todos.push(action.payload);
        }
    }
})

export const {addtodo}=todolistSlice.actions;
export let todolistReducer=todolistSlice.reducer;
