import { useParams } from 'react-router-dom';// le hook useParams de React Router, qui est utilisé pour récupérer les paramètres de l'URL
import ErrorPage from "./ErrorPage";
import Collapse from '../Components/Collapse';
import Carousel from '../Components/Carousel';
import "../Styles/Accommodation.scss";
import records from "../Datas/logements.json";

const arrayStars = [1, 2, 3, 4, 5];

function Accommodation() {
  // Utilisation de useParams pour récupérer l'ID de l'URL
  const { id } = useParams();

  // Le code utilise la méthode find() sur le tableau "records" pour trouver l'élément qui a un ID correspondant à celui extrait de l'URL.
  const record = records.find(element => element.id === id);

  // Si aucun élément correspondant n'est trouvé, ce qui signifie que l'URL a été modifiée manuellement et que l'ID n'est pas valide
  if (!record) return (<ErrorPage />);

  //  Le code utilise la méthode map() sur le tableau "equipments" de l'élément trouvé pour créer une liste d'éléments li contenant les équipements.
  const equipements = record.equipments.map((element, index) => (
    <li className='description-content' key={"equip-" + index.toString()}>{element}</li>
  ));

  return (
    <div className='logement'>


      {/* Le composant Carousel est utilisé pour afficher un carousel d'images en utilisant les images contenues dans la propriété "pictures" de l'élément trouvé. */}
      <Carousel pictures={record.pictures} />

      {/* 1 - affiche le titre, l'emplacement et les tags */}
      <div className='ficheLogement'>
        <div className='div-description'>
          <h1>{record.title}</h1>
          <h4>{record.location}</h4>
          <div className='div-tags'>
            {record.tags.map((element, index) => {
              return (<p className='tag' key={"tag-" + index}>{element}</p>)
            })}
          </div>
        </div>

        {/* 2 - Affiche le nom du propriétaire et sa photo */}
        <div className='bloc-stars'>
          <div className='div-etoiles'>
            <p>{record.host.name}</p>
            <img src={record.host.picture} alt={record.title} />
          </div>

          {/* 3 - Affichage et coloration des étoiles */}
          <div className='stars'>
            {
              arrayStars.map(element => {
                const nbreEtoiles = parseInt(record.rating);
                return (<span key={"star-" + element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
              })
            }
          </div>
        </div>
      </div>

      {/* affiche la description et les équipements */}
      <div className='collapseLogement'>
        <Collapse title="Description" content={record.description} />
        <Collapse title="Equipements" content={equipements} />
      </div>

    </div>
  )
}

export default Accommodation;
