import React from 'react'

export default function Button(props) {
    return (
        <button style={{fontWeight: props.fontWeight, margin: '10px'}}>{props.text}</button>
    );
};
