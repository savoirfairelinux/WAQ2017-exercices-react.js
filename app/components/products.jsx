import React from 'react';
import Product from './productItem.jsx';
import ItemCount from './itemCount.jsx';

export default class extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    className: React.PropTypes.string,
    addToCart: React.PropTypes.func.isRequired
  }
  render() {
    const items = this.props.data.map( (item) => {
      return <Product key={item.id} data={item} addToCart={this.props.addToCart} />
    });
    return (
      <div className={this.props.className}>
        <div className="panel panel-info">
          <div className="panel-heading">
            <ItemCount count={this.props.data.length} className="lead" />
          </div>
          <div className="panel-body">
            <div className="row" style={{display:'flex', flexWrap:'wrap'}}>
              {this.props.data.length > 0 ?
                items :
                <div style={{paddingLeft: 15, paddingRight: 15}}>
                  <p className="alert alert-warning">
                    Pas de produit à afficher
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
