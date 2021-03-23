import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            birthday: this.props.birthday,
            favoriteFoods: this.props.favoriteFoods
        }
    }
    componentDidMount = () => {
        // console.log("state in card:");
        // console.log(this.state);
    }

    componentDidUpdate = (prevProps) => {
         if(this.props !== prevProps) {
             this.setState({
                 name: this.props.name,
                 birthday: this.props.birthday,
                 favoriteFoods: this.props.favoriteFoods
             });
         }
        // console.log("state in card:");
        // console.log(this.state);
    }

    render() {
        return <fieldset className="person-card">
            <div>Name: {this.state.name}</div>
            <div>Birthday: {this.state.birthday}</div>
            <div>Favorit Foods:</div>
            <div>Meats: {this.state.favoriteFoods.meats.join(", ")}</div>
            <div>Fish: {this.state.favoriteFoods.fish.join(", ")}</div>  
        </fieldset>
    }
}

export default Card;