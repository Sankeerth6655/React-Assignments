const initialState={
    todos:['Dog for the walk','pay bills','buy thar roxx','ride gt650','buy bmw340i']
}
export function TodoReducer(state=initialState,action){
    if(action.type==='ADD_TODO' && action.newtodo!=""){
        return {...state,todos:[...state.todos,action.newtodo]}
    }
    return state;
}