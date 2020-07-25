import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav.js'

export default function NavList (props){
      return (
        <div id="nav-bar">
            {props.navs.map(nav =>
                <div key={nav.name}>
                <NavLink to={`/nav/${nav.name}`}>
                  <Nav 
                    key={nav.name}
                    {...nav}
                  />  
              </NavLink>
              </div>
              )}
        </div>
      );
    }
  
NavList.defaultProps = {
  navs: []
}
  
  