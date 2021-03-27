import React, { Component } from 'react'

 class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{
                fontFamily: "monospace",
                fontSize: "50px",
                color: "red",
                margin: "8rem"
            }}>
                404 Not Found
            </div>
        )
    }
}

export default NotFound;
