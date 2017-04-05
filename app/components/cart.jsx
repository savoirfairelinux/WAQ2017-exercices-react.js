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
    // Ici il faut itérer sur le tableau data et retourner le composant
    // Item avec trois props:
    // key: qui doit être une String unique
    // data: qui doit être l'objet du tableau actuellement itéré
    // removeFromCart: qui doit être la fonction qui supprimer un item du panier
    const items = this.props.data.map( (item) => {
      return <CartItem key={item.id} data={item} removeFromCart={this.props.removeFromCart} />
    });
    return (
      <div className={this.props.className}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>
              Mon panier
              <ItemCount count={this.props.data.length} className="label label-info pull-right" />
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
