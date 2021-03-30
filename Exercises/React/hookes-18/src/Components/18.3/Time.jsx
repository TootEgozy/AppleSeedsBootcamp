import React,{useState} from 'react'
import TimeUnit from './TimeUnit';

export default function Time(props) {

    let [chosenUnit, setChosenUnit] = useState("seconds");
    let [unitValue, setUnitValue] = useState (60);

    const numberEntered = (e) => {
        const unit = e.target.parentElement.children[0].textContent;
        const value = e.target.value;

        setChosenUnit(unit);
        setUnitValue(value);
    }
    
    const calcValue = (myUnit) => {
       console.log("******************************");
       console.log("myUnit: "+myUnit);
       console.log("chosenUnit (in state): "+chosenUnit);
       console.log("unitValue (in state): "+unitValue);
        
        if (myUnit === chosenUnit) return unitValue;

        if (myUnit === "seconds" && chosenUnit === "minutes") return Number(unitValue)*60;
        if (myUnit === "seconds" && chosenUnit === "houres") return Number(unitValue)*3600;
        if (myUnit === "minutes" && chosenUnit === "seconds") return Number(unitValue)/60;
        if (myUnit === "minutes" && chosenUnit === "houres") return Number(unitValue)*60;
        if (myUnit === "houres" && chosenUnit === "seconds") return Number(unitValue)/3600;
        if (myUnit === "houres" && chosenUnit === "minutes") return Number(unitValue)/60;
    }

    let secondsVal = calcValue("seconds");
    console.log("-----------------------------");
    console.log("secondsVal: "+secondsVal);
    console.log("typof unitValue "+typeof unitValue);
    console.log("unitValue " +unitValue);

    return (
        <div>
            <div>
                <span>seconds </span>
                <input 
                type="number"
                onChange={e=> numberEntered(e)}
                value={calcValue("seconds")}
                >
                </input>
            </div>
            <div>
                <span>minutes </span>
                <input 
                type="number"
                onChange={e=> numberEntered(e)}
                value={calcValue("minutes")}
                >
                </input>
            </div>
            <div>
                <span>houres </span>
                <input 
                type="number"
                onChange={e=> numberEntered(e)}
                value={calcValue("houres")}
                >
                </input>
            </div>
        </div>
    )
}
