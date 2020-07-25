import React from 'react';

export default function Item(props){
        return(
            <div className='listing'>
                <img className="item" 
                src={props.url}></img>
                <p className="item-name">{props.name}</p>
                <p className="price">${props.price}</p>
            </div>
        )
}