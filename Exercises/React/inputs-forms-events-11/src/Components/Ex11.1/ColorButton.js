import React from 'react';
import './ColorButtons.css'

class ColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {buttoncolor: this.props.color}
    }
    componentDidMount () {
        console.log(this.state.buttoncolor);
    }
    changeMyColor=()=> {
        this.props.changeColorState(this.state.buttoncolor);
    }
    render () {
        return (
            <button 
            style={{backgroundColor:this.state.buttoncolor}} 
            onClick={this.changeMyColor}
            >
                {this.state.buttoncolor}
            </button>
        )
    }
}

export default ColorButton;