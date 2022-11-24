import { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import aboutStyle from "../styles/About.module.css";
// import AboutImg from "../public/images/about_us.jpg";

const AboutUs: NextPageWithLayout = () => {
	return (
		<div className={aboutStyle.about__section}>
			<div className={aboutStyle.about__triangle}>
				<h1>
					QUI SOMMES NOUS{" "}
					<span>
						<p>?</p>
					</span>
				</h1>
			</div>
			<p>
				<strong>CRÉATION:</strong> 01 JANVIER 1988
			</p>
			<p>
				<strong>SPORTS PRATIQUÉS:</strong> Motocross, Quad-cross et Enduro
			</p>
			<div>
				<p>
					<strong>UN CLUB DYNAMYQUE:</strong>
				</p>
				<ul>
					<li>
						- Organisation du championnat de Guadeloupe de Motocross (7
						Grand-Prix)
					</li>
					<li>- Organisation Endurance Moto / Quad</li>
					<li>- Organisation évènements entres membres du club</li>
				</ul>
			</div>
			<div>
				<div>
					<p>DES MEMBRES ET DES BENEVOLES MOTIVÉS ET ATTACHÉS AU CLUB !</p>
					<div className={aboutStyle.about__values}>
						<p>PASSION</p>
						<p>PARTAGE</p>
						<p>FAMILLE</p>
						<p>PERFORMANCE</p>
					</div>
				</div>
				<div>
					<p className={aboutStyle.about__office}>
						<strong>LE BUREAU:</strong>
					</p>
					<ul>
						<li>
							Président: <i>Vladimir Trefle</i>
						</li>
						<li>
							Vice Président: <i>Robin Lepoutre</i>
						</li>
						<li>
							Secrétaire Général: <i>Élodie Edinval</i>
						</li>
						<li>
							Secrétaire Adjoint: <i>Didier Martiniache</i>
						</li>
						<li>
							Trésorier: <i>Mathilde Lelievre</i>
						</li>
						<li>
							Trésorier adjoint: <i>Marc Halbeher</i>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
AboutUs.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default AboutUs;
