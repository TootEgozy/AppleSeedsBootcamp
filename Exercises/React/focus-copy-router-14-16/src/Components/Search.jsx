import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.searchInput = React.createRef();
    }

    componentDidMount = () => {
        this.searchInput.current.focus();
    }

    render () {
        return (
            <form>
                <span>Enter a name: </span>
                <input type="text"/>
                <br></br>
                <span>Search...</span>
                <input 
                type="text"
                ref={this.searchInput}
                ></input>
            </form>
        )
    }
}

export default Search;