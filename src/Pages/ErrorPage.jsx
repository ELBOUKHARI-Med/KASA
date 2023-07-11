import React, { Fragment } from 'react'
import { Link } from "react-router-dom"


import "../Styles/ErrorPage.scss"

function ErrorPage() {
    return (
        <Fragment>

            {/* Affichage de la page d'erreur */}
            <div className='error commun-error'>
                <span>404</span>
                <h4>Oups! La page que vous demandez n'existe pas.</h4>
                <p><Link to="/">Retourner sur la page d’accueil</Link></p>
            </div>

        </Fragment>
    )
}

export default ErrorPage
