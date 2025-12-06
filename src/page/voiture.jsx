import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderSpotify from "../components/HeaderSpotify.jsx";
import BlocInfo from "../components/BlocInfo.jsx";
import BtnClassique from "../components/BtnClassique.jsx";

import "../css/voiture.css";

function Voiture() {
  return (
    <Fragment>
        <HeaderSpotify />

        <main>
            <BlocInfo titre="Prêt de voitures">
                <div>
                    <p>
                    Pour les salariés qui n'habiterait pas dans les villes où sont
                    implanter nos bureau, pas de panique, nous avons aussi pensé a
                    vous. En effet l'entreprise va maintenant pouvoir fournir, a ses
                    salarié ne possédant pas de voiture ou possédant des voiture
                    thermique, des voitures électriques.
                    </p>
                </div>
            </BlocInfo>
            <BlocInfo titre="Nos Véhicules">
              <div id="parentNosVehicules">
                <div className="imgVoiture" id="imgVoiture1">
                  <img src="/img/Image-Hyundai-Kona-Hybrid.jpg" alt="image de la voiture"></img>
                </div>
                <div className="imgVoiture" id="imgVoiture2">
                  <img src="/img/Image-Renault-Zoe.jpeg" alt="image de la voiture"></img>
                </div>
                <div className="texteVoiture" id="texteVoiture1">
                  <h2>Renault Zoe</h2>
                  <ul className="listeDivVoiture">
                    <li>Autonomie : 395 km</li>
                    <li>Vitesse maximale : 135 km/h</li>
                    <li>Caractéristiques : Climatisation automatique, écran tactile de 9,3 pouces, système de navigation, régulateur de vitesse.</li>
                  </ul>
                  <BtnClassique titre="souscrire a cette abonnement"/>
                </div>
                <div className="texteVoiture" id="texteVoiture2">
                  <h2>Hyundai Kona Electric</h2>
                  <ul className="listeDivVoiture">
                    <li>Autonomie: 484km</li>
                    <li>Vitesse maximale: 147km/h</li>
                    <li>Caractéristiques : Système de navigation, sièges chauffants et ventilés, régulateur de vitesse adaptatif.</li>
                  </ul>
                  <BtnClassique titre="souscrire a cette abonnement"/>
                </div>
              </div>
            </BlocInfo>
        </main>
    </Fragment>
  );
}

export default Voiture;
