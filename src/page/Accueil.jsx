import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderSpotify from "../components/HeaderSpotify.jsx";
import CardAvis from "../components/CardAvis.jsx";
import CardChoix from "../components/CardChoix.jsx";

import "../css/Accueil.css";

import {CarFront, Bike, Bus, CircleUser } from 'lucide-react';

function Accueil() {
  return (
    <Fragment>
      <HeaderSpotify />
      <main>
        <div id="mainContainer" className="parent">
          <div class="div1">1</div>
          <div class="div2 animate__animated animate__rotateInDownLeft" id="voiture">
            <Link to="/voitures">
              <CardChoix titre="Voiture" description="Découvrez nos offres de voitures écologiques."><CarFront size={40} strokeWidth={1.75} /></CardChoix>
            </Link>
          </div>
          <div class="div3 animate__animated animate__rotateInDownLeft" id="velo">
            <Link to="/vélos">
              <CardChoix titre="Vélo" description="Explorez nos options de vélos pour un transport durable." ><Bike size={40}  strokeWidth={1.75} /></CardChoix>
            </Link>
          </div>
          <div class="div4 animate__animated animate__rotateInDownLeft" id="covoiturage">
            <Link to="/covoiturage">
              <CardChoix titre="Covoiturage" description="Partagez vos trajets et réduisez votre empreinte carbone." ><Bus size={40}  strokeWidth={1.75} /></CardChoix>
            </Link>
          </div>
          <div class="div5 animate__animated animate__fadeInBottomRight">
            <h1>Ils le disent mieux que nous ...</h1>
            <div class="carousel">
              <div class="group" id="group1">
                <CardAvis
                  nom="Valentino.P"
                  grade="développeur"
                  texte="Meilleure note attribuée par les collaborateurs"
                />
                <CardAvis
                  nom="Sophie.S"
                  grade="manager"
                  texte="Une équipe au top !"
                />
                <CardAvis
                  nom="Ines.H"
                  grade="Directrice des finances"
                  texte="250 trajets en vélo"
                />
                <CardAvis
                  nom="Hugo.S"
                  grade="Lead-dev"
                  texte="155 km parcourus en covoiturage"
                />
                <CardAvis
                  nom="Eva.C"
                  grade="cadre"
                  texte="Le saviez-vous ? Polluer n'es pas bon"
                />
                <CardAvis
                  nom="Ilies.H"
                  grade="Dev Rust"
                  texte="Plus grand Contributeur de ce projet"
                />
              </div>

              {/*Ajoutez `aria-hidden` pour masquer les cartes dupliquées aux lecteurs d'écran. */}
              <div aria-hidden class="group" id="group2">
                <CardAvis
                  nom="Valentino.P"
                  grade="développeur"
                  texte="Meilleure note attribuée par les collaborateurs"
                />
                <CardAvis
                  nom="Sophie.S"
                  grade="manager"
                  texte="Une équipe au top !"
                />
                <CardAvis
                  nom="Ines.H"
                  grade="Directrice des finances"
                  texte="250 trajets en vélo"
                />
                <CardAvis
                  nom="Hugo.S"
                  grade="Lead-dev"
                  texte="155 km parcourus en covoiturage"
                />
                <CardAvis
                  nom="Eva.C"
                  grade="cadre"
                  texte="Le saviez-vous ? Polluer n'es pas bon"
                />
                <CardAvis
                  nom="Ilies.H"
                  grade="Dev Rust"
                  texte="Plus grand Contributeur de ce projet"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Accueil;
