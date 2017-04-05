import React from 'react';
import {cheeses} from '../fixtures/cheeses';
import Products from './products.jsx';
import Cart from './cart.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // TODO
      // Remplacer les valeurs 'en dur' par nos fixtures 'cheeses'
      data: [{
        "id": "bb2ca56c-a03b-4b3f-a66d-0780e034f675",
        "name": "A Fileta",
        "content": "L'A Fileta est un fromage artisanal corse au lait cru de brebis. Sa pâte très moelleuse renferme un goût fort mais très agréable en bouche. On reconnaît l'A Fileta grâce à la feuille de fougères qui le décore (c'est de là que vient son nom), et qui lui confère une saveur de sous-bois en fin de bouche.",
        "image": "/assets/images/a-fileta.jpg"
      },
      {
        "id": "814ef339-1491-420c-9a96-acca6e488b48",
        "name": "Appenzeller",
        "content": "Ce Gruyère de Suisse alémanique dévoile à un an d'affinage un goût très raffiné. En effet, il reçoit des soins particuliers : des brossages hebdomadaires avec une saumure à base de plantes appelée Sulz, dont la recette est gardée secrète (mais dont on vous dévoile une partie de la composition : sel, levure, vin blanc, poivre et un mélange d'une vingtaine à une quarantaine de plantes).",
        "image": "/assets/images/appenzeller.jpg"
      }],
      cart: []
    };
  }
  _addToCart(item) {
    // Note:
    // On vient vérifier que le nouvel item (produit) en paramètre,
    // n'est pas présent dans this.state.cart (notre panier).
    // Si il n'est pas présent, on vient concaténer 'this.state.cart' (notre panier)
    // avec 'item' (notre produit à ajouter au panier).
    // Puis on vient filtrer 'this.state.data' (la liste des produits actuels) en enlevant
    // le nouvel item (produit) qui vient d'être ajouté au panier (cart)
    if (!this.state.cart.includes(item)) {
      this.setState({
        cart: [].concat(this.state.cart, item),
        data: this.state.data.filter( (c) => {
          return c.id !== item.id;
        })
      });
    }
  }
  _removeFromCart(item) {
    // TODO
    // Contrairement à la méthode '_addToCart', cette fois-ci nous devont supprimer
    // un 'item' (produit) de 'this.state.cart' (panier) et le remettre dans
    // 'this.state.data' (liste de produits).
    // 1 - Pour réaliser cette fonction, nous devons faire l'inverse de _addToCart.
    // C'est à dire, filtrer la liste des produits du panier (this.state.cart),
    // et enlever le produit (item) que nous voulons supprimer.
    // 2 - Puis nous devons concaténer 'this.state.data' (notre liste de produit) avec
    // notre nouveau produit (item) pour de nouveau notre produit dans la liste
    // des produits disponible.
    this.setState({
      cart: [], // (Explication 1 du bloc ci-dessus)
      data: [] // (Explication 2 du bloc ci-dessus)
    });
  }
  render() {
    return (
        <main className="row">
          {/* Note - Ici nous passons:
            1 - Au props 'data' 'this.state.data' (nos produits)
            2 - Notre fonction d'ajout au panier 'this._addToCart' en lui 'bindant' this
            au props 'addToCart'
          */}
          <Products
            className="col-sm-6 col-md-8"
            data={this.state.data}
            addToCart={this._addToCart.bind(this)} />

          {/* TODO - Ici nous devons:
            1 - Assigner un props 'data' à notre composant.
            2 - Assigner au props 'data' la valeur de l'état 'this.state.cart' (notre panier)
            3 - Assigner un props 'removeFromCart'
            4 - Assigner au props 'removeFromCart' notre fonction 'this._removeFromCart'
            PS: Inspiré vous du composant 'Products' ci-dessus
          */}
          <Cart
            className="col-sm-6 col-md-4" />
        </main>
    );
  }
}

export default App;
