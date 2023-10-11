import B from "./B";
import { createContext } from "react";

const GreetContext = createContext();
// const Greet2Context = createContext();

const A = () => {
  const greet = "Hello";
  const greet2 = "Hiii";
  return (
    // <div>
    //   <GreetContext.Provider value={greet}>
    //     <Greet2Context.Provider value={greet2}>
    //       <B />
    //     </Greet2Context.Provider>
    //   </GreetContext.Provider>
    // </div>
    <div>
        <GreetContext.Provider value = {{greet, greet2}}>
            <B />
        </GreetContext.Provider>
    </div>
  );
};

export default A;
// export { GreetContext, Greet2Context };
export {GreetContext};
