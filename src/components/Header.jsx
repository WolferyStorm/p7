import logo from "../components/Assets/Images/LOGO.svg"
import Navbar from "./Navbar"

export default function Header(){
    return(
        <header className="head">
            <figure className="head_figure">
                <img src={logo} alt="Logo kasa"/>
            </figure>
            <Navbar className="head_navbar"/>
        </header>
    )
}