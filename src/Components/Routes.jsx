import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Accommodation from "../Pages/Accommodation";
import ErrorPage from "../Pages/ErrorPage";

// Définit les routes, cette fonction est appelée dans index.js
function Routes() {
  // Crée un navigateur de routage avec les routes spécifiées
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/about", element: <About />, errorElement: <ErrorPage /> },
    { path: "/logement/:id", element: <Accommodation />, errorElement: <ErrorPage /> },
    { path: "*", element: <ErrorPage /> }, // Toutes les routes non trouvées iront vers ErrorPage
  ]);

  // Rend le contenu de l'application dans l'élément racine de l'HTML
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      {/* Fournit le router aux composants pour la gestion des routes */}
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default Routes;
