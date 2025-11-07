import { connect } from "react-redux";

function TodoStore({todoR:{todos},dispatch}){
    console.log('todo rendered');
    return (
        <div style={{border:'5px solid gray',margin:'2px',padding:'2px' }}>
            <h1>Todo List:</h1>
            <input type="text" id="ipt"/>
            <button onClick={()=>{dispatch({type:'ADD_TODO',newtodo:document.getElementById("ipt").value})}}>Add Todo</button>
            <ul>
                {
                    todos.map((data,index)=>{
                        return <li key={index}>{data}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(function(store){return store})( TodoStore);