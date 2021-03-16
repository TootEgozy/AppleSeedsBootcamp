import React from 'react'

class Box1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transform: "none", 
            display: "block",
            color: this.props.Color        
        };
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({transform: "translateX(500px)"})
        }, 1000);

        
    }

    componentDidUpdate() {
        setTimeout(()=> {
            setTimeout(()=> {
                this.setState({display: "none"})
            }, 4000);
    
        })
    }
    render () {
        return (
            <div id="5" style={{
                width: "10vw", 
                height: "10vw", 
                backgroundColor: this.state.color,
                margin: "5px",
                transform: this.state.transform,
                display: this.state.display,
                transition: "all 0.8s ease-in-out"
            }}></div>
        );
    }
};

export default Box1;