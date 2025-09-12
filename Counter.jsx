import { useEffect, useState } from "react";
function Counter(x){
var [count,setCountFn]=useState(x.a)
function incButton(){
  setCountFn(count+x.b)
}
function decButton(){
  setCountFn(count-x.b)
}
useEffect(()=>{
  console.log("Page Mounted")
},[])
useEffect(()=>{
  console.log("Page Updated")
})
console.log("Page Rendered")
    return (
            <>
                <h1>Counter:: {count}</h1>
                <button onClick={()=>{incButton()}}>Increment</button>
                <button onClick={()=>{decButton()}}>Decrement</button>
                {/* <button onClick={()=>{x.f(count)}}>Give alert</button> */}
            </>
    );
}
export default Counter;