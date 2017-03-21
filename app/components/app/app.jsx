import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'John'
    };
  }
  _getRandomName(event) {
    event.preventDefault();

    let names = ['Joe', 'Bob', 'Tyler', 'Dewey', 'John'];
    this.setState({
      name: names[Math.floor(Math.random() * names.length)]
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Hello {this.state.name} !</h1>
        <button
          onClick={this._getRandomName.bind(this)}
          className="button">
            Update my name
          </button>
      </div>
    );
  }
}

export default App;
