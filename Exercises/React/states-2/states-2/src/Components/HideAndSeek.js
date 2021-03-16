import React from 'react';

class HideAndSeek extends React.Component {
constructor(props) {
    super(props);
    this.state = {show: false};
}

render() {
    if (this.state.show){
    return (
        <fieldset style={{
            display: "flex",
            width: "60vw",
            height: "150px",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <button onClick={() => this.setState({show: false})}>
            show/hide
            </button>
            <div style={{
                backgroundColor: "yellow", 
                width: "50vw", 
                height: "150px"}}>

                </div>
        </fieldset>
    )}
    if (!this.state.show) {
        return (
            <fieldset style={{
                display: "flex",
                width: "60vw",
                height: "150px",
                flexDirection: "column",
                alignItems: "center"
                }}>
                <button onClick={() => this.setState({show: true})}>
                show/hide
                </button>
            </fieldset>
        );
    }
}
}
export default HideAndSeek; 