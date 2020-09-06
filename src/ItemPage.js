import React from 'react';
import store from './store.js'
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom'

class ItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bigURL:{}
        }
    }

      handleClick= (e) =>{
        this.setState({
            bigURL: e.target.src.split("/").pop(), 
            click: 0
        });
      }

    render(){
        const { bigURL } = this.state
        const { items } = store
        const URLClicked = `/img/${bigURL}`
        const item = items.find(p =>
        p.id === this.props.match.params.itemId
        );
       return(
           <div className="item-info">
            <div className="mini-item-container">
                <img 
                className='mini-item'
                src={item.url}
                onClick={this.handleClick}>
                </img>
                <img 
                className='mini-item'
                src={item.url1}
                onClick={this.handleClick}>
                </img>
                <img 
                className="mini-item" 
                src={item.url2}
                onClick={this.handleClick}>
                </img>
                <img 
                className="mini-item" 
                src={item.url3}
                onClick={this.handleClick}>
                </img>
            </div>
               <img 
               className="bigItem"
               src={URLClicked}>
               </img>
               <div className="info">
                <h2>{item.name}</h2>
                <p>${item.price} </p>
                <p>{item.brand}</p>
                <p>{item.description}</p>
                <Link to='/AddToCart'>
                <button 
                className="add-to-cart"
                key={this.props.id}>
                    Add to Cart
                </button>
                </Link>
                </div>
           </div>
       )
    }
}

export default ItemPage