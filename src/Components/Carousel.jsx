import React, { useState } from 'react';
import chevronGauche from "../Assets/ChevronGauche.png";
import chevronDroit from "../Assets/ChevronDroit.png";
import "../Styles/Carousel.scss";

function Carousel({ pictures }) {//Cette fonction reçoit un tableau contenant les URL des images.

  const [index, setIndex] = useState(0); //Cette variable de compteur est initialisée à 0 au départ.
  const totalPictures = pictures.length - 1; // Nombre maximal d'images

  if (index < 0) setIndex(totalPictures); // Si l'index est inférieur à zéro, le définir sur le nombre maximal d'images
  if (index > totalPictures) setIndex(0); // Si l'index est supérieur au nombre maximal d'images, le définir sur 0

  return (
    <div className='carousel'>
      {/* Affiche la première image */}
      <div className='div-image'>
        <img src={pictures[index]} className="classImage" key={"car-" + index} alt={"photo " + index} />
      </div>

      {/* Si plus d'une image, alors ce code sera exécuté */}
      {totalPictures > 0 && (
        <div>
          {/* Boutons pour les flèches gauche et droite pour naviguer dans le carousel */}
          <button onClick={() => setIndex(index - 1)}> {/* DECREMENTE DE 1*/}
            {index}
            <img src={chevronGauche} className='classChevronGauche' alt={'flèche gauche pour changer de photo ' + index} />
          </button>
          <button onClick={() => setIndex(index + 1)}> {/* INCREMENTE DE 1 */}
            {index}
            <img src={chevronDroit} className='classChevronDroit' alt={'flèche droite pour changer de photo ' + index} />
          </button>
        </div>
      )}

      {totalPictures > 0 && (
        // Compteur d'images qui ne s'affiche qu'en version desktop et lorsqu'il y a plusieurs images
        <div className='div-compteur'>
          <p className='compteurImages'>
            {index + 1}/{totalPictures + 1}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
