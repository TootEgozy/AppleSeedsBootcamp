import React from 'react';

class HideAndSeek extends React.Component {
constructor(props) {
    super(props);
    this.state = {show: false};
}

render() {
    if (this.state.show){
    return (
        <div>
            <button onClick={() => this.setState({show: false})}>
            show/hide
            </button>
            <div style={{
                backgroundColor: "yellow", 
                width: "50vw", 
                height: "150px"}}>

                </div>
        </div>
    )}
    if (!this.state.show) {
        return (
            <div>
                <button onClick={() => this.setState({show: true})}>
                show/hide
                </button>
            </div>
        );
    }
}
}
export default HideAndSeek; 