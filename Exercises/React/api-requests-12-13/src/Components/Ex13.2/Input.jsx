import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    componentDidUpdate = (prevState) => {
     
    }


    render () {
        return (
            <input type="text" onChange={this.props.filterFunc}></input>
        );
    };
}








export default Input;