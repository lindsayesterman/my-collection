import React from "react";

export default class Item extends React.Component {
  render() {
    return (
      <div className="listing">
        <img className="item" src={this.props.url} />
        <p className="item-name">{this.props.name.length < 25 ? this.props.name : this.props.name.slice(0,23)+"..."}</p>
        <p className="price">${this.props.price}</p>
      </div>
    );
  }
}
