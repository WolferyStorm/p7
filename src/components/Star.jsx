export default function Star({props}) {
    const rating = [1,2,3,4,5]
	return (
		<div className="rate-comp">
			{rating.map((level) =>
				props >= level ? (
					<i key={level} className="fa-sharp fa-solid fa-star-sharp"></i>
				) : (
					<i key={level} className="fa-sharp fa-solid fa-star-sharp"></i>
				)
			)}
		</div>
	);
}