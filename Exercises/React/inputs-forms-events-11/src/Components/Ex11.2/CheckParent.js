import React from 'react';
import CheckBox from './CheckBox';

class CheckParent extends React.Component {
    constructor(props) {
        super(props);
        this.texts=[
            "I would like to get ads to my email", 
            "I would like to get ads to my mail",
            "I would like to see ads in my dreams",
            "All you need is ads"];
    }

    createChecks () {
        const checkList = [];
        for(let i = 0; i<this.texts.length; i++) {
            let isCkecked = false;
            if (i<2) isCkecked = true;
                checkList.push(<CheckBox text={this.texts[i]} checked={isCkecked}/>);
        }
        return checkList;
    }
    render () {
        return (
                <div>
                    {this.createChecks()}
                </div>
             
        )
    }
}

export default CheckParent;