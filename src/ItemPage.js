import React from 'react';
import store from './store.js'


const { items } = store
export default function ItemPage(props) {
    const item = items.find(p =>
        p.id === props.match.params.itemId
      )
       return(
           <div className="item-info">
            <div className="mini-item-container">
                <img className="mini-item" src={item.url1}></img>
                <img className="mini-item" src={item.url2}></img>
                <img className="mini-item" src={item.url3}></img>
                <img className="mini-item" src={item.url4}></img>
            </div>
               <img className="bigItem"
               src={item.url}></img>
               <div className="info">
                <h2>{item.name}</h2>
                <p>${item.price} </p>
                <p>{item.brand}</p>
                <p>{item.description}</p>
                </div>
           </div>
       )
   }