import { Routes, Route } from "react-router-dom";
import Accueil from "../page/Accueil.jsx";
import Home from "../page/Home.jsx";
import Voiture from "../page/voiture.jsx";
import Velo from "../page/velo.jsx";
import Covoiturage from "../page/covoiturage.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/voitures" element={<Voiture />} />
            <Route path="/vélos" element={<Velo />} />
            <Route path="/covoiturage" element={<Covoiturage />} />
        </Routes>
    );
}

export default AppRoutes;