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
      <div className="media">
        <div className="media-left media-middle">
          <img width="50" src={this.props.data.image} />
        </div>
        <div className="media-body">
          <h4>{this.props.data.name}</h4>
        </div>
        <div className="media-right media-middle">
          {/* TODO Ajouter un event listner au click  du bouton pour suprimer cet item du cart */}
          <button
            className="btn btn-danger pull-right">X</button>
        </div>
      </div>
    )
  }
}
