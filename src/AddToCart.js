import React from "react";
import { Route, Link } from "react-router-dom";
import store from "./store.js";
import "./App.css";
import HeaderNav from "./HeaderNav";

class AddToCart extends React.Component {
  render() {
    const { items } = store;
    const item = items.find((p) => p.id === this.props.match.params.itemId);
    const cartItems = item;
    console.log(cartItems);
    const realPrice = (
      parseFloat(item.price) +
      parseFloat(item.price) * 0.06 +
      4.99
    ).toFixed(2);
    return (
      <div className="cart-page">
        <HeaderNav/>
        <h2>You are in the cart</h2>
        <div className="cart-item">
          <h2>{item.name}</h2>
          <Link to={`/item/${item.id}`}>
          <img src={item.url1}></img>
          </Link>
          <p>{item.description}</p>
          <p>${item.price} </p>
        </div>
        <div className="checkout-cart">
          <h3>Checkout</h3>
          <h4>Shipping is $4.99</h4>
          <h4>
            Please send ${realPrice} to the paypal link below. This accounts for
            shipping and tax. I will notify you when I shipped your order:
          </h4>
          <a
            target="_blank"
            href="https://www.paypal.com/paypalme/lindsayscloset"
          >
            Pay here
          </a>
        </div>
        <form
          className="c-form"
          action="https://formspree.io/f/mwkwregz"
          method="POST"
        >
          <input
            name="name"
            type="name"
            placeholder="Enter your name..."
          ></input>
          <input
            name="address"
            type="address"
            placeholder="Enter your address..."
          ></input>
          <input
            name="phone"
            type="text"
            placeholder={`Enter this name: ${item.name}`}
          ></input>
          <button name="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddToCart;
