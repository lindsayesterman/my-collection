import React from 'react';
import { Route } from 'react-router-dom'
import store from './store.js'

class AddToCart extends React.Component{
    render(){
        const { items } = store
        const item = items.find(p =>
        p.id === this.props.match.params.itemId
      )
        return(
            <div>
            <h2>You are in the cart</h2>
            </div>
        )
    }
}

export default AddToCart;