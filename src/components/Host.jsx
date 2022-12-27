export default function Host(props) {
	return (
		<div className="host">
			<div className="host_name">{props.hostName}</div>
			<div className="host_picture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</div>
	);
}