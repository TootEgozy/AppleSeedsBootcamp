import React from 'react';

class Button extends React.Component {
constructor(props) {
    super(props);
    this.state = {counter: 0};
}

render() {
    return (
        <div>
            <div>{this.state.counter}</div>
            <button onClick={() => this.setState({counter: this.state.counter+1})}>
            increment 
            </button>
        </div>

    )
}
}
export default Button; 