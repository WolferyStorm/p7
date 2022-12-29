import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<section className="error">
			<p className="error_number">404</p>
			<p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error_link_home">
				Retourner sur la page d'accueil
			</Link>
		</section>
	);
}