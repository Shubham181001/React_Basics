import Child from "./Child";
import { useRef } from "react";

const Parent = () => {

    const childRef = useRef(null);

    const handleOpenModal = (value) => {
        childRef.current.openModal(value);
    }

  return (
    <div>
        <p>This is a Parent Component</p>
        <Child ref={childRef} />

        <button onClick={() => handleOpenModal(true)}>Open Modal</button>
    </div>
  )
}

export default Parent