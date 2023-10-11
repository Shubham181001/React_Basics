import datas from "./datas.json";
import { useState } from "react";

const Data = () => {
  const [nData, setnData] = useState(datas);

  function handleClick() {
    setnData([]);
  }

  function handleRemove(itemId){
    const filteredArr = nData.filter(datas=>{
        return datas.id !== itemId;
    });
    setnData(filteredArr);
  }

  return (
    <>
      <ol>
        {nData.map((Object) => (
          <li key={Object.id}>
            {Object.name}
            <br />
            <button onClick={()=>handleRemove(Object.id)}>Remove</button>
          </li>
        ))}
      </ol>
      <button onClick={handleClick}>Clear</button>
    </>
  );
};

export default Data;
