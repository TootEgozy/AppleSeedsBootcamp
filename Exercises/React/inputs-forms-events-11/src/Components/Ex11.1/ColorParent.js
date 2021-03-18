import React from 'react';
import ColorButton from './ColorButton';
import './ColorButtons.css'


const colors = ["red", "blue", "yellow"];

class ColorParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: ""};    
    }

    changeMyColor =(newColor) => {
        this.setState({color: newColor});
    }
  
    buttonRender () {
        colors.map(color => <ColorButton color={color}/>);
    }

    render () { 
        return <fieldset className="a4">
                {colors.map(color => <ColorButton color={color} changeColorState={this.changeMyColor}/>)}
                <div className="a3" style={{color:this.state.color}}>{this.state.color}</div>
           </fieldset>
  }

}

export default ColorParent;
