import React from "react";
import Slot from "./Slot";
import "./index.css";
const App = () => {
        return (
            <>
            <h1 className="header">π°Welcome to <span>Slot Machineπ°</span></h1>
            <div className="slotm">
            <Slot x="π" y="π" z="π" /><hr/>
            <Slot x="π¦" y="π¦" z="π¦" /><hr/>
            <Slot x="π³" y="π³" z="π³" /><hr/>
            <Slot x="π" y="π" z="π" /><hr/>
            <Slot x="β€οΈ" y="π₯Ά" z="π₯³" />
            </div>
            </>
        );
}
export default App;