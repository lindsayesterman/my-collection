import React, { Component } from "react";
import NavList from "./NavList.js";
import ItemList from "./ItemList.js";
import store from "./store.js";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemPage from "./ItemPage.js";
import { getItemsForNav, findItem, findNav } from "./Item-helpers";
import LandingPage from "./LandingPage.js";
import AddToCart from "./AddToCart";
import HeaderNav from "./HeaderNav";

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
          item,
        });
      },
    };
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
                  <HeaderNav />
                  <NavList {...routeProps} navs={navs} />
                  <LandingPage />
                  <ItemList {...routeProps} items={ItemsForNav} />
                </>
              );
            }}
          />
        ))}
        <Route
          path="/item/:itemId"
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
