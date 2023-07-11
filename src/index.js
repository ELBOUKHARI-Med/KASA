import React from 'react';              // Importe la bibliothèque React
import ReactDOM from 'react-dom';       // Importe le module ReactDOM
import App from './Routes';  // Importe le composant App
import './Styles/index.scss';            // Importe le fichier de style CSS

ReactDOM.render(                     // Effectue le rendu de l'application dans l'élément avec l'ID "root" du fichier HTML
  <React.StrictMode>                 {/* Enveloppe l'application dans un mode strict de React */}
    <App/>                           {/* Rend le composant App */}
  </React.StrictMode>,
  document.getElementById('root')    // Sélectionne l'élément avec l'ID "root" dans le fichier HTML
);
