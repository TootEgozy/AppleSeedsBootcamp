import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <fieldset>
            <img src={props.src} alt="avatar"></img>
            <h3>{props.name}</h3>
        </fieldset>
    )
}
