import React from 'react';
import Item from '../item/item.jsx';
import ItemCount from '../itemCount/itemCount.jsx';

export default class extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    addToCart: React.PropTypes.func.isRequired
  }
  render() {
    const items = this.props.data.map( (item) => {
      return <Item key={item.id} data={item} addToCart={this.props.addToCart} />
    });
    return (
      <div className="items">
        <ItemCount count={this.props.data.length} className="items__title" />
        <div className="items__inner">
          {this.props.data.length > 0 ? items : 'Pas de produit à afficher'}
        </div>
      </div>
    );
  }
}
