import React from "react";
import { Link } from "react-router-dom";

import { House, CarFront, Bike, Bus, CircleUser } from 'lucide-react';

import '../css/HeaderSpotify.css';

function HeaderSpotify() {
    return (
        <header id="headerSpotify">
            <div id="gaucheHeader">
                <Link to="/"><img src="/img/Logo.png" alt="Logo Spotify" id="logoSpotify"/></Link>
                <Link to="/accueil" id="btn-home" className="btnActive"><House size={40} color="#000000" strokeWidth={1.75}/></Link>
            </div>
            <div id="centerHeader">
                <Link to="/voitures" className="btnToPage btnActive"><CarFront size={40} strokeWidth={1.75} /></Link>
                <Link to="/vélos" className="btnToPage btnActive"><Bike size={40}  strokeWidth={1.75} /></Link>
                <Link to="/covoiturage" className="btnToPage btnActive"><Bus size={40}  strokeWidth={1.75} /></Link>
            </div>
            <div id="droiteHeader">
                <a href="https://www.spotify.com/fr/signup?flow_id=753f5653-94cd-41cb-9cde-09744338720c%3A1759434896&forward_url=https%3A%2F%2Fopen.spotify.com%2F%3Fflow_ctx%3D753f5653-94cd-41cb-9cde-09744338720c%253A1759434896" target="_blank" className="underline-effect btnToPage btnActive">S'inscrire</a>
                <a href="https://accounts.spotify.com/en/v2/login?continue=https%3A%2F%2Fopen.spotify.com%2F" target="_blank"  className="btnToPage btnActive"><CircleUser size={40} strokeWidth={1.75} /></a>
            </div>
        </header>
    );
}

export default HeaderSpotify;