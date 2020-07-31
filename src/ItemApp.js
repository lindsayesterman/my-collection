import React, { Component } from 'react';
import NavList from './NavList.js';
import ItemList from './ItemList.js'
import store  from './store.js'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemPage from './ItemPage.js';
import {getItemsForNav, findItem, findNav} from './Item-helpers';
import Header from './Header.js'

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
                                <NavList
                                    {...routeProps}
                                    navs={navs}
                                />
                            );
                        }}
                    />
                ))}
       
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
                                <Header />
                            );
                        }}
                    />
                ))}                       
          <Route
            path='/item/:itemId'
            component={ItemPage}
            />
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
                                <ItemList
                                    {...routeProps}
                                    items={ItemsForNav}
                                />
                            );
                        }}
                    />
                ))}
                
            </div>
        )
    }
}


export default ItemApp;