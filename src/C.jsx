// import { GreetContext, Greet2Context } from "./A";
import { GreetContext } from "./A";
import { useContext } from "react";

const C = () => {
    // const useCon = useContext(GreetContext);
    // const useCon2 = useContext(Greet2Context);

    const useCon = useContext(GreetContext);
  return (
    // <GreetContext.Consumer>
    //   {(val) => {
    //     return (
    //       <Greet2Context.Consumer>
    //         {(val2) => {
    //           return (
    //             <h1>
    //               Greet: {val} {val2}
    //             </h1>
    //           );
    //         }}
    //       </Greet2Context.Consumer>
    //     );
    //   }}
    // </GreetContext.Consumer>

    // <h1>Greet: {useCon} {useCon2}</h1>
    <h1>Greet: {useCon.greet} {useCon.greet2} </h1>
  );
};

export default C;
