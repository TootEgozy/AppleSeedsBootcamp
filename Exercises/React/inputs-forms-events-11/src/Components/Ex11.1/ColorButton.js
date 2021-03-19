import React from 'react';
import './ColorButtons.css'

class ColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: this.props.color}
        // console.log("New Button is made! Color "+this.props.color);
        // console.log(props);
    }
    componentDidMount () {
        console.log(this.state.color);
    }
    changeMyColor=()=> {
        this.props.changeColorState(this.state.color);
    }
    render () {
        return (
            <button 
            style={{backgroundColor:this.state.color}} 
            onClick={this.changeMyColor}
            >
                {this.state.color}
            </button>
        )
    }
}

export default ColorButton;