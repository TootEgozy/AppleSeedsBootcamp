import axios from 'axios';
import React from 'react';
import Input from './Input';
import UserCard from './UserCard';
import './UserCard.css'


class Parent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfPeople: 20,
            people: [],
            value: "all",
        }

        this.peopleConst = [];
    }

    componentDidMount = async() => {

        const config = {
            method: 'get',
            url: 'https://randomuser.me/api/'
        }

        let peopleArr=[];
        for(let i = 0; i < this.state.numOfPeople; i++) {
            let res = await axios(config);
            peopleArr.push(res);
            // console.log("ufilterd data:");
            // console.log(peopleArr);
        }

        const filteredPeople = peopleArr.map(person => {
            return {
                name: person.data.results[0].name.first+" "+person.data.results[0].name.last,
                avatar: person.data.results[0].picture.large
            }
        })
        await this.setState({people: filteredPeople});
        this.peopleConst = filteredPeople;
        // console.log("new people const:");
        // console.log(this.peopleConst);

    }

    filterPeople = async(e) => {
        // if (e.target.value !== "all" || e.target.value !== "") {
            await this.setState({people: this.peopleConst});
            const result = await this.state.people.filter(person => {
                const Pname = person.name;
                return (Pname.toLowerCase().startsWith(e.target.value.toLowerCase()));
            });
            this.setState({people: result});
        // }
    }

    render() {
        return(
        <div className="people-cards-input-container">
            <Input filterFunc={this.filterPeople}/>
            <button className="my-button">Useless button</button>
            <div className="cards-container-13-3">
                {this.state.people.map(person => {
                    return <UserCard 
                    name={person.name} avatar={person.avatar}/> 
                })}
            </div>
        </div>
        )
    }
}

export default Parent2;