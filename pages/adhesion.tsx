import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Ffm from "../public/images/ffm_logo.png";
import Motos from "../public/images/adhesion_club2.jpg";
import adhesionStyle from "../styles/Adhesion.module.css";

const Adhesion: NextPageWithLayout = () => {
	return (
		<div className={adhesionStyle.adhesion__section}>
			<h1>ADHÉSION CLUB</h1>
			<div>
				<p>
					L&apos;adhésion au Guadeloupe Moto-club se fait directement lors de la
					prise de votre licence FFM
				</p>
				<p>IDENTIFIANTS GMC</p>
				<p>
					<span>Strucuture: </span>C0458 - MOTO CLUB GUADELOUPE
				</p>
				<div>
					<div className={adhesionStyle.adhesion__ffm__container}>
						<Image src={Ffm} alt="logo"></Image>
					</div>
					<a href="https://www.ffmoto.org/" target="_blank" rel="noreferrer">
						Cliquez
					</a>
				</div>
			</div>
			<div className={adhesionStyle.adhesion__img__container}>
				<Image src={Motos} alt="logo"></Image>
			</div>
		</div>
	);
};
Adhesion.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Adhesion;
