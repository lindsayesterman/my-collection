import React from 'react';
import store from './store.js'


class ItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bigURL:{}
        }
    }

      handleClick= () =>{
        this.setState({
            bigURL: true
        });
      }

    render(){
        const { items } = store
        console.log(this.state.bigUrl)
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
                src={item.url2}>
                </img>
                <img 
                className="mini-item" 
                src={item.url3}>
                </img>
            </div>
               <img 
               className="bigItem"
               src={this.state.bigURL}>
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