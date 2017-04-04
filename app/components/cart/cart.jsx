import React from 'react';
import Item from './item/item.jsx';
import ItemCount from '../itemCount/itemCount.jsx';

export default class extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    cssClass: React.PropTypes.string,
    removeFromCart: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    // TODO
    // Créer un variable nomé 'items'
    // Il faut itérer sur le tableau data et retourner le composant
    // Item avec trois props:
    // key: qui doit être une String unique
    // data: qui doit être l'objet du tableau actuellement itéré
    // removeFromCart: qui doit être la fonction qui supprimer un item du panier
    // Tips: Regarder le composant items.jsx

    return (
      <div className={this.props.cssClass}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>
              Mon panier
              <ItemCount count={this.props.data.length} className="label label-info pull-right" />
            </h4>
          </div>
          <div className="panel-body">
            {/* TODO Afficher les items ou le message 'Votre pannier est vide' si le tableau est vide */}
          </div>
        </div>
      </div>
    );
  }
}
