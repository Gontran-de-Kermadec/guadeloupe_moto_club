import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "../components/layout";
import tombolaStyle from "../styles/Tombola.module.css";

const Tombola: NextPageWithLayout = () => {
	return (
		<div className={tombolaStyle.tombola__section}>
			<h1>TOMBOLA</h1>
			<div>
				<div className={tombolaStyle.tombola__intro}>
					<p>
						À l&apos;occasion de la grande finale du championnat de Guadeloupe
						de motocross, le GMC organise une grande tombola.
					</p>
					<p className={tombolaStyle.tombola__italic}>
						<i>De nombreux lots à gagner !</i>
					</p>
				</div>
				<div>
					<a
						className={tombolaStyle.tombola__download}
						href="/files/reglement_tombo.pdf"
						download="/files/reglement_tombo.pdf"
					>
						Règlement Tombola
					</a>
				</div>
				<div>
					<a
						className={tombolaStyle.tombola__download}
						href="/files/lots_tombola.pdf"
						download="/files/lots_tombola.pdf"
					>
						Lots à gagner
					</a>
				</div>
				{/* <div className={tombolaStyle.tombola__lots}>
					<h2>Liste des Lots à gagner</h2>
					<ul>
						<li>Voila</li>
						<li>Voila</li>
						<li>Voila</li>
						<li>Voila</li>
						<li>Voila</li>
						<li>Voila</li>
						<li>Voila</li>
						<li>Voila</li>
						<li>Voila</li>
					</ul>
				</div> */}
				<div className={tombolaStyle.tombola__partners}>
					<h2>Remerciements</h2>
					<ul>
						<li>Planet Scooter</li>
						<li>Caraïbes gliss</li>
						<li>Karacoli</li>
						<li>Location.jetski.guadeloupe</li>
						<li>Lagoon location</li>
						<li>Ferme de Dalciat</li>
						<li>My Private Driver</li>
						<li>Vanellina_Vanille</li>
						<li>Manufacture gourmande</li>
						<li>Restaurant Bord de mer</li>
						<li>Renov empire</li>
						<li>Chrono clean</li>
						<li>Angel Beach</li>
						<li>So V.I.P</li>
						<li>L&apos;atelier Pizza</li>
						<li>Evasion Trial</li>
						<li>Tasty and greedy cake</li>
						<li>Pet&apos;s nature</li>
						<li>Cabinet d&apos;ostéopathie de Colin - Petit-Bourg</li>
						<li>Pam Crêperie</li>
						<li>Marie Yoga Zen</li>
						<li>DM Cars</li>
						<li>Kaizen Moto</li>
						<li>Mahàlo</li>
						<li>Caribean Food</li>
						<li>Cutting Club</li>
						<li>Fit Food</li>
						<li>Glace an nou</li>
						<li>SGDM Mercedes</li>
						<li>HD Vélo</li>
						<li>Baholi St Anne</li>
						<li>Kaya&apos;kool</li>
						<li>Musée du Rhum</li>
						<li>Kayali</li>
						<li>Michel service</li>
						<li>Créole food</li>
						<li>Planet Caraïbes</li>
						<li>Hooka smoke</li>
					</ul>
				</div>
				{/* <div className={reglementStyle.reglement__link__container}>
					<h2>RÈGLEMENT CHAMPIONNAT</h2>
					<a
						className={reglementStyle.reglement__link}
						href="files/reglement.pdf"
						download="files/reglement.pdf"
					>
						Download
					</a>
				</div> */}
				{/* <div className={reglementStyle.reglement__link__container}>
					<h2>HORAIRES</h2>
					<a
						className={reglementStyle.reglement__link}
						href="files/horaires.docx"
						download="files/horaires.docx"
					>
						Download
					</a>
				</div> */}
			</div>
		</div>
	);
};
Tombola.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Tombola;
