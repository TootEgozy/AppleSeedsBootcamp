import React,{useState} from 'react'

export default function TimeUnit(props) {
    console.log(props);
    //console.log(props.calcValue());
    props.calcValue();
    return (
        <div>
            <div>
                <span>{props.unit}</span>
                <input 
                type="number"
                onChange={props.callback}
                >
                </input>
            </div>
        </div>
    )
}
