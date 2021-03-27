import React, { Component } from 'react';
import Store from './Store';
import {Link} from 'react-router-dom';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            imageUrl: null,
            price: null,
            size: null ,
            id: this.props.match.params.id
       
        }
    }

    componentDidMount = async() => {
        const product = Store.find(item => {
            return (String(item.id) === this.state.id);
        })
        this.setState({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            size: product.size
        })
    }

    render() {
        console.log("state:");
        console.log(this.state);
        return (
            <div className="product-item">
                <h3>{this.state.title}</h3>
                <img alt={this.state.title} src={this.state.imageUrl}></img>
                <p>Price: {this.state.price}</p>
                <p>Size: {this.state.size}</p>
                <Link to='/products'><button>Back</button></Link>
            </div>
        )
    }
}

export default ProductDetail;  