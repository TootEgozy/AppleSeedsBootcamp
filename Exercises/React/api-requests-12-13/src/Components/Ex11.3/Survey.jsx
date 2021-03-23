import React from 'react';
import AreYouSure from './AreYouSure';
import InputFiled from './InputFiled';
import Select from './Select';
import TextArea from './TextArea';

import './Survey.css';

const sfname= localStorage.getItem("firstName");
const slname= localStorage.getItem("lastName");
const sage= localStorage.getItem("age");
const stext = localStorage.getItem("freeText");

class Survey extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: sfname,
            lastName: slname,
            age: sage,
            freeText: stext,
            showMessage: false,
            submit: false

        }
    }

    componentDidMount = async() => {
        const firstNameStorage = localStorage.getItem('firstName');
        await this.setState({firstName: firstNameStorage});
        
        const lastNameStorage = localStorage.getItem('lastName');
        await this.setState({lastName: lastNameStorage});
        
        const ageStorage = localStorage.getItem('age');
        await this.setState({age: ageStorage});
        
        const freeTextStorage = localStorage.getItem('freeText');
        await this.setState({freeText: freeTextStorage});
        
        console.log(this.state);
        
    }

    componentDidUpdate = () => {
        localStorage.setItem(`firstName`, `${this.state.firstName}`);
        localStorage.setItem(`lastName`, `${this.state.lastName}`);
        localStorage.setItem(`age`, `${this.state.age}`);
        localStorage.setItem(`freeText`, `${this.state.freeText}`);
    }

    handleSubmit = async(e) => {
        await this.setState({showMessage: true});
        if(this.state.submit === false ) e.preventDefault();
    }

    handleMessageChoice = async(input) => {
         if (input === "false") {
             await this.setState({showMessage: false});
         }
         else if(input === "true") {
            await this.setState({showMessage: false, submit: true});
        }
        
    }

    showAMessage = () => {
        if(this.state.showMessage === true) {
            return (
            <AreYouSure 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            age={this.state.age}
            freeText={this.state.freeText}
            handleMessageChoice={this.handleMessageChoice}
            />
            )
        }
    }

    updateMyFirstName = async(input) => {
        await this.setState({firstName: input});
    }

    updateMyLastName = async(input) => {
        await this.setState({lastName: input});
    }

    updateMyAge = async(input) => {
        await this.setState({age: input});
    }

    updateMyFreeText = async(input) => {
        await this.setState({freeText: input});
    }

    render () {
        return (
            <div className="form-container">

                {this.showAMessage()}

                <form id="myForm">
                    <InputFiled 
                    key="a" 
                    type="text" 
                    text="First Name: "
                    defaultValue={this.state.firstName}
                    updateFunc={this.updateMyFirstName}
                    />
                    <InputFiled 
                    key="b" 
                    type="text" 
                    text="Last Name: "
                    defaultValue={this.state.lastName}
                    updateFunc={this.updateMyLastName}
                    />
                    <Select 
                    text="Age: "
                    defaultValue={this.state.age}
                    updateFunc={this.updateMyAge}
                    />
                    <TextArea 
                    text="Free text: "
                    defaultValue={this.state.freeText}
                    updateFunc={this.updateMyFreeText}
                    />

                    <button 
                    className="submit" 
                    type="submit"
                    onClick={this.handleSubmit}
                    >
                    Submit
                    </button>

                </form>
            </div>
        )
    }   
}

export default Survey;