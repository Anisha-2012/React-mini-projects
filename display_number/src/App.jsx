import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
//Display increase and decrease number
const App = () => {
    const state = useState();
    const [count,setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    }
    const Alert = () => {
        alert("Cannot Decreement more than 0")
    }
    const DecNum = () => {
        if(count > 0){
          setCount(count - 1);
        }
        else{
            Alert();
        }
    }

    return (
        <>
        <div className="myBody">
            <p>{count}</p>
            <button className="inc" onClick = {IncNum}><AddIcon/></button>
            <button className="dec" onClick = {DecNum}><DeleteIcon/></button>
        </div>
        </>
    );
}

//display time using hooks also create digital clock
// const App = () => {
//         const state = useState();
//         const [time,showtime] = useState(0);
//         const timing = () => {
//             const curTime = new Date().toLocaleTimeString();
//             showtime(curTime);
//         }
//         //to show changing time -> use this
//         setInterval(timing,1000);
//         return (
//             <>
//             <div className="myBody">
//                 <p>{time}</p>
//                 <button className="inc" onClick = {timing}>Show Time</button>
                
//             </div>
//             </>
//         );
//     }

//Change bg color and content of button on single and double clicks
// const App = () => {
//     const purple = "#A020F0";
//     const [bg,changeBg] = useState(purple);
//     const [greet,changeGreet] = useState("Click me");
//     const greeting = () => {
//         changeGreet("Hello Welcome");
//         changeBg(purple);
//     }

//     const bgChange = ( )=> {
//         let newBg = "#a8329b";
//         changeBg(newBg);
//         changeGreet("Hii Bro!");
//     }

//     return (
//         <>
//             <div style={{backgroundColor : bg}}>
//                 <button onClick={bgChange} onDoubleClick={greeting} className="inc">{greet}</button>
//             </div>
//         </>
//     );
// }



export default App;