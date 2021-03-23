import React from 'react';
import './Survey.css';


//recives from parent: the input type, lable text
//an update-parent-state methode

class InputFiled extends React.Component {
    constructor(props) {
        super(props);
    this.state={
        type:'',
        text: '',
        value: this.props.defaultValue
    }
    }

    componentDidMount = () => {
        this.setState({
            type: this.props.type,
            text: this.props.text,
            value: this.props.defaultValue
        })
    }

    handleChange = async(e) => {
        await this.setState({value: e.target.value});
        this.props.updateFunc(e.target.value);
    }

    render () {
        return (
            <div>
                <span>{this.state.text}</span>
                <input 
                type={this.state.type}
                value={this.state.value}
                onChange={this.handleChange}
                >
                </input>
            </div>
        )
    }
}

export default InputFiled;