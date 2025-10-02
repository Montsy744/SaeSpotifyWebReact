import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import HeaderSpotify from '../components/HeaderSpotify.jsx';

function Accueil() {
    return (
        <Fragment>

            <HeaderSpotify />
        <h1>Page d’accueil</h1>
        <p>Bienvenue sur l’accueil de mon site React.</p>

        {/* Lien vers la page Contact */}
        <Link to="/">Aller à la page Home</Link>
        </Fragment>
    );
}

export default Accueil;
