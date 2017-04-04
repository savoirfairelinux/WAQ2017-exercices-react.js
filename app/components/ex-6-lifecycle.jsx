import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayTimer: true,
      data: []
    };
    this._addItem = this._addItem.bind(this);
    this._removeItem = this._removeItem.bind(this);
  }
  _addItem() {
    return this._generateValue();
  }
  _generateValue() {
    let newValue = Math.floor(Math.random() * 100) + 1;
    let values = this.state.data;
    values.push(newValue);
    this.setState({
      data: values
    });
  }
  _removeItem(event) {
    if (!event.target.getAttribute('data-value')) {
      return false;
    }

    let valueToRemove = event.target.getAttribute('data-value');

    this.setState({
      data: this.state.data.filter( (item) => {
        return item != valueToRemove;
      })
    });
  }
  render() {
    let items = this.state.data.map((value, index) => {
      return (
        <Component
          value={value}
          key={index}
          index={index}
          removeItem={this._removeItem} />
      );
    });
    return (
      <div>
        <button onClick={this._addItem}>
          Add one
        </button>
        <ul>
          {items.length > 0 ? items : 'Nothing to show'}
        </ul>
      </div>
    );
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
   console.log(`Component with index ${this.props.index} will mount.`);
  }
  componentDidMount() {
   console.log(`Component with index ${this.props.index} is mount.`);
  }
  componentWillUnmount() {
    console.log(`Component with index ${this.props.index} will unmount.`);
  }
  render() {
    return (
        <li>{this.props.value}
          <button
            data-value={this.props.value}
            onClick={this.props.removeItem.bind(this)}>X</button>
        </li>
    );
  }
}

export default App;
