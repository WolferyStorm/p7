import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="nav">
            <Link className="nav_1" to="/">Accueil</Link>
            <Link className="nav_2" to="/About">À propos</Link>
        </nav>
    )
}
