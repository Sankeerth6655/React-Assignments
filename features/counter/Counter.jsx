import { useDispatch, useSelector } from "react-redux";
import { decrement, increment ,reset} from "./counterSlice";

function Counter(){
    let {count}=useSelector((state)=>state.cntR);
    let dispatch=useDispatch();
    // console.log("counter rendered")
    return (
        <>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Inc</button>
            <button onClick={()=>{dispatch(decrement())}}>Dec</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </>
    )
}
export default Counter;