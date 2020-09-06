import React, { Component } from 'react';
import NavList from './NavList.js';
import ItemList from './ItemList.js'
import store  from './store.js'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemPage from './ItemPage.js';
import {getItemsForNav, findItem, findNav} from './Item-helpers';
import Header from './Header.js'
import AddToCart from './AddToCart'

const  { navs, items } = store


class ItemApp extends Component{
    state = {
        items,
        navs
    };

    setItems = items => {
        this.setState({
          items,
          navs
        })
      }
      
    render(){
        const { items, navs  } = this.state
        return(
        <div>            
            {['/', '/nav/:navName'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={routeProps => {
                            const {navName} = routeProps.match.params;
                            const ItemsForNav = getItemsForNav(
                                items,
                                navName
                            );
                            return (
                                <>
                                <NavList
                                    {...routeProps}
                                    navs={navs}
                                    />
                                <Header />
                                <ItemList
                                    {...routeProps}
                                    items={ItemsForNav}
                                />
                                </>
                            );
                        }}
                    />
                ))}                  
          <Route
            path='/item/:itemId'
            component={ItemPage}
            />
            {/*<Route
            path='/AddToCart'
            component={AddToCart}
            />*/}
            </div>
        )
    }
}


export default ItemApp;