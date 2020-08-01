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
            <div className="open">
                <h2>
                    Lindsay's Closet
                </h2>
                <h3>
                    - Sustainable fashion. You will want.
                </h3>
            </div>
            {/*<div className="welcome">
                    <div className="promo">
                        <h3>Get 25% off your order of $15 or more!</h3>
                        <button className='get-code'>Get Code!</button>
                        <h5 className="hidden">With Code: first25</h5>
                    </div>
            </div>*/}
        </div>
    )
}
