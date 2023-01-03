import React from "react";
import {NavLink} from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="nav">
            <NavLink className="nav_1" to="/">Accueil</NavLink>
            <NavLink className="nav_2" to="/About">À propos</NavLink>
        </nav>
    )
}
