import logo from "../../components/Assets/Images/LOGO.svg"
import Navbar from "../Navbar/Navbar"

export default function Header(){
    return(
        <header>
            <figure>
                <img src={logo} alt="Logo kasa"/>
            </figure>
            <Navbar/>
        </header>
    )
}