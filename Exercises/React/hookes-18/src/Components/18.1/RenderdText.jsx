import React, {useState} from 'react'


//in the state here I need to have the current text that I'm showing.
//as well as the current button that I'm showing.
//on a button click i need to change the state so that 
//the other text & button will be renderd.
// create one function to do this.

export default function RenderdText(props) {

    
    const shortObj = {
        text: props.text.slice(0, props.maxLength),
        message: "Show more..."
    }

    const longObj = {
        text: props.text,
        message: "Show less"
    }

    let [currentobj, setObj] = useState(shortObj);

    //if state is shortObj, change to longObj. and vice verse
    const reverseState = () => {
        (currentobj.text === shortObj.text)? setObj(longObj) : setObj(shortObj);

    }
    return (
        <div>
            {currentobj.text}
            <br></br>
            <span 
            onClick={()=>reverseState()}
            style={{color: "blue", textDecoration: "underline"}}
            >
            {currentobj.message}
            </span>
        </div>
    )
}
