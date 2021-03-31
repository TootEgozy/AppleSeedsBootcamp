import React, {useState, useEffect} from 'react'
import Card from './Card';

export default function SearchUsers() {
    const numOfUsers=20;

    const [data, setData] = useState(null);
    const [term, setTerm] = useState("");

    const getData = async() => {
        const dataArr = [];
        for(let i=0; i<numOfUsers; i++) {
            const response = await fetch("https://randomuser.me/api/");
            const user = await response.json();
            dataArr.push({
                name: `${user.results[0].name.first} ${user.results[0].name.last}`,
                avatar: user.results[0].picture.large
            });
        }
        setData(dataArr);
    }

    const setSearchTerm = (e) => {
        setTerm(e.target.value.toLowerCase());
    }

    const renderCards = () => {
        const filteredUsers = data.filter(user=> {
            return user.name.toLowerCase().startsWith(term);
        });

        return filteredUsers.map(user=> {
            return <Card key={user.name} name={user.name} src={user.avatar}/>
        });
    }

    useEffect (()=> {
        getData();
    },[])

    return (
        <div>
            <input type="text" value={term} onChange={(e)=>setSearchTerm(e)}></input>
            <div>{data === null? <div>Imagin a loading spinner here...</div> : renderCards()}</div>
        </div>
    )
}
