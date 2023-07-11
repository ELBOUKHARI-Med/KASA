import React from 'react';// Importe la bibliothèque React
import ReactDOM from 'react-dom';// Importe le module ReactDOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Importe les modules nécessaires pour le routage
import Navbar from './Layout/Navbar';// Importe le composant Navbar
import Footer from './Layout/Footer';// Importe le composant Footer
import Container from './Layout/Container';// Importe le composant Container
import Home from './Pages/Home';// Importe le composant Home
import About from './Pages/About';// Importe le composant About
import Accommodation from './Pages/Accommodation';// Importe le composant Accommodation
import ErrorPage from './Pages/ErrorPage';// Importe le composant ErrorPage

function App() {           // Définit la fonction de composant App
  return (                // Retourne le JSX suivant :
    <Router>               {/* Démarre la configuration du routage */}
      <Navbar />           {/* Rend le composant Navbar */}
      <Container>          {/* Démarre le conteneur principal */}
        <Routes>           {/* Définit la section des routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Accommodation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>   {/* Ferme la section des routes */}
      </Container>  {/* Ferme le conteneur principal */}
      <Footer />    {/* Rend le composant Footer */}
    </Router>       //* Ferme la configuration du routage 
  );


}

ReactDOM.createRoot(document.getElementById("root")).render( // Crée un "root" React et rend l'application
  <React.StrictMode> {/* Enveloppe l'application dans un mode strict de React */}
    <App/>    {/* Rend le composant App */}
  </React.StrictMode>   // Ferme le mode strict de React 
);

export default App;   // Exporte le composant App par défaut
