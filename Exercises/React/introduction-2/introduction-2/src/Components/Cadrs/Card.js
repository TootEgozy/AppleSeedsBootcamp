import React from 'react'
import Description from './Description'
import Image from './Image'
import Link1 from './Link1'
import Link2 from './Link2'
import Title from './Title'

import './Card.css';


export default function Card(props) {
    return (
        <fieldset className="card">
            <Image Image={props.Image}/>
            <Title Title={props.Title}/>
            <Description Description={props.Description}/>
            <Link1 Link1={props.Link1}/>
            <Link2 Link2={props.Link2}/>
        </fieldset>
    )
}
