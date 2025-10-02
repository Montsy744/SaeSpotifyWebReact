import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import HeaderSpotify from '../components/HeaderSpotify.jsx';

import '../css/Accueil.css';

function Accueil() {
    return (
        <Fragment>
            <HeaderSpotify />
            <main>
                <div id="mainContainer" className="parent">
                    <div class="div1">1</div>
                    <div class="div2">2</div>
                    <div class="div3">3</div>
                    <div class="div4">4</div>
                    <div class="div5">
                        <h1>Ils le disent mieux que nous ...</h1>
                        <div class="carousel">
                            <div class="group">
                                <div class="card">A</div>
                                <div class="card">B</div>
                                <div class="card">C</div>
                            </div>

                            {/*Ajoutez `aria-hidden` pour masquer les cartes dupliquées aux lecteurs d'écran. */}
                            <div aria-hidden class="group">
                                <div class="card">A</div>
                                <div class="card">B</div>
                                <div class="card">C</div>
                            </div>
                            </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default Accueil;
