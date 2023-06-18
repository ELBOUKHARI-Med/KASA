import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Assets/logo.png';
import '../Styles/Navbar.css';

function Navbar() {
  const isActiveStyle = { textDecoration: "underline" };

  // Utilisation d'un tableau en prévision d'ajouts au menu
  const menuItems = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À Propos" },
  ];

  // Définit un élément du menu actif et affiche son label
  const MenuItem = ({ to, label }) => (
    <li key={to}>
      {/* Utilise NavLink pour gérer le style de l'élément actif */}
      <NavLink to={to} style={({ isActive }) => isActive ? isActiveStyle : undefined}>
        {label}
      </NavLink>
    </li>
  );

  // Affiche le logo et boucle sur les éléments du menu pour les afficher
  return (
    <div className='navbar'>
      <Link to="/">
        <img src={logo} alt='Logo du site Kasa' />
      </Link>
      <nav>
        <ul>{menuItems.map(MenuItem)}</ul>
      </nav>
    </div>
  );
}

export default Navbar;
