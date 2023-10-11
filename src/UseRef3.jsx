import { useEffect, useRef } from "react"

const UseRef3 = () => {
    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();
    },[]);

    function handleFocus(){
        inputEl.current.style.backgroundColor = 'black';        
        inputEl.current.style.color = 'white';        
    }

    function handleBlur(){
        inputEl.current.style.backgroundColor = 'white';        
        inputEl.current.style.color = 'black';  
    }

  return (
    <div>
        <input ref={inputEl} type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  )
}

export default UseRef3