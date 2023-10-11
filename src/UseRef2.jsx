import { useEffect, useRef } from "react"

const UseRef2 = () => {
    // const [count, setCount] = useState(0);
    const count = useRef(0);

    useEffect(() => {
        console.log("The component have been rendered");
    })

    function handle(){
        count.current = count.current + 1;
        console.log(`Clicked ${count.current} times`);
    }

  return (
    <div>
        <button onClick={handle}>Click Me</button>
    </div>
  )
}

export default UseRef2