import { useState } from "react"

function App() {

  const [count, setCount] = useState(0);
  console.log(setCount);

  function handleIncrementClick(){
    setCount(count+1);
  }

  function handleDecrementClick(){
    setCount(count - 1);
  }

   return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </>
  )
}

export default App
