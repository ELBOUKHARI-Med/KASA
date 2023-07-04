import React from 'react';
import Banner from '../Components/Banner';

import Cards from '../Components/Cards';

import "../Styles/Home.css";

function Home() {
    return (
        <div role="main">

            {/* Rendre le composant Banner */}
            <Banner>
                <div className="banner banner-commun">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </Banner>

            {/* Rendre le composant Cards */}
            <Cards />
        </div>
    );
}

export default Home;
