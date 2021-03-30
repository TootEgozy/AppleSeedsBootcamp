import React, {useState} from 'react';

export default function Task(props) {
    let [subjectCompeleted, setSubjectCompeleted] = useState(props.isCompeleted);

    const changeState = () => {
        subjectCompeleted ? setSubjectCompeleted(false) : setSubjectCompeleted (true);
    }

    return (
        <div style={{textAlign: "left", marginLeft:"10rem"}}>
            <span 
            style={{
                textDecoration: subjectCompeleted ? "line-through" : "none",
                margin: "2rem",
                lineHeight: "1.5rem" 
            }}>
                {props.name} 
            </span>

            <span
            onClick={()=> changeState()}
            >  
                {subjectCompeleted ? "V" : "X"}
            </span>
        </div>
    )
}
