import React from 'react';
import { Link } from "react-router-dom";
import records from "../Datas/logements.json";
import "../Styles/Cards.scss";

// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card
const Cards = () => {
  return (
    <div className="logements">
      {/* liste les éléments de la base de données. */}
      {records.map((record) => {
        const { id, cover, title } = record;

        // Affiche la fiche logement sur la page d'accueil
        return (
          <div className="fiche-logement" key={id}>
            {/* Lien vers la page de détails du logement */}
            <Link to={`/logement/${id}`}>
              {/* Image de couverture du logement */}
              <img src={cover} alt={title} />
              {/* Titre du logement */}
              <h3>{title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
