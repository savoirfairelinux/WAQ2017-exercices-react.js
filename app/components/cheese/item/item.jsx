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
      <div className="item">
        <div className="item__inner">
          <div className="item__image">
            <img src={this.data.image} />
          </div>
          <h4 className="item__title">{this.data.name}</h4>
          <p className="item__description">
            {this.data.content}
          </p>
          <button
            className="item__button"
            onClick={this._addToCart.bind(this, this.data)}>Ajouter au panier</button>
        </div>
      </div>
    )
  }
}
