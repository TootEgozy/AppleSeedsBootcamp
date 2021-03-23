import React from 'react';
import './Survey.css';


class AreYouSure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            freeText: ''
        }
    }
    componentDidMount = () => {
        this.setState({
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            freeText: this.props.freeText,
            buttonClicked:''
        })
    }

    handleClick = async(e) => {
        await this.setState({buttonClicked: e.target.value});
        this.props.handleMessageChoice(e.target.value);
    }

    render () {
        return (
            <div className="are-you-sure-card-container">
                <h3>Are You Sure You Want To Submit?</h3>
                <h5>Your Form:</h5>
                <h6>First Name: {this.state.firstName}</h6>
                <h6>Last Name: {this.state.firstName}</h6>
                <h6>Age: {this.state.age}</h6>
                <h6>Free Text: {this.state.freeText}</h6>
                <div className="buttons-container">
                    <button 
                    type="submit"
                    className="approve" 
                    value="true"
                    onClick={this.handleClick}
                    >
                    Approve</button>
                    <button 
                    className="cancel" 
                    value="false"
                    onClick={this.handleClick}
                    >Cancel</button>
                </div>
            </div>
        )
    }   
}

export default AreYouSure;