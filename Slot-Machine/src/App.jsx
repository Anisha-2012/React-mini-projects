import React from "react";
import Slot from "./Slot";
import "./index.css";
const App = () => {
        return (
            <>
            <h1 className="header">🎰Welcome to <span>Slot Machine🎰</span></h1>
            <div className="slotm">
            <Slot x="😊" y="😊" z="😊" /><hr/>
            <Slot x="🦑" y="🦜" z="🦞" /><hr/>
            <Slot x="🐳" y="🐳" z="🐳" /><hr/>
            <Slot x="🎁" y="🎊" z="🎁" /><hr/>
            <Slot x="❤️" y="🥶" z="🥳" />
            </div>
            </>
        );
}
export default App;