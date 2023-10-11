import ClickCounterWithHOC from "./ClickCounterWithHOC";
// import ClickCounterWithoutHOC from "./ClickCounterWithoutHOC";
import HoverCounterWithoutHOC from "./HoverCounterWithoutHOC";

const HigherOrderComponent = () => {
  return (
    <div>
        <ClickCounterWithHOC />
        <br />
        <HoverCounterWithoutHOC />
    </div>
  )
}

export default HigherOrderComponent