import React from 'react';

export default class extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    removeFromCart: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cart__item">
        <div className="cart__item-image">
          <img src={this.props.data.image} />
        </div>
        <h4 className="cart__item-title">{this.props.data.name}</h4>
        <button
          onClick={this.props.removeFromCart.bind(this, this.props.data)}
          className="cart__item-remove">X</button>
      </div>
    )
  }
}
