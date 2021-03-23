import React from 'react';
import './Survey.css';

//recives from parent: lable text
//an update-parent-state methode

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        text: '',
        value: this.props.defaultValue
    }
    }

    componentDidMount = () => {
        this.setState({
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
                <textarea 
                className="textarea"
                value={this.state.value}
                onChange={this.handleChange}
                rows="3"
                colums="30"
                >
                </textarea>
            </div>
        )
    }
}

export default TextArea;