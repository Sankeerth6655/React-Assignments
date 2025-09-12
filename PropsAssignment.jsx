import { useState } from "react";

function PropsAssignment(props){
    
//         <>
//             <table style={{border:'1px solid',borderCollapse: 'separate',
//   borderSpacing: 0,
//   borderRadius: '10px'}} >
//                 <thead>    
//                 <tr>
//                     <th style={{backgroundColor:'blue', color:'white',padding:'5px', borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
//                         Group-{props.b}
//                     </th>
//                 </tr>
//                 </thead>
//                 {
//                     props.a.map((data)=>{
//                         return (
//                             <tbody>
//                                 <tr>
//                         <td style={{border:'1px solid',overflow:'hidden'}}>{data}</td>
//                         </tr>
//                             </tbody>
//                         )
//                     })
//                 }
//             </table>
//         </>


        // <>
        //     <div style={{padding:'20px',backgroundColor:'white',margin:'10px'}}>
        //         <h1>Slide</h1>
        //         {
        //             props.imgs.map((data)=>{
        //                 return <img src={data} alt="" height='100px' width='100px'/>
        //             })
        //         }
        //     </div>
        // </>



        // <>
            
        //         <div style={{ border:'1px solid',margin:'10px',padding:'10px'}}>
        //             <h3>Course name: {props.name}</h3>
        //             <h3>Course trainer: {props.trainer}</h3>
        //             <h3>Course cost: {props.cost}</h3>
        //         </div>
            
        // </>

        // <>
        //     <div style={{border:'3px solid blue',margin:'10px',padding:'10px'}}>
        //         <h1>Child Component</h1>
        //         <h1>{props.a}</h1>
        //         <button onClick={()=>{props.b("Nen iyya laptop")}}>Thammudu</button>
        //     </div>

        // </>
    //     let [count,setCount]=useState(0);
    //     function inc(){
    //         setCount(count+props.a);
    //     }
    //     function dec(){
    //         setCount(count-props.a);
    //     }
    // return (
    //     <>
    //         <div style={{border:'1px solid',padding:'10px',margin:'10px'}}>
    //             <h1>Counter: {count}</h1>
    //             <button onClick={inc}>Increment</button>
    //             <button onClick={dec}>Decrement</button>
    //         </div>
    //     </>
    // )


// let [count,setCount]=useState(0);
// function next(){
//     count<2?setCount(count+1):setCount(0);
// }
// function prev(){
//     count>0?setCount(count-1):setCount(2);
// }

//     return (
//         <>
//             <div style={{height:'250px', width:'400px',border:'1pmx solid',margin:'10px',display:'flex',alignItems:'center',overflow:'hidden',position:'relative'}}>
//                 <button style={{backgroundColor:'transparent',height:'50px',position:'absolute',color:'white',border:'none',right:'0px',fontSize:'30px'}} onClick={next}>&gt;</button>
//                 <button style={{backgroundColor:'transparent',height:'50px',position:'absolute',color:'white',border:'none',left:'0px',fontSize:'30px'}} onClick={prev}>&lt;</button>
//                 <img  src={props.imgs[count]} height='100%' width='100%' style={{objectFit:'cover'}}/>
//             </div>
//         </>
//     )



    return (
        <>
            
        </>
    )
}
export default PropsAssignment;