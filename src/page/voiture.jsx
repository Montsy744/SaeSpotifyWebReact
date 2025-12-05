import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderSpotify from "../components/HeaderSpotify.jsx";
import BlocInfo from "../components/BlocInfo.jsx";

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
        </main>
    </Fragment>
  );
}

export default Voiture;
