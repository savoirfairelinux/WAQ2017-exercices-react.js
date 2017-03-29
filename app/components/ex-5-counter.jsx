import React from 'react';

class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        clickCount: 0 // Par défaut l'état du compteur est à Zéro
      };
      this._incrementClick = this._incrementClick.bind(this);
    }
  _incrementClick() {
      this.setState({
        clickCount: this.state.clickCount + 1
        // Au clique ajoute 1 au compteur
      });
  }
  render() {
    return (
      <div>
        {/*Ici le h2 est mis à jour avec la nouvelle valeur*/}
        <h2>{this.state.clickCount}</h2>
        <button onClick={this._incrementClick}> Add +</button>
      </div>
    );
  }
}

export default Counter;
