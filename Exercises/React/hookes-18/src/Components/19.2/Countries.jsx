import React, {useState, useEffect} from 'react'
import Country from './Country';

export default function Countries() {

    const [countries, setCountries] = useState(null);
    const [term, setTerm] = useState("");

    const getCountries =async()=> {
        const request = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await request.json();
        // console.log(data);
        setCountries(data);
    }

    const setValue = (e) => {
        setTerm(e.target.value.toLowerCase());
    }

    //filter the countries upon search term typed
    const renderFilteredCountries = () => {
        const filtered = countries.filter(countrie=>{
            const name = countrie.name.toLowerCase();
            return name.startsWith(term)
            }
        );
        
        return (
            filtered.map(country => {
                return <Country key={country.name} name={country.name}/>
            })
        )
    }

    //componentDidMount
    useEffect(()=> {
        getCountries();
    },[]);

    return (
        <div>
            <span>Search countries:  </span>
           <input type="text" onChange={(e)=>setValue(e)} value={term}></input>
           {countries===null? <div>Imagin a spinner here</div> : renderFilteredCountries()} 
        </div>
    )
}
