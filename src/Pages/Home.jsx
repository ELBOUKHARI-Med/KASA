import React from 'react';
import Cards from '../Components/Cards';
import "../Styles/Home.scss";
import "../Styles/Banner.scss";

function Home() {
    return (
        <div role="main">
            <div className="banner banner-commun">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            {/* Rendre le composant Cards */}
            <Cards />
        </div>
    );
}

export default Home;
