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
    // La function addToCart prend en paramètre le nouvel item que nous voulons
    // ajouter. Dans son usage on veut pouvoir :
    // - Vérifier que le tableau 'cart' ne possède pas déjà l'item que nous voulons ajouter.
    // - Si le tableau 'cart' ne le possède pas on va assigner à 'cart' un nouveau
    // tableau qui sera le résultat de la concaténation de 'cart' et de 'item'.
    // - Nous voulons également filtrer le tableau 'data' pour enlever le nouvel 'item'
    // qui vient d'être ajouté au panier.
    //
    // Note: pour assigner une valeur en état nous devons utiliser la méthode
    // this.setState.
    // Dans cet exercice vous devez utiliser les méthodes: includes, concat et filter
    // de JavaScript.
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
    // La function removeFromCart prend en paramètre l'item que nous voulons supprimer.
    // À l'inverse de addToCart cette fois-ci nous voulons supprimer de 'cart'
    // l'item passé en paramètre et ajouter à 'data' l'item que nous voulons supprimer du panier.
    //
    // PS: Dans cet exercice vous devez utiliser les méthodes: filter et concat.

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
        <header className="header">
          <h1 className="header__title">
            Ma fromagerie
            <span className="header__catchline">Meilleure fromage en ville</span>
          </h1>
        </header>

        <main className="main">
          {/* Ici nous devons passer en props data et _addToCart*/}
          <Items data={this.state.data} addToCart={this._addToCart.bind(this)} />
          {/* Ici nous devons passer en props cart et _removeFromCart*/}
          <Cart data={this.state.cart} removeFromCart={this._removeFromCart.bind(this)} />
        </main>
      </div>
    );
  }
}

export default App;
