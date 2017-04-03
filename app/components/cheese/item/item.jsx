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
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
            <img src={this.data.image} />
          <div className="caption">
            <h4 >{this.data.name}</h4>
            <p>
              {this.data.content}
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
