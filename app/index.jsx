import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import ex1 from './components/ex-1-composant.jsx';
import ex2 from './components/ex-2-props.jsx';
import ex3 from './components/ex-3-propstype.jsx';
import ex4 from './components/ex-4-propschildren.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const entryPoint = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/1">Composant</Link></li>
        <li><Link to="/2">Props</Link></li>
        <li><Link to="/3">PropsType</Link></li>
        <li><Link to="/4">PropsChildren</Link></li>
      </ul>

      <Route exact path="/" component={App}/>
      <Route path="/1" component={ex1}/>
      <Route path="/2" component={ex2}/>
      <Route path="/3" component={ex3}/>
      <Route path="/4" component={ex4}/>
    </div>
  </Router>
);

// Il faudrait qu'on mount dans le DOM notre composant App
// Le point de montage est l'ID root.
const node = document.querySelector('#root');
ReactDOM.render(<entryPoint />, node);
