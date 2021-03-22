import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: this.props.joke,
            categories: this.props.categories,
            chosenCategory: ''
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.joke !== this.props.joke) {
            await this.setState({joke: this.props.joke})
        }
        if (prevProps.categories.length !== this.props.categories.length) {
            await this.setState({categories: this.props.categories})
        }
    }

    handelChose = (e) => {
        this.setState({chosenCategory: e.target.value});
    }

    sendCategoryToParent = () => {
        this.props.sendNewJoke(this.state.chosenCategory);
    }
    render() {
        return (
                <div className="card">
                    <fieldset className="filedSet">
                        <div className="joke">{this.state.joke}</div>
                        <div className="input-container">
                            <div className="input-row">
                                <span>Choose a catagory: </span>
                                <select onChange={this.handelChose}>
                                    <option value="All">All</option>
                                    {this.state.categories.map(categ => {
                                        return <option value={categ}>{categ}</option>
                                    })}
                                </select>
                            </div>
                            <button onClick={this.sendCategoryToParent}>get new joke</button>
                        </div>
                    </fieldset>
                </div>
        )
    }
}

export default Card;