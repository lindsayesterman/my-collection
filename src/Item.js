import React from "react";

export default class Item extends React.Component {
  render() {
    const x = window.matchMedia("(max-width:449px)");
    return (
      <div className="listing">
        <img className="item" src={this.props.url} />
        <p className="item-name">
          {!x.matches
            ? this.props.name
            : (this.props.name.length > 25)
            ? this.props.name.slice(0, 23) + "..."
            : this.props.name}
        </p>
        <p className="price">${this.props.price}</p>
      </div>
    );
  }
}
