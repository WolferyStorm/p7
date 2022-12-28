import staro from "../components/Assets/Images/starco.svg"
import starw from "../components/Assets/Images/starwh.svg"

export default function Star({score}) {
    const rating = [1,2,3,4,5]
	return (
		<div className="rate-comp">
			{rating.map((level) =>
				score >= level ? (
					<img key={level.toString()} className="star" src={staro} alt="étoile pleine"/>
				) : (
					<img key={level.toString()} className="star" src={starw} alt="étoile vide"/>
				)
			)}
		</div>
	);
}