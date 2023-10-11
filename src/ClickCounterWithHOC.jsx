import { useState } from "react";
import withCounter from "./withCounter";

const ClickCounterWithHOC = (props) => {

  return (
    <div>
        <button onClick={props.incrementCount}>Clicked {props.count} </button>
    </div>
  )
}

export default withCounter(ClickCounterWithHOC)