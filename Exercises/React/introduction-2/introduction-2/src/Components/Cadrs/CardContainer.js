import React from 'react'
import Card from './Card';

//import CSS from './Cards.css'

export default function CardContainer() {
    return (
        <div>
             <Card 
                Image={"https://picsum.photos/seed/picsum/400/250"} 
                Title={"Card's BEST Title"} 
                Description={"The best description for an optimal card experiance."}
                Link1={"Get a Cat"}
                Link2={"File For Fork"}
             />
             <Card 
                Image={"https://picsum.photos/seed/picsum/400/250"} 
                Title={"Card's BETTER Title"} 
                Description={"The better description for an optimal card experiance."}
                Link1={"Wiggle Winner"}
                Link2={"Update Uppercuts"}
             />
             <Card 
                Image={"https://picsum.photos/seed/picsum/400/250"} 
                Title={"Card's WORST Title :("} 
                Description={"The medium description for an medium card experiance."}
                Link1={"Get Snake"}
                Link2={"Bargen"}
             />
        </div>
    )
}
