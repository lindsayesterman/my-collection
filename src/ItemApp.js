import React, { Component } from "react";
import NavList from "./NavList.js";
import ItemList from "./ItemList.js";
import store from "./store.js";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemPage from "./ItemPage.js";
import { getItemsForNav, findItem, findNav } from "./Item-helpers";
import Header from "./Header.js";
import AddToCart from "./AddToCart";

const { navs, items } = store;

class ItemApp extends Component {
  state = {
    items,
    navs,
  };

  setItems = (items) => {
    this.setState({
      items,
      navs,
    });
  };

  render() {
    const { items, navs } = this.state;
    const context = {
        items: this.state.items,
        items: this.state.item,
        addItemToCart: (item) => {
            this.setState({
              item
            })
          }
      }
    return (
      <div>
        {["/", "/nav/:navName"].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              const { navName } = routeProps.match.params;
              const ItemsForNav = getItemsForNav(items, navName);
              return (
                <>
                  <NavList {...routeProps} navs={navs} />
                  <Header />
                  <ItemList {...routeProps} items={ItemsForNav} />
                </>
              );
            }}
          />
        ))}
        <Route path="/item/:itemId" 
        render={(routeProps) => {
          return <ItemPage item={this.state.item} {...routeProps} />;
        }}
        />
        <Route
          path="/AddToCart/:itemId"
          render={(routeProps) => {
            return <AddToCart item={this.state.item} {...routeProps} />;
          }}
        />
      </div>
    );
  }
}

export default ItemApp;
