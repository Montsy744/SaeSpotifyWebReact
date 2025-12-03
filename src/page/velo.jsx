import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderSpotify from "../components/HeaderSpotify.jsx";
import BlocInfo from "../components/BlocInfo.jsx";

import "../css/velo.css";

function Velo() {
    return (
        <Fragment>
            <HeaderSpotify />
            <main>
                <BlocInfo titre="Location de vélo">
                    <div>
                        <p>L'entreprise Spotify met à disposition de ses salariés un service de location de vélo pour facilité vos déplacements. Ce service va être mis en place dans les grandes villes où nos bureaux sont implanter. Ce service est notamment mis en place pour les salarié vivant dans ces mêmes villes.</p>
                    </div>
                </BlocInfo>

                <div class="parent">
                    <div class="div1">
                        <BlocInfo titre="Informations">
                            <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                                <p>Notre service de location RideWithSpotify™ met à disposition des vélos de ville provennant de la marque partenaire VéloDeVille. Pour louer un vélo, rien de plus simple ! Munissez-vous de votre application ou de votre site RideWithSpotify™ et rendez-vous dans ce même onglet, vous trouverez plus bas un court formulaire à remplir, rassurez-vous, ces données ne seront pas divulguées</p>
                                <div className="imgVelo">
                                    <img src = "/img/imgVelo.png" alt="Image Accueil" />
                                </div>
                            </div>
                        </BlocInfo>
                    </div>
                    <div class="div2">
                        <BlocInfo titre="Vélo Standard">
                            
                        </BlocInfo>
                    </div>
                    <div class="div3">
                        <BlocInfo titre="Vélo Electrique">
                            
                        </BlocInfo>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default Velo;
