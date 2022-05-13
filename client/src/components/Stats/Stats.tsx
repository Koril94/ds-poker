import React, { useEffect, useState } from "react";
import CardOnHand from "../CardOnHand/CardOnHand";

const Stats = ({ name }:any) => {
    const [_name, setName] = useState(name);
    useEffect(() => setName(name), [name])
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <h1>{_name}</h1>
        <button onClick={() => setName('Sarah')}>Change name</button>
      </div>
    );
  };

  export default Stats