import logo from "../components/Assets/Images/Home.png"
export default function Banner() {
	return (
		<div className="banner">
			<img  src={logo} alt=""></img>
			<p>Chez vous, partout et ailleurs</p>
		</div>
	);
}