import React, {useState, useEffect} from 'react'
import Li from './Li';
import './spinner.css';

export default function Alegoria() {

    const [data, setData] = useState([]);
    const [term, setTerm] = useState("hooks");

    const getResponse = async() => {
        try {
            const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${term}`);
            const data = await response.json();
            setData(data);
        }
        catch(err) {
            console.log("Woops! there's an error");
            console.log(err);
        }
    }

    const setSearchTerm = (e) => {
        const searchTerm = e.target.parentElement.children[0].value;
        setTerm(searchTerm);
    }

    const createList = () => {
        const info = data.hits;
        return info.map(link => {
            return <Li key={link.title} title={link.title} href={link.url}/> 
        })
    }

    useEffect (()=>{
        getResponse();
    },[term])

    return (
        <div>
            <h1>Alegoria Search</h1>
            <div>
                <input type="text"></input>
                <button onClick={(e)=>setSearchTerm(e)}>Search</button>
                <ul>
                    {data.length < 1 ? <div className="loader"></div> : createList()}
                </ul>
            </div>
        
        </div>
    )
}
