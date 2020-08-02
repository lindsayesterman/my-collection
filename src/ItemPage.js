import React from 'react';
import store from './store.js'


class ItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bigURL:{}
        }
    }

      handleClick= (e) =>{
        this.setState({
            bigURL: e.target.src
        });
        console.log(this.state.bigURL)
      }

    render(){
        const bigURL = this.state
        const { items } = store
        const item = items.find(p =>
        p.id === this.props.match.params.itemId
      )
       return(
           <div className="item-info">
            <div className="mini-item-container">
                <img 
                className='mini-item'
                src={item.url}
                onClick={this.handleClick}>
                </img>
                <img 
                className='mini-item'
                src={item.url1}
                onClick={this.handleClick}>
                </img>
                <img 
                className="mini-item" 
                src={item.url2}
                onClick={this.handleClick}>
                </img>
                <img 
                className="mini-item" 
                src={item.url3}
                onClick={this.handleClick}>
                </img>
            </div>
               <img 
               className="bigItem"
               src={bigURL}>
               </img>
               <div className="info">
                <h2>{item.name}</h2>
                <p>${item.price} </p>
                <p>{item.brand}</p>
                <p>{item.description}</p>
                </div>
           </div>
       )
    }
}

export default ItemPage