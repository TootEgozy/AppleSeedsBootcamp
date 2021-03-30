import React,{useState} from 'react'
import TimeUnit from './TimeUnit';

export default function Time(props) {

    let [chosenUnit, setChosenUnit] = useState("seconds");
    let [unitValue, setUnitValue] = useState (60);

    let unitsArr = ["seconds", "minutes", "houres"];

    const numberEntered = (e) => {
        const unit = e.target.parentElement.children[0].textContent;
        const value = e.target.value;

        setChosenUnit(unit);
        setUnitValue(value);
    }
    
    const calcValue = async() => {

        await const chosenUnitValue = props.chosenUnitValue;
        console.log("chosen unit value");
        console.log(props.chosenUnitValue);
        if (props.unit === props.chosenUnit) return unitValue;

        if (props.unit === "seconds" && props.chosenUnit === "minutes") return chosenUnitValue*60;
        if (props.unit === "seconds" && props.chosenUnit === "houres") return chosenUnitValue*3600;
        if (props.unit === "minutes" && props.chosenUnit === "seconds") return chosenUnitValue/60;
        if (props.unit === "minutes" && props.chosenUnit === "houres") return chosenUnitValue*60;
        if (props.unit === "houres" && props.chosenUnit === "seconds") return chosenUnitValue/3600;
        if (props.unit === "houres" && props.chosenUnit === "minutes") return chosenUnitValue/60;

    }

    return (
        <div>
            {unitsArr.map(u => {
                return (
                    <TimeUnit 
                    key={u} 
                    unit={u}
                    chosenUnit={chosenUnit} 
                    chosenUnitValue={unitValue}
                    callback={(e)=>numberEntered(e)} 
                    calcValue={calcValue}
                    
                    />  
                )
            })}        
        </div>
    )
}
