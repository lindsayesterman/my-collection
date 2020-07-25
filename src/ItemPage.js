import React from 'react';
import store from './store.js'

const { items } = store
export default function ItemPage(props) {
    const item = items.find(p =>
        p.id === props.match.params.itemId
      )
       return(
           <div>
               <img src={item.url}></img>
                <h2>{item.name}</h2>
                <p>{item.price} </p>
                <p>{item.brand}</p>
                <p>{item.description}</p>
           </div>
       )
   }