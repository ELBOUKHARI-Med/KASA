import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Container from "../Layout/Container"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

import "../Styles/ErrorPage.css"

function ErrorPage() {
    return (
        <Fragment>
            <Container>
                <Navbar />

                {/* Affichage de la page d'erreur */}
                <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default ErrorPage
