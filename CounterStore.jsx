import { connect } from "react-redux";
function CounterStore(props){
    console.log('counter rendered');
    return(
        <div style={{border:'5px solid gray',margin:'2px',padding:'2px'}}>
            <h1>Counter:{props.cntR.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>
            <button onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
        </div>
    )
}
export default connect(function(store){return store})(CounterStore);