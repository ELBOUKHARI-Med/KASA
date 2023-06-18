import React from 'react';
import '../Styles/Banner.css';

// Composant Banner qui affiche les éléments enfants
function Banner({ children }) {
  return (
    <div> {/* Div principale avec la classe "banner" */}
      {children} {/* Affiche les éléments enfants */}
    </div>
  );
}

export default Banner;

