import React from 'react';
import './Survey.css';

//recives from parent: the input type, lable text
//an update-parent-state methode

class Select extends React.Component {
    constructor(props) {
        super(props);
    this.state={
        text: '',
        value: this.props.defaultValue
    }
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.text,
            value: this.props.defaultValue
        })
    }

    handleChange = async(e) => {
        await this.setState({value: e.target.value});
        this.props.updateFunc(e.target.value);
    }

    render () {
        return (
            <div>
                <span>{this.state.text}</span>
                <select
                value={this.state.value}
                onChange={this.handleChange}
                >
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                </select>
            </div>
        )
    }
}

export default Select;