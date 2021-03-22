import React from 'react';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name}
    }
    componentDidUpdate = (prevProps) => {
        if(this.props !== prevProps) {
            this.setState({name: this.props.name});
        }
    }

    render () {
        return (
            <span> {this.state.name} </span>
        )
    }
}

export default Name;