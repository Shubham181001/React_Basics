import { useState } from "react";

const ClickCounterWithoutHOC = () => {

    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount(count + 1);
    }
    
  return (
    <div>
        <button onClick={incrementCount}>Clicked {count} </button>
    </div>
  )
}

export default ClickCounterWithoutHOC