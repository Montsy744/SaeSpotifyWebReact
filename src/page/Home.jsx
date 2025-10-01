import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import './../css/App.css';
import ButtonRotate from '../components/ButtonRotate.jsx';

function Accueil() {
    return (
    <Fragment>
        <div id="containerApp">
            <h1>Ride With Spotify</h1>
            <Link to="/accueil" id="btn-start"><ButtonRotate /></Link>
        </div>
    </Fragment>        
    );
}
export default Accueil;
