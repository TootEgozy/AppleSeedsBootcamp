import React, { Component } from 'react'
import Store from './Store';
import {Link} from 'react-router-dom';


class Products extends Component {
    constructor(props){
        super(props);
        this.state ={items: []}
    }

    componentDidMount = async() => {
        await this.setState({items: Store});
    }

    render() {
        return (
            <div>
               {this.state.items.map(item => {
                   console.log(item.id);
                   return (
                        <Link to={`/products/${item.id}`} key={item.id}>                       
                            <h3 id={item.id}>{item.title}</h3>
                        </Link>
                   )
               })}
            </div>
        )
    }
}

export default Products;