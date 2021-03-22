import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            avatar: this.props.avatar}
    }

    componentDidUpdate = (prevProps) => {
        if(this.props !== prevProps) {
            this.setState({
                name: this.props.name,
                avatar: this.props.avatar               
            });
        };
    }

    render () {
        return (
            <fieldset className="person-card2">
                <div>Name: {this.state.name}</div>
                <img src={this.state.avatar} alt="person avatar"></img>
            </fieldset>

        )
    }
}



export default UserCard;