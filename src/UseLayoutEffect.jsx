import { useEffect, useLayoutEffect } from "react"

const UseLayoutEffect = () => {
    useEffect(()=>{
        console.log('Use Effect Part');
    }, []);

    useLayoutEffect(() => {
        console.log("Use Layout Effect Part");
    }, []);

    useEffect(()=>{
        console.log('Use Effect Part');
    }, []);

    useLayoutEffect(() => {
        console.log("Use Layout Effect Part");
    }, []);
    
  return (
    <div></div>
  )
}

export default UseLayoutEffect