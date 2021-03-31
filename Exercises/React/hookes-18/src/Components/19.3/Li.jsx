import React from 'react'

export default function Li(props) {
    return (
        <li><a href={props.href}>{props.title}</a></li>
    )
}
