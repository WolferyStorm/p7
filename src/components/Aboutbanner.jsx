import logo from "../components/Assets/Images/about.png"
import logo2 from "../components/Assets/Images/about2.png"

export default function Aboutbanner() {
    return (
        <div className="aboutban">
            <img className="aboutban_1"  src={logo} alt=" montagne"></img>
            <img className="aboutban_2"  src={logo2} alt="foret dans la montagne"></img>
        </div>
    )
}