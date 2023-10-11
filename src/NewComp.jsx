import { memo } from "react";

const NewComp = (props) => {
    console.log("New Component Render", props.newCount);
  return (
    <div>
      <h1>NewComp</h1>
    </div>
  )
}

export default memo(NewComp)