import React from 'react';
import axios from 'axios';
import Card from './Card';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint:'https://api.chucknorris.io/jokes/random?category=',
            categoriesEndpoint: 'https://api.chucknorris.io/jokes/categories',
            randomEndPoint: 'https://api.chucknorris.io/jokes/random',
            categories: [],
            joke: ''
        }
    }

    componentDidMount = async() => {
        const response = await axios.get(this.state.categoriesEndpoint);
        const response2 = await axios.get(this.state.randomEndPoint);

        this.setState({
            categories: response.data,
            joke: response2.data.value
        }); 

    }

    getJokeFromChild = async(category) => {
        if(category === "All") {
            const response = await axios.get(this.state.randomEndPoint); 
            this.setState({joke: response.data.value});
        }
        else {
            const response2 = await axios.get(this.state.endpoint+category);
            this.setState({joke: response2.data.value});
        }
    }

    render () {
        return(
            <div>
                <Card 
                sendNewJoke={this.getJokeFromChild} 
                categories={this.state.categories} 
                joke={this.state.joke}
                />
            </div>
        );
    }
}



export default Parent;