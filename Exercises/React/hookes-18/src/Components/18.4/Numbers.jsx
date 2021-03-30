import React, {useState} from 'react'

const numbers = [
    {name: "one", checked: false}, 
    {name: "two", checked: false}, 
    {name: "three", checked: false}, 
    {name: "four", checked: false}, 
    {name: "five", checked: false} 
];

let displayNumbers = [...numbers];

function Numbers() {

    const[renderedNums, setRenderedNums] = useState(displayNumbers);

    const [box1Checked, setBox1Checked] = useState(false);
    const [box12Checked, setBox2Checked] = useState(false);
    const [box3Checked, setBox3Checked] = useState(false);
    const [box4Checked, setBox4Checked] = useState(false);
    const [box5Checked, setBox5Checked] = useState(false);

    const checkBox = (index) => {
       console.log(displayNumbers[index].checked);
       displayNumbers[index].checked = true;
    }

    return (
        <div>
            <div>
                <input type="button" value="Delete"></input>
                <input type="button" value="Reset"></input>
            </div>
            <div>
                {renderedNums.map((num,index)=> {
                    return(
                        <div id={index}>
                            <input 
                            type="checkBox" 
                            checked={num.checked}
                            onClick={()=>checkBox(index)}
                            />
                            <span>{num.name}</span>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}
export default Numbers;