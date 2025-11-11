import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtodo } from "./todolistSlice";

function Todolist(){
    let {todos}=useSelector((state)=>state.todoR);
    let dispatch=useDispatch();
    let [ipt,setIpt]=useState("");
    // console.log("todolist rendered")
    return (
        <>
            <input type="text" onChange={(e)=>{setIpt(e.target.value)}}/>
            <button onClick={()=>{dispatch(addtodo(ipt))}}>Add todo</button>
            {
                todos.map((td,index)=>{
                    return <li key={index}>{td}</li>
                })
            }
        </>
    )
}
export default Todolist;