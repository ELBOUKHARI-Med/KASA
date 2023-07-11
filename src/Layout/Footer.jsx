import React from 'react';
import logo from "../Assets/LogoNoir.webp";
import "../Styles/Footer.scss";

function Footer() {
  return (
    <footer className='footer'>
      {/* Affiche le logo dans le pied de page */}
      <div className='img_footer'>
        <img src={logo} alt='Logo de bas de page' />
      </div>
      {/* Affiche le texte des droits d'auteur */}
      <div className='copyright'>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
