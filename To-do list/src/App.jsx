import React, { useState } from "react";
const App = () => {
    const [inputList, setInputList] = useState("");
    const itemEvent = (e) => {
        setInputList(e.target.value)
    }
    const [items,setItems] = useState([]);
    const ListOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList];
        })
        setInputList("");
    }

    const deleteItems = () => {
        setItems((oldItems)=> {
            return oldItems.filter((arr,index) => {
                // return index !== myitem;
            })
        })
    }
    return (
        <>
            <div className="main_div">
            <div className="center_div">
            <br/>
            <h1>To-do list</h1>
            <br/>
            <input type="text" placeholder="Add an item" onChange={itemEvent} value={inputList}/>
            <button id="add"onClick={ListOfItems}>+</button>
            <ol>
              {  items.map( (val) => {
                return  (
                    <div>
                    <li id = "myitem"> {val} </li>
                    <button id="cut" onClick={deleteItems}>X</button>
                    </div>
                    
                );
                } )}


            </ol>
            </div>

            </div>
        </>
    )
}
export default App;