import { useState } from "react";

function ComponentAssignment(){
    // var [nam,setNam]=useState("praveen");
    // return (
    //     <>
    //         <h1>The String length of {nam} is {nam.length}</h1>
    //     </>
    // );

    // var [nam,setNam]=useState("praveen");
    // var [rev,setRev]=useState(nam.split("").reverse().join(""))
    // return (
    //     <>
    //         <h1>The String length of {nam} is {rev}</h1>
    //     </>
    // );

    // var [n1,setn1]=useState(100)
    // var [n2,setn2]=useState(20)
    // return(
    //     <>
    //         <h1>The greatest of {n1} and {n2} is {n1>n2?n1:n2}</h1>
    //     </>
    // )

    // var [v1,setv1]=useState(-21)
    // return(
    //     <>
    //         {v1===0 && <h1>{v1} is Zero</h1>}
    //         {v1>0 && <h1>{v1} is Positive</h1>}
    //         {v1<0 && <h1>{v1} is Negative</h1>}
    //     </>
    // )

    // var [v1,setv1]=useState(125)
    // var [v2,setv2]=useState(9)
    // var [v3,setv3]=useState(33)
    // return (
    //     <>
            
    //             {v1>v2 && v1>v3 && <h1>{v1} is the greatest</h1>}
    //             {v2>v1 && v2>v3 && <h1>{v2} is the greatest</h1>}
    //             {v3>v1 && v3>v2 && <h1>{v3} is the greatest</h1>} 
    //     </>
    // );

    // var [s1,sets1]=useState("Hi ")
    // var [s2,sets2]=useState("Reethu")
    // return (
    //     <>
    //         <h1>The String is {s1.concat(s2)}</h1>
    //     </>
    // );

    // var [a,seta]=useState(7)
    // var [b,setb]=useState(14)
    // var [nam,setName]=useState("")
    // return(
    //     <>
    //         {a>b && <h1>This is AND, it is executed when the condition is true</h1>}
    //         {a>b || <h1>THis is OR, it is executed when the condition is false</h1>}
    //         {nam || <h2>Name is to be printed</h2>}
    //         {!(a>b) && <h1>This is not operator</h1>}
    //     </>
    // )

    // var [arr,setArr]=useState([7,14,10,15])
    // var [a,b]=arr;
    // return (
    //     <>
    //         <h1>The first two values are {a} and {b}</h1>
    //     </>
    // )

    // var [arr,setArr]=useState(['Apple','Banana','Mango',"Orange"])
    // return(
    //     <>
    //         {
    //             arr.map((data)=>{
    //                 return <h3>{data.slice(0,2)}</h3>
    //             })
    //         }
    //     </>
    // );

    var [num,setNum]=useState(14)
    var [int,setInt]=useState(134.42)
    var [str,setStr]=useState("praveen")
    return(
        <>
            <h1>{Math.sqrt(num)}</h1>
            <h1>{Math.floor(int)}</h1>
            <h1>{str.toUpperCase()}</h1>
        </>
    )
}
export default ComponentAssignment;