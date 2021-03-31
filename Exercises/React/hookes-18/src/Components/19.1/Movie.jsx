import React from 'react'

export default function Movie(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>Director: {props.director}</div>
        </div>
    )
}
