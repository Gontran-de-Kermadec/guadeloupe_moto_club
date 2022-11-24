// import type { NextPage } from "next";
import { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import partenaireStyle from "../styles/Partenaire.module.css";

const Partenaire: NextPageWithLayout = () => {
	return (
		<div className={partenaireStyle.partenaire__section}>
			<h1>ÊTRE PARTENAIRE, UNE OPPORTUNITÉ</h1>
			<div className={partenaireStyle.partenaire__flex}>
				<div className={partenaireStyle.partenaire__text}>
					<div>
						<p>
							<strong>Soutenez</strong> avant tout, avec nous, la jeunesse
							guadelopéenne dans le sport. Sensibilisez la jeunesse aux risques
							des 2 roues et la conduite responsable.
						</p>
						<p>
							Votre partenariat, quelqu&apos;il soit, nous aidera à atteindre
							nos objectifs
						</p>
					</div>
					<div>
						<p>
							<strong>Bénéficiez d&apos;une couverture médiatique</strong>
							<br />
							Nous vous offrons une visibilité appréciable:
						</p>
						<ul>
							<li>- Affichage numérique ou papier</li>
							<li>
								- Spot radio, campagne de 7 jours (fréquence 15 spots/jour)
							</li>
							<li>- Presse écrite</li>
							<li>- Flyer</li>
							<li>- Banderoles</li>
							<li>- Street marketing</li>
							<li>- Réseaux sociaux</li>
						</ul>
					</div>
					<div>
						<p>
							<strong>
								Fidéliser, diversifier, attirer une nouvelle clientèle
							</strong>
						</p>
						<ul>
							<li>
								- Un enjeu d&apos;avenir, nos jeunes pilotes sont les acteurs
								économiques de demain.
							</li>
							<li>
								- Les parents sont aussi concernés par le sport, ils sont
								attentifs !
							</li>
						</ul>
					</div>
				</div>
				<div className={partenaireStyle.support__container}>
					<p className={partenaireStyle.support}>
						SOUTENEZ
						<br /> LE MOTOCROSS
					</p>
					<p className={partenaireStyle.support}>
						SOUTENEZ
						<br /> NOS PILOTES
					</p>
					<p className={partenaireStyle.support}>
						SOUTENEZ
						<br /> LE GMC
					</p>
				</div>
			</div>
		</div>
	);
};
Partenaire.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Partenaire;
