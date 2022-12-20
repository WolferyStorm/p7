import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className="error">
			<p className="error_nb">404</p>
			<p className="error_tx">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error_link_home">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}