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
          <div class="div1 animate__animated animate__fadeInDown">
            <h1> Ride With Spotify: partagez des trajets, réduisez votre empreinte carbone et rencontrez de nouvelles personnes </h1>
            <div className="containerFlex">
              <div id="textAccueil">
                <h2>Objectifs: </h2>
                <ul>
                  <li>Promouvoir une mobilité durable en réduisant l'empreinte carbone individuelle</li>
                  <li>Réduire les coûts en partageant ses trajets</li>
                  <li>Partager un moment convivial entre employé.es</li>
                </ul>
                <h2>Nos Convictions: </h2>
                <p>Chez Spotify, nous sommes profondément engagés à réduire notre empreinte écologique. Nous croyons fermement que chaque petite action compte et nous nous efforçons de créer un environnement durable pour les générations futures, en intégrant des pratiques respectueuses de l'environnement dans toutes nos opérations.</p>
                <h2>Et pour ça ...</h2>
                <p>Commencez dès maintenant en explorant le site</p>
              </div>
              <div id="imgAccueil">
                <img src = "/img/objectif.jpg" alt="Image Accueil" />
              </div>
            </div>
          </div>
          <div id="div1demi">
            <div class="div2 animate__animated animate__fadeInUp" id="voiture">
              <Link to="/voitures" className="link-card">
                <CardChoix titre="Voiture" description="Découvrez nos offres de voitures écologiques."><CarFront size={80} strokeWidth={1.75} /></CardChoix>
              </Link>
            </div>
            <div class="div3 animate__animated animate__fadeInUp" id="velo">
              <Link to="/vélos" className="link-card">
                <CardChoix titre="Vélo" description="Explorez nos options de vélos pour un transport durable." ><Bike size={80}  strokeWidth={1.75} /></CardChoix>
              </Link>
            </div>
            <div class="div4 animate__animated animate__fadeInUp" id="covoiturage">
              <Link to="/covoiturage" className="link-card">
                <CardChoix titre="Covoiturage" description="Partagez vos trajets et réduisez votre empreinte carbone." ><Bus size={80}  strokeWidth={1.75} /></CardChoix>
              </Link>
            </div>
            <div class="div5 animate__animated animate__fadeInBottomRight">
              <h1>Ils le disent mieux que nous ...</h1>
              <div id="containerCarroussel">
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
                <p>Ces informations sont diffusées avec leur accord. </p>
              </div>
              
            </div>
          </div>
          
        </div>
      </main>
    </Fragment>
  );
}

export default Accueil;
