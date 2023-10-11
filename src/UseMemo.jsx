import { useState, useMemo } from "react";
// import NewComp from "./NewComp";
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  function handleInput(e){
    setInput(e.target.value);
  }

  const result = useMemo(function slowFunction(){
    let sum = 0;
    for(let i = 0; i < 100000000; i++){
      sum += i;
    }
    console.log("Hello I am a slow function");
    return sum;
  },[count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick = {()=>setCount(count + 1)}>Increment</button>
        <br />
        <hr />
        <input type="text" value={input} onChange={handleInput} />
        <h1>Input: {input}</h1>
        <br />
        <hr />
        {result}
    </div>
  )
}

export default UseMemo