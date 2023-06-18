import React from 'react';
import Navbar from "../Layout/Navbar";
import Container from '../Layout/Container'; // Conteneur avec une marge de 100px à gauche et à droite
import Banner from '../Components/Banner';
import Footer from "../Layout/Footer";
import Cards from '../Components/Cards';

import "../Styles/Home.css";

function Home() {
    return (
        <div role="main">
            <Container>
                {/* Rendre le composant Navbar */}
                <Navbar />

                {/* Rendre le composant Banner */}
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>

                {/* Rendre le composant Cards */}
                <Cards />
            </Container>

            {/* Rendre le composant Footer */}
            <Footer />
        </div>
    );
}

export default Home;
