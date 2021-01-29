import React from "react";
import store from "./store.js";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

class ItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigURL: {},
      cartItem: [],
    };
  }

  // handleClick = (e) => {
  //   this.setState({
  //     bigURL: e.target.src.split("/").pop(),
  //   });
  // };

  handleAddToCart = () => {
    this.setState({
      item: this.props.item,
    });
    this.setState({
      cartItem: this.props.item,
    });
    console.log(this.props.item);
  };

  render() {
    const { bigURL } = this.state;
    const { items } = store;
    const URLClicked = `/img/${bigURL}`;
    const item = items.find((p) => p.id === this.props.match.params.itemId);
    return (
      <div className="item-info">
        <HeaderNav/>
        <div className="mini-item-container">
          <div className="c-container">
            <img
              className="c-item"
              src={item.url}
              onClick={this.handleClick}
            ></img>
            <img
              className="c-item"
              src={item.url1}
              onClick={this.handleClick}
            ></img>
            <img
              className="c-item"
              src={item.url2}
              onClick={this.handleClick}
            ></img>
            <img
              className="c-item"
              src={item.url3}
              onClick={this.handleClick}
            ></img>
          </div>
        </div>
        {/* <img className="bigItem" src={URLClicked}></img> */}
        <div className="info">
          <h2>{item.name}</h2>
          <p><b>Price</b> <br/> ${item.price} </p>
          <p><b>Brand</b> <br/> {item.brand}</p>
          <p><b>Description</b> <br/> {item.description}</p>
          <Link to={`/AddToCart/${item.id}`}>
            <button
              className="add-to-cart"
              key={this.props.id}
              onClick={this.handleAddToCart}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ItemPage;
