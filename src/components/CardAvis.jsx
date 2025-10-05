import React from 'react';

import './../css/CardAvis.css';

function CardAvis(props) {
    return (
        <div class="card">
            <div>
                <h2>{props.nom} :</h2>
                <h3>{props.grade}</h3>
            </div>
            <p>{props.texte}</p>
        </div>
    );
}

export default CardAvis;