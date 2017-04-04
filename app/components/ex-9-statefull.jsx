import React from 'react';

const items = [
    {id: '1e91b13a-cdb2-4268-bc43-da5b08785ed3', content: 'First item'},
    {id: '66c4ef81-40a2-410b-9a5d-750542caf912', content: 'Second item'},
    {id: 'f6b36935-1426-471b-a998-e49e81a6e7a6', content: 'Third item'},
    {id: 'd8c32bba-d9cf-4c9d-8bd3-d595e6b34ee7', content: 'Fourth item'},
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        data: items
    };
  }
  render() {
    let items = this.state.data;
    return (
      <ul>
        {items.map( (item) => {
          return <Item key={item.id} data={item} />
        })}
      </ul>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  _showId() {
  	alert(`My id is ${this.data.id}`);
  }
  render() {
  	return <li key={this.data.id} onClick={this._showId.bind(this)}>{this.data.content}</li>;
  }
}

export default App;
