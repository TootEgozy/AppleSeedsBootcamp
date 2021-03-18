import React from 'react'
import Spinner from './Spinner';

class TimedComp extends React.Component {
    constructor(props) {
        super(props);
        this.state={counter:1}
    }
    
    componentDidMount() {
        setInterval(() => {
            console.log(this.state.counter);
            this.setState({counter: (this.state.counter+1)})
        }, 1000); 
    }

    renderContent () {
        if (this.state.counter <= 5) {
            return (
                <Spinner messege="loading ;)"/>
            )
        }
        return <div>Component Loaded!</div>
    }


    render () {
        return <div>{this.renderContent()}</div>
    }
}

export default TimedComp;