import React from 'react'

const colors = ["pink", "yellow", "cornflowerblue", "black", "white"];
class Box2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorI: 0,
            borderRadius: "0px",  
        };
    }

    componentDidMount() {
        setInterval(()=> {
            this.setState({colorI: +1})
        }, 1000);
    }

    componentDidUpdate() {
        setTimeout(()=> {
            this.setState({borderRadius: "50%"})
        }, 5000) 
    }

    render () {
        return (
            <div id="5" style={{
                width: "10vw", 
                height: "10vw", 
                backgroundColor: colors[this.state.colorI],
                borderRadius: this.state.borderRadius,
                margin: "5px",
                transition: "all 0.8s ease-in-out"
            }}></div>
        );
    }
};

export default Box2;