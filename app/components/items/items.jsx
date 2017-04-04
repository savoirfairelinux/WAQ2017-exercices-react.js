import React from 'react';
import Item from '../item/item.jsx';
import ItemCount from '../itemCount/itemCount.jsx';

export default class extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    cssClass: React.PropTypes.string,
    addToCart: React.PropTypes.func.isRequired
  }
  render() {
    const items = this.props.data.map( (item) => {
      {/* TODO Passer en props la fonction addToCart et l'item */}
      return <Item key={item.id} />
    });
    return (
      <div className={this.props.cssClass}>
        <div className="panel panel-info">
          <div className="panel-heading">
            {/* TODO Passer en props la taille de l'array data */}
            <ItemCount className="lead" />
          </div>
          <div className="panel-body">
            <div className="row" style={{display:'flex', flexWrap:'wrap'}}>
              {this.props.data.length > 0 ? items : 'Pas de produit à afficher'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
