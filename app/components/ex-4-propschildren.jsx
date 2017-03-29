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
      <div className="panel panel-primary">
        {this.props.children}
      </div>
    );
  }
}

class SecondComponent extends React.Component {
  render(){
    return (
        <p className="alert alert-success" >Content of SecondComponent</p>
    );
  }
}

class ThirdComponent extends React.Component {
  render() {
    return (
      <p className="alert alert-info" >Third Component</p>
    );
  }
}

export default App;
