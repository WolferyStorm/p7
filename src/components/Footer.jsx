import logo from "../components/Assets/Images/IFOOT.svg";

export default function Footer() {
	return (
		<footer className="foot">
			<img className="foot_img" src={logo} alt="logo de kasa" />
			<p className="foot_text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}