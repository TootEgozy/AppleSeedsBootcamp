import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    
    render() {
        return (
           <nav>
               <ul>
                <Link to='/' style={{ 
                    textDecoration: 'none', 
                    color: "white",
                    margin: "1rem" 
                    }}>
                    <li>Home</li>
                </Link>
                <Link to='/Products' style={{ 
                    textDecoration: 'none', 
                    color: "white",
                    margin: "1rem" 
                    }}>
                   <li>Our Products</li>
                </Link>
               </ul>
           </nav>
        )
    }
}

export default Header;
