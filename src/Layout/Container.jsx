import React from 'react';
import "../Styles/Container.scss";

// Composant qui gère la mise en forme du contenu avec une marge gauche et droite de 100%
// à l'exception du Footer, et enveloppe les éléments enfants
function Container({ children }) {
  return (
    <div className='container'>
      {children}
    </div>
  );
}

export default Container;
