import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<section className="error">
			<div className="error_number">404</div>
			<div className="error_text">Oups! La page que vous demandez n'existe pas.</div>
			<Link to="/" className="error_link_home">
				Retourner sur la page d'accueil
			</Link>
		</section>
	);
}