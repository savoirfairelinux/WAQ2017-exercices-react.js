import React from 'react';

export default class extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    addToCart: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.data = props.data;
    this._addToCart = props.addToCart;
  }
  render() {
    return (
      // TODO
      //  En vous basant sur la structure d'objet ci-dessous:
      //  {
      //    name: String,
      //    image: String,
      //    content: String
      //  }
      //  Afficher:
      //  1 - le 'image' dans notre attribut 'src' de la balise '<img>'
      //  2 - le 'name' dans notre '<h4>'
      //  3 - le 'content' dans notre '<p>'
      //  Note: nos 'data' sont disponible dans 'this.data'
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
            <img src={/* a remplacer (1)*/} />
          <div className="caption">
            <h4>{/* a remplacer (2)*/}</h4>
            <p>
              {/* a remplacer (3)*/}
            </p>
            <button
              className="btn btn-primary"
              onClick={this._addToCart.bind(this, this.data)}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    )
  }
}
