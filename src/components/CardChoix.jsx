import React from "react";

import "../css/cardChoix.css";


function CardChoix(props, children) {
    return (
        <div className="card-choix">
            <div id="gauche">
                {props.children}
            </div>
            <div id="droite">
                <h2>{props.titre}</h2>
                <p>{props.description}</p>
            </div>

        </div>
    );
}
export default CardChoix;