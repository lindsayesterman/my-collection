import React from 'react';
import Item from './Item.js'
import { Link } from 'react-router-dom';
import { countItemsForNav } from './Item-helpers'

class ItemList extends React.Component {
    static defaultProps = {
      items:[], 
    };

    render() {
      const { items } = this.props
      return (
        <div className='flex-container'>
            {items.map(item =>
             <Link to={`/item/${item.id}`}>
              <Item
                key={item.id}
                {...item}
              /> 
              </Link>
            )}
        </div>
      );
    }
  }

  export default ItemList;