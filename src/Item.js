import React from 'react';

export default class Item extends React.Component{

    render(){
        return(
            <div className='listing'>
                <img className="item" 
                src={this.props.url}></img>
                <p className="item-name">{this.props.name}</p>
                <p className="price">${this.props.price}</p>
            </div>
        )
    }
}