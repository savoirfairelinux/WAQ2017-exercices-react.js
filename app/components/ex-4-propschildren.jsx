import React from 'react';

class App extends React.Component {
  render(){
    return (
         <FirstComponent>
           <SecondComponent />
            <ThirdComponent />
        </FirstComponent>
    );
  }
}

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

class SecondComponent extends React.Component {
  render(){
    return (
        <p>Content of SecondComponent</p>
    );
  }
}

class ThirdComponent extends React.Component {
  render() {
    return (
      <p>Third Component</p>
    );
  }
}

export default App;
