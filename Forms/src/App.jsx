import React, { useState } from "react";

const App = () => {
  const state = useState("");
  const [name, getName] = useState();

  const inputChanged = (event) => {
    // event.preventDefault();
    getName(event.target.value);
    
  };

  const [fullName, newName] = useState();
  const displayName = () => {
    newName(name);
  };

  return (
    <>
      <div className="myBody">
      
        {/* <h1>Hello {name}</h1> */}
        <h1>Hello {fullName} !</h1>
        <input
          typeof="text"
          placeholder="Enter your name"
          onChange={inputChanged}
          value={name}
        />
  
        <button onClick={displayName}>Click Me</button>
      
      </div>
    </>
  );
};
export default App;
