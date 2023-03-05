import React from "react";
import "./index.css";
const Slot = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
  
    if((x === y) && (y === z) && (x === z)){
      return (
        <>
        <div className="innerSlot">
          <h1  className="hh1">{x} {y} {z}</h1>
          <h2 className="hh2">This is matching</h2>
          </div>
        </>
      );
    }
    else{
      return (
        <>
        <div className="innerSlot">
          <h1 className="hh1">{x} {y} {z}</h1>
          <h2 className="hh2">This is not matching</h2>
          </div>
        </>
      );
    }
  }

  export default Slot;