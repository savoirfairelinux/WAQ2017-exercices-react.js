import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import ex1 from './components/ex-1-composant.jsx';
import ex2 from './components/ex-2-props.jsx';
import ex3 from './components/ex-3-propstype.jsx';
import ex4 from './components/ex-4-propschildren.jsx';
import ex5 from './components/ex-5-counter.jsx';
import ex6 from './components/ex-6-lifecycle.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Il faudrait qu'on mount dans le DOM notre composant App
// Le point de montage est l'ID root.
const node = document.querySelector('#root');
ReactDOM.render((
  <Router>
    <div>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React &amp; WAQ</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/1">1 Composant</Link></li>
              <li><Link to="/2">2 Props</Link></li>
              <li><Link to="/3">3 PropsType</Link></li>
              <li><Link to="/4">4 PropsChildren</Link></li>
              <li><Link to="/5">5 Counter</Link></li>
              <li><Link to="/6">6 Lifecycle</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Route exact path="/" component={App}/>
        <Route path="/1" component={ex1}/>
        <Route path="/2" component={ex2}/>
        <Route path="/3" component={ex3}/>
        <Route path="/4" component={ex4}/>
        <Route path="/5" component={ex5}/>
        <Route path="/6" component={ex6}/>
      </div>
    </div>
  </Router>
), node);
