import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

// Il faudrait qu'on mount dans le DOM notre composant App
// Le point de montage est l'ID root.
const node = document.querySelector('#root');
ReactDOM.render(<App />, node);
