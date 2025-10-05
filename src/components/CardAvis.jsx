import React from 'react';



function CardAvis(props) {
    return (
        <div class="card">
            <h2>{props.nom}</h2>
            <h3>{props.grade}</h3>
            <p>{props.texte}</p>
        </div>
    );
}

export default CardAvis;