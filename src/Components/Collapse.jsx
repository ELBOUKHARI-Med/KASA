import React, { useState } from 'react';
import chevronUp from "../Assets/ChevronUp.png";
import chevronDown from "../Assets/ChevronDown.png";
import "../Styles/Collapse.scss";

function Collapse({ title, content }) {
  // Définit le collapse par défaut comme étant fermé
  const [contentVisible, setContentVisible] = useState(false);

  // Inverse la valeur du contenu visible à chaque clic sur le collapse
  const toggleContent = () => {
    setContentVisible(!contentVisible); // Inverse la valeur actuelle
  };

  // Définit les classes CSS en fonction de la visibilité du contenu et du chevron
  const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse";
  const collapseChevron = contentVisible ? chevronUp : chevronDown;

  return (
    <div className="collapse">
      {/* Affiche le titre et le chevron */}
      <div className="collapse__header" onClick={toggleContent}>
        <span>{title}</span>
        <div className="chevronValue">
          <img src={collapseChevron} alt="" />
        </div>
      </div>

      {/* Affiche le contenu */}
      <div className={collapseContent}>
        <ul>{content}</ul>
      </div>
    </div>
  );
}

export default Collapse;
