import React from 'react'
import './Spinner.css'

class Spinner extends React.Component {
constructor(props) {
    super(props);
    this.state = {messege: this.props.messege};
}
    render () {
        return (
            <div>
                <div className="loader"></div>
                <div className="text" style={{position:"relative", left:"47%" }}>{this.state.messege}</div>
            </div>
        )
    }
};

export default Spinner;