import { useState } from "react";
import withCounter from "./withCounter";

const HoverCounterWithoutHOC = (props) => {
  
  
  return (
    <div>
        <button onMouseOver={props.incrementCount}>Hovered {props.count} </button>
    </div>
  )
}

export default withCounter(HoverCounterWithoutHOC)