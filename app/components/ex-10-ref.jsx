import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
  }
  _handleSubmit(event) {
    event.preventDefault();
    let login = this.login;
    let password = this.password;
    let data = {login: login.value, password: password.value};
    console.log(data);
    // log input#login value et input#password value
  }
  render() {
    return (
      <form method="POST" onSubmit={this._handleSubmit.bind(this)}>
            <input type="text" ref={(ref) => this.login = ref} id="login" className="login" />
            <br />
            <input type="password" ref={(ref) => this.password = ref} id="password" className="password" />
            <br />
            <button type="submit">Log toi</button>
        </form>
    );
  }
}

export default Login;
