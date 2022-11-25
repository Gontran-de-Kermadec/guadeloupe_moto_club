import type { NextPageWithLayout } from "./_app";
import { ReactElement, useRef, useEffect } from "react";
import Layout from "../components/layout";
import inscriptionStyle from "../styles/Inscription.module.css";
import FocusMoto from "../public/images/focus.jpg";
import Course from "../public/images/inscription_course.jpg";
import Affiche from "../public/images/affiche_finale.jpg";
import PlanetScooter from "../public/images/planet__scooter.jpg";
import Dalciat from "../public/images/dalciat.png";
import Image from "next/image";

const Inscription: NextPageWithLayout = () => {
	const modalRef = useRef<HTMLDialogElement>(null);
	let modal: any;
	useEffect(() => {
		if (typeof window !== "undefined") {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			modal = document.querySelector(`.${inscriptionStyle.affiche__modal}`);
		}
	});
	const openModal = (e: any) => {
		modal?.showModal();
	};
	const closeModal = (e: any) => {
		if (e.target === modalRef.current) {
			//console.log("ferme modal");
			modal?.close();
		}
	};
	return (
		<div className={inscriptionStyle.inscription__section}>
			<h1>INSCRIPTION COURSE</h1>
			<div>
				<div className={inscriptionStyle.inscription__affiche__flex}>
					{/* <div
						className={
							inscriptionStyle.affiche__modal +
							" " +
							inscriptionStyle.modal__hidden
						}
					>
						<div>
							<Image src={Affiche} alt="affiche finale"></Image>
						</div>
					</div> */}
					<dialog
						className={inscriptionStyle.affiche__modal}
						onClick={(e) => closeModal(e)}
						ref={modalRef}
					>
						<div>
							<Image
								src={Affiche}
								alt="affiche finale"
								layout="responsive"
							></Image>
						</div>
					</dialog>
					<div
						className={inscriptionStyle.affiche__container}
						onClick={(e) => openModal(e)}
					>
						<Image src={Affiche} alt="affiche finale"></Image>
					</div>
					<div className={inscriptionStyle.inscription__course}>
						<p>
							<strong>
								GRANDE FINALE Planet Scooter & La Ferme de DALCIAT
							</strong>
						</p>
						<p>18 Décembre 2022</p>
						<div className={inscriptionStyle.inscription__img__container}>
							<div className={inscriptionStyle.sponsor__container}>
								<div className={inscriptionStyle.sponsor__planet}>
									<Image src={PlanetScooter} alt="Logo Planet Scooter"></Image>
								</div>
								<div className={inscriptionStyle.sponsor__dalciat}>
									<Image src={Dalciat} alt="Logo Ferme Dalciat"></Image>
								</div>
							</div>
							<a
								href="https://my.weezevent.com/grande-finale-planet-scooter-la-ferme-de-dalciat"
								target="_blank"
								rel="noreferer noreferrer"
								className={inscriptionStyle.inscription__link}
							>
								Inscription
							</a>
						</div>
					</div>
				</div>
				{/* <div className={inscriptionStyle.sponsor__container}>
					<div className={inscriptionStyle.sponsor__planet}>
						<Image src={PlanetScooter} alt="Logo Planet Scooter"></Image>
					</div>
					<div className={inscriptionStyle.sponsor__dalciat}>
						<Image src={Dalciat} alt="Logo Ferme Dalciat"></Image>
					</div>
				</div> */}
				<div className={inscriptionStyle.inscription__tombola}>
					<p>
						<strong>Entrées en ligne</strong>
					</p>
					<p>
						<strong>Ticket tombola</strong>
					</p>
					<p>
						<strong>Précommande plat</strong>
					</p>
					<a
						href="https://guadeloupe-moto-club.sumupstore.com/"
						target="_blank"
						rel="noreferer noreferrer"
						className={inscriptionStyle.inscription__link}
					>
						Cliquez
					</a>
				</div>
				<div className={inscriptionStyle.inscription__img__people}>
					<Image
						src={Course}
						alt="Course de motocross"
						layout="responsive"
					></Image>
				</div>
			</div>
		</div>
	);
};
Inscription.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Inscription;
