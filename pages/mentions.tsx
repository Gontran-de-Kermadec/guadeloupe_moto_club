import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";

import mentionsStyle from "../styles/Mentions.module.css";
import { ReactElement } from "react";

const Mentions: NextPageWithLayout = () => {
	return (
		<div className={mentionsStyle.mentions__section}>
			<h1>Mentions Légales</h1>
			<p>
				Le Guadeloupe Moto Club s’engage à être vigilant sur la fiabilité de
				l’information mise à la disposition des internautes qui consultent ce
				site. Il ne saurait en revanche être tenu pour responsable d’erreurs,
				d’omissions ou des résultats qui pourraient être obtenus par un usage
				inapproprié de ces informations.
			</p>
			<h2>Éditeur du site</h2>
			<p>Nom : Guadeloupe Moto Club</p>
			<p>Adresse : 9 rue Bebian, 97110, Pointe-à-Pitre</p>
			<p>SIRET : 445 220 486 00010</p>
			<p>Code APE : 93.12Z</p>
			<h2>Hébergement du site</h2>
			<p>Google</p>
			<p>8 Rue de Londres – 75009 Paris France</p>
			<p>Télélphone: 01 42 68 53 00</p>
			<p>
				Site web :{" "}
				<a
					href="https://console.firebase.google.com/"
					target="_blank"
					rel="noreferrer"
				>
					console.firebase.google.com
				</a>
			</p>
			<h2>Droits d&apos;auteur - propriété intellectuelle</h2>
			<p>
				L’ensemble de ce site relève de la législation française et
				internationale sur le droit d’auteur et la propriété intellectuelle.
				Tous les droits de reproduction sont réservés, y compris pour les
				documents téléchargeables et les représentations iconographiques et
				photographiques. La reproduction de tout ou partie de ce site sur un
				support, quel qu’il soit, est formellement interdite sauf autorisation
				expresse du Guadeloupe Moto Club
			</p>
			<h2>Confidentialité et respect des données relatives à la vie privée</h2>
			<p>
				Tout utilisateur dispose d’un droit d’accès, de rectification et
				d’opposition aux données personnelles le concernant, en effectuant sa
				demande écrite et signée, accompagnée d’une preuve d’identité. 5678 Le
				site ne recueille pas d’informations personnelles, et n’est pas
				assujetti à déclaration à la CNIL.
			</p>
			<h2>Remerciements</h2>
			<p>Gontran de Kermadec</p>
			<h2>Crédits</h2>
			<div>
				Les icones utilisés sur le site sont fournis par{" "}
				<a target="_blank" rel="noreferrer" href="https://icons8.com">
					Icons8
				</a>
			</div>
			<h2>Contact</h2>
			<p>
				Pour toute remarque sur le fonctionnement du site, écrivez à
				l’administrateur du site à partir de la rubrique « contact » de ce site.
			</p>
		</div>
	);
};
Mentions.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Mentions;
