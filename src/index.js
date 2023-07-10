import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Routes'; // Importe le composant AppRoutes à la place de "routes"
import './Styles/index.css'; // Importe le fichier de style CSS

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
