import { useReducer } from "react"

const reducer = (state, action) => {
    let coun = state.count;
    console.log(state, action);
    if(action.type === 'Inc'){
        coun++;
        return {count: coun}
    }
    else if(action.type === 'Decr'){
        coun--;
        return {count: coun}
    }
    else{
        throw new Error('Unsupported action type')
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    
    const handleClickInc = () => {
        dispatch({type : "Inc"});
    };
    const handleClickDec = () => {
        dispatch({type: "Decr"});
    }


    //reducer function 
    // It is a pure function 
    // state and action 
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={handleClickInc}>+</button>
        <button onClick={handleClickDec}>-</button>
    </div>
  )
}

export default UseReducer