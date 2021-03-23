import React from 'react';
import Card from './Card';
import Name from './Names';


const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Johnny",
        birthday: "1-10-1992",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
   ];


class Data extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            allNames: [],
            allBornBef1990: [],
        }
    }
    componentDidMount = async() => {
       await this.getNames();
       await this.getBornBef1990();
    //    console.log("state is:");
    //    console.log(this.state);
    }

    getNames = () => {
        const objArr = this.state.data;
        const names = objArr.map(obj => {
            return obj.name;
        });
        this.setState({allNames: names});  
    }

    getBornBef1990 = () => {
        const objArr = this.state.data;
          const bornbef = objArr.filter(obj => {
            let tempArr = obj.birthday.split("");
            let year = tempArr.splice(tempArr.length-4, 4);
            year = year.join("");
            return (Number(year) < 1990);
        })
        this.setState({allBornBef1990: bornbef});
    }


    render () {
        return (
            <div>
                Names:
                {this.state.allNames.map(name => {
                    return(<Name key={name} name={name}/>)
                })}
                <br></br>
                Born before 1990:
                <br></br>
                {this.state.allBornBef1990.map(person => {
                    return(<Card 
                        key={person.name}
                        name={person.name} 
                        birthday={person.birthday}
                        favoriteFoods={person.favoriteFoods}
                        />)
                })}
            </div>
        );
    }
}


export default Data;