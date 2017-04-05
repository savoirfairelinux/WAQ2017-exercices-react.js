import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

// Il faudrait qu'on mount dans le DOM notre composant App
// Le point de montage est l'ID root.
const node = document.querySelector('#root');
ReactDOM.render((
  <Router>
    <div className="container">
      <header className="page-header">
        <ul className="nav nav-pills pull-right">
          <li className="link-wrapper"><NavLink activeClassName="active" to="/">Accueil</NavLink></li>
          <li className="link-wrapper"><a href="#">À propos</a></li>
        </ul>
        <h1>
          Ma fromagerie <small>Meilleure fromage en ville</small>
        </h1>
      </header>

      <Route exact path="/" component={App}/>
    </div>
  </Router>
), node);
