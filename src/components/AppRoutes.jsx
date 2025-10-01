import { Routes, Route } from "react-router-dom";
import Accueil from "../page/Accueil.jsx";
import Home from "../page/Home.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Accueil />} />
        </Routes>
    );
}

export default AppRoutes;