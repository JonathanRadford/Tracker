import React, { useState } from "react";
import "./Counter.scss";


const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    const handleIncrement = () => {
        if(counter >= 0){
        setCounter(counter + 1)
        }
}
    const handleDecrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
            }
}   
        return (
        <div className="button-counter">
           <h3>{counter}</ h3>
           <button className="button" onClick={handleDecrement}>-</button>
           <button className="button" onClick={handleIncrement}>+</button>
        </ div>
        )
}

export default Counter