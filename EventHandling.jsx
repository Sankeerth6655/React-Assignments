import {useState} from 'react';
function EventHandling(){
    // function clicked(){
    //     console.log("button clicked!!!")
    // }
    // return (
    //     <>
    //         <button onClick={clicked}>Click me!</button>
    //     </>
    // )

    // function btnclk(){
    //     alert('Event function is executed when the button in clicked')
    // }
    // return (
    //     <>
    //         <button onClick={btnclk}>Click me!!!</button>
    //     </>
    // )

    // var [val,setVal]=useState("")
    // function ipt(event){
    //     setVal(event.target.value)
    // }
    // function click(){
    //     console.log(val)
    // }
    // return (
    //     <>
    //         <input type="text" id="ipt" onChange={ipt}/>
    //         <button onClick={click}>Submit</button>
    //     </>
    // )

    // var [val,setVal]=useState("")
    // var [showval,setShowval]=useState("")
    // function ipt(event){
    //     setVal(event.target.value)
    // }
    // function click(){
    //     setShowval(val)
    // }
    // return (
    //     <>
    //         <input type="text" id='ipt' onChange={ipt}/>
    //         <button onClick={click}>Show text</button>
    //         <h1>{showval}</h1>
    //     </>
    // )

    // let [val,setVal]=useState("")
    // function disp(event){
    //     setVal(event.target.value)
    // }
    // return (
    //     <>
    //         <input type="text" id='ipt' onKeyUp={disp} />
    //         <h1>{val}</h1>
    //     </>
    // )

    // let [v1,setV1]=useState(0)
    // let [v2,setV2]=useState(0)
    // let [res,setRes]=useState(0)
    // function ipt1(event){
    //     setV1(+(event.target.value))
    // }
    // function ipt2(event){
    //     setV2(+(event.target.value))
    // }
    // function add(){
    //     setRes(v1+v2)
    // }
    // return (
    //     <>
    //         <input type="number" id='ipt1' onChange={ipt1}/>
    //         <input type="number" id='ipt2' onChange={ipt2}/>
    //         <button onClick={add}>Add</button>
    //         <h1>{res}</h1>
    //     </>
    // )

    // let [val,setVal]=useState("")
    // function male(event){
    //     setVal(event.target.value)
    // }
    // function female(event){
    //     setVal(event.target.value)
    // }
    // return (
    //     <>
    //         <input type="radio" value="male" name='gender' onClick={male}/><label htmlFor="">Male</label>
    //         <input type="radio" value="female" name='gender' onClick={female}/><label htmlFor="">Female</label>
    //         <h1>{val}</h1>
    //     </>
    // )

    // let [val,setVal]=useState("")
    // function male(){
    //     setVal("https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg")
    // }
    // function female(){
    //     setVal("https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg")
    // }
    // return (
    //     <>
    //         <input type="radio" onClick={male} name='gender'/>Male
    //         <input type="radio" onClick={female} name='gender'/>Female
    //         <br />
    //         <img src={val} alt="" height="200px" width="200px" style={{margin:'10px'}}/>
    //     </>
    // )

    // let [val,setVal]=useState("")
    // function disp(event){
    //     event.target.checked===true ? console.log(event.target.defaultValue):null
    // }
    // return (
    //     <>
    //         <input type="checkbox" name='family' value='Javascirpt' onClick={disp}/>JavaScript
    //         <br />
    //         <input type="checkbox" name='family'  value='React JS' onClick={disp}/>React JS
    //         <br />
    //         <input type="checkbox" name='family'  value='Node JS' onClick={disp}/>Node JS
    //         <br />
    //         <input type="checkbox" name='family'  value='Express JS' onClick={disp}/>Express JS
    //         <br />
    //         <input type="checkbox" name='family'  value='Mongo DB' onClick={disp}/>Mongo DB
    //         <br />
    //     </>
    // )

    // let [val,setVal]=useState("")
    // function eat(item){
    //     setVal(`Your ${item} is ready`);
    // }
    // return (
    //     <>
    //         <button onClick={()=>{eat("pasta")}}>Click to eat</button>
    //         <h1>{val}</h1>
    //     </>
    // )

    // let [arr,setArr]=useState(['react','node','express','mongo','javascript'])
    // let [val,setVal]=useState("")
    // function disp(index){
    //     setVal(`I wish I can master ${arr[index]}`)
    // }
    // return (
    //     <>
    //         <ul>
    //             {
    //                 arr.map((data,index)=>{
    //                     return <li onClick={()=>{disp(index)}}>{data}</li>
    //             })
    //             }
    //         </ul>
    //         <h1>{val}</h1>
            
    //     </>
    // )

    // let [arr,setArr]=useState(['react','node','express','mongo','javascript'])
    // let [val,setVal]=useState("")
    // function disp(value){
    //     setVal(`The most legendary ${value} is now in my brain`)
    // }
    // return (
    //     <>
    //         <ul>
    //             {
    //                 arr.map((data)=>{
    //                     return <li onClick={()=>{disp(data)}}>{data}</li>
    //                 })
    //             }
    //         </ul>
    //         <h1>{val}</h1>
    //     </>
    // )

    // let [val,setVal]=useState(222)
    // return(
    //     <>
    //         <h1>{val}</h1>
    //     </>
    // )

    // let [val,setVal]=useState(14)
    // let [valn,setValn]=useState(0)
    // function inc(){
    //     setValn(val+1);
    //     setVal(val+1);
    // }
    // return (
    //     <>
    //         <button onClick={inc}>Increment</button>
    //         <h1>{valn}</h1>
    //     </>
    // )

    let [arr,setArr]=useState([])
    let [val,setVal]=useState("")
    function ipt(event){
        setVal(event.target.value)
    }
    function add(){
        setArr([...arr,val])
    }
    return (
        <>
            <input type="text" onChange={ipt}/>
            <button onClick={add}>Add to array</button>
            {
                arr.map((data)=>{
                    return <h1>{data}</h1>
                })
            }
        </>
    )

}
export default EventHandling;