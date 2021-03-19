import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text:'', checked: ''};
    }

    componentDidMount () {
        this.setState({text: this.props.text, checked: this.props.checked})
    }

    render () {
        return (
            <div>
                <input type="checkbox" checked={this.state.checked}></input>
                <lable>{this.state.text}</lable>
            </div>
        );
    }
}

export default CheckBox;