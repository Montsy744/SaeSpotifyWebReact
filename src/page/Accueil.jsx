import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderSpotify from "../components/HeaderSpotify.jsx";
import CardAvis from "../components/CardAvis.jsx";

import "../css/Accueil.css";

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
              <div class="group" id="group1">
                <CardAvis
                  nom="Valentino"
                  grade="développeur"
                  texte="Meilleure note attribuée par les collaborateurs"
                />
                <CardAvis
                  nom="Sophie"
                  grade="manager"
                  texte="Une équipe au top !"
                />
                <CardAvis
                  nom="Ines"
                  grade="Directrice des finances"
                  texte="250 trajets en vélo"
                />
                <CardAvis
                  nom="Hugo"
                  grade="Lead-dev"
                  texte="155 km parcourus en covoiturage"
                />
                <CardAvis
                  nom="Eva"
                  grade="cadre"
                  texte="Le saviez-vous ? Polluer n'es pas bon"
                />
                <CardAvis
                  nom="Ilies"
                  grade="Dev Rust"
                  texte="Plus grand Contributeur de ce projet"
                />
              </div>

              {/*Ajoutez `aria-hidden` pour masquer les cartes dupliquées aux lecteurs d'écran. */}
              <div aria-hidden class="group" id="group2">
                <CardAvis
                  nom="Valentino"
                  grade="développeur"
                  texte="Meilleure note attribuée par les collaborateurs"
                />
                <CardAvis
                  nom="Sophie"
                  grade="manager"
                  texte="Une équipe au top !"
                />
                <CardAvis
                  nom="Ines"
                  grade="Directrice des finances"
                  texte="250 trajets en vélo"
                />
                <CardAvis
                  nom="Hugo"
                  grade="Lead-dev"
                  texte="155 km parcourus en covoiturage"
                />
                <CardAvis
                  nom="Eva"
                  grade="cadre"
                  texte="Le saviez-vous ? Polluer n'es pas bon"
                />
                <CardAvis
                  nom="Ilies"
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
