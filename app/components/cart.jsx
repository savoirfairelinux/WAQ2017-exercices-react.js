import React from 'react';
import CartItem from './cartItem.jsx';
import ItemCount from './itemCount.jsx';

export default class extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    removeFromCart: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    // TODO:
    // Dans l'assignation 'const items = [];',
    // Itérer avec la fonction 'map' sur le tableau data (passé en 'props' depuis le compsant parent).
    // A chaque itération, retournez le composant 'CartItem'.
    // Puis passé lui en propriété (props):
    // key: qui doit être une String unique
    // data: qui doit être l'objet du tableau actuellement itéré
    // removeFromCart: qui doit être la fonction qui va supprimer un item du panier
    //
    // PS: Pour rappel, voici la fonction 'map'
    // const mesDatas = monArray.map((maValeur) => {
    //  return <MonComposant />
    // });
    const items = [];
    return (
      <div className={this.props.className}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>
              Mon panier
              {/* TODO
                1 - Assigner un 'props' nommé 'count' au composant 'ItemCount'
                2 - La valeur du 'props' 'count' doit être égale à la taille
                du tableau 'data' disponible dans les 'props' du composant.
              */}
              <ItemCount
                className="label label-info pull-right" />
            </h4>
          </div>
          <div className="panel-body">
            {this.props.data.length > 0 ? items : 'Votre pannier est vide'}
          </div>
        </div>
      </div>
    );
  }
}
