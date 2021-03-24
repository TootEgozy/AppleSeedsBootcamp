import React from 'react';
import './Copy.css';

class Copy extends React.Component{
    constructor(props) {
        super(props);
        this.copyRef = React.createRef();
    }

   
    copyValue = (e) => {
        this.copyRef.current.select();
        document.execCommand("copy");
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <h4>Write some text:</h4>
                <textarea 
                rows="4" 
                columns="50"
                ref={this.copyRef}
                ></textarea>
                <button
                onClick={this.copyValue}
                >Copy Text</button>
            </div>
        )
    }
}

export default Copy;