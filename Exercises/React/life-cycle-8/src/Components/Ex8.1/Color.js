import React from 'react'

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritColor: "Blue"};
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({favoritColor: "Purple"})
        }, 2000);
    }

    componentDidUpdate() {
        const div = document.getElementById("1");
        div.innerHTML = `The updated favorite color is ${this.state.favoritColor}`;
    }
    render () {
        return (
            <div>
                <h1>My favorit color is {this.state.favoritColor}</h1>
                <div id="1"></div>
            </div>
        );
    }
};

export default Color;
