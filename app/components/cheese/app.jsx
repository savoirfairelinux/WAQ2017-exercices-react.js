import React from 'react';
import {cheeses} from '../../fixtures/cheeses';
import Items from './items/items.jsx';
import Cart from './cart/cart.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: cheeses,
      cart: []
    };
  }
  _addToCart(item) {
    if (!this.state.cart.includes(item)) {
      this.setState({
        cart: [].concat(this.state.cart, item)
      });
      this.setState({
        data: this.state.data.filter( (c) => {
          return c.id !== item.id;
        })
      });
    }
  }
  _removeFromCart(item) {
    this.setState({
      cart: this.state.cart.filter( (c) => {
        return c.id !== item.id;
      })
    });
    this.setState({
      data: [].concat(this.state.data, item)
    });
  }
  render() {
    return (
      <div className="container">
        <header className="page-header">
          <h1>
            Ma fromagerie <small>Meilleure fromage en ville</small>
          </h1>
        </header>

        <main className="row">
          {/* Ici nous devons passer en props data et _addToCart*/}
          <Items data={this.state.data} cssClass="col-sm-6 col-md-8" addToCart={this._addToCart.bind(this)} />
          {/* Ici nous devons passer en props cart et _removeFromCart*/}
          <Cart data={this.state.cart} cssClass="col-sm-6 col-md-4" removeFromCart={this._removeFromCart.bind(this)} />
        </main>
      </div>
    );
  }
}

export default App;
