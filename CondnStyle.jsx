import { useState } from "react";
function CondnStyle(){
    // let [str,setStr]=useState("bunny")
    // return (
    //     <>
    //         <h1 style={str===str.toUpperCase()?{color:'red'}:{color:'blue'}}>{str}</h1>
    //     </>
    // );

    // let [v1,setV1]=useState(12)
    // let [v2,setV2]=useState(20)
    // return(
    //     <>
    //         <h2>{v1+v2}</h2>
    //     </>
    // )

    // let [num,setNum]=useState(0)
    // return (
    //     <>
    //         <h2>{num%2===0?'even':'odd'}</h2>
    //     </>
    // )

    // function getGreeting(name){
    //     return <h1>Hello {name}</h1>
    // }

    // return (
    //     <>
    //         {
    //             getGreeting("bunny")
    //         }
    //     </>
    // )

    let [arr,setArr]=useState([7,10,12,14,15,16])
    return (
        <>
            {
                arr.map((data)=>{
                    return <h1>{data}</h1>
                })
            }
        </>
    )
}
export default CondnStyle;