import React from 'react'
import { Link } from 'react-router-dom';

export default function Header (props){
    return(
        <div className="header">
           <ul>
                <li className="lindsay">
                    <Link to={'/'}
                    style={{ textDecoration: 'none', color:'black' }}>
                        Lindsay's Closet
                    </Link>
                </li>
                <li className="tabs">Search</li>
                <li className="tabs">Cart</li>
                <li className="tabs">Profile</li>
            </ul>
            <div className="openingimg">
            <img className="car-top" src="/img/cartop.png"></img>
            <img className="dye-top" src="/img/bigdye.png"></img>
            </div>
        </div>
    )
}
