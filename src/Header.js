import React from 'react'
import { Link } from 'react-router-dom';

export default function Header (props){
    return(
        <div className="closet">
            <img src="/img/esma-closet.png"/>
            <img src="/img/dog.png"/>
            <header>
                <Link to={'/'}>
                        <h1>LINDSAY'S CLOSET</h1>
                </Link>
            </header>
        </div>
    )
}
