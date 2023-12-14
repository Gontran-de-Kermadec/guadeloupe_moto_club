import { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import calendarStyle from "../styles/Calendar.module.css";
import reglementStyle from "../styles/Reglement.module.css";

const Calendrier: NextPageWithLayout = () => {
	return (
		<div className={calendarStyle.calendar__section}>
			<div className={calendarStyle.calendar__triangle}>
				<h1>CALENDRIER 2023</h1>
			</div>
			<p>
				Le calendrier 2023 est composé des 6 courses du championnat de
				Guadeloupe.
			</p>
			<ul>
				<li>- 23 AVRIL</li>
				<li>- 22 MAI</li>
				<li>- 18 JUIN</li>
				<li>- 17 SEPTEMBRE</li>
				<li>- 15 OCTOBRE</li>
				<li>- 19 NOVEMBRE</li>
				<li>- 17 DÉCEMBRE</li>
			</ul>
			<div className={calendarStyle.results__container}>
				<h2>Résultats et classement</h2>
				<a
					className={reglementStyle.reglement__link}
					href="/files/classement_course_moto.pdf"
					download="/files/classement_course_moto.pdf"
				>
					Download
				</a>
				<h3>Manche 4</h3>
				<a
					className={reglementStyle.reglement__link}
					href="/files/manche4.pdf"
					download="/files/manche4.pdf"
				>
					Download
				</a>
				<h3>Manche 5</h3>
				<a
					className={reglementStyle.reglement__link}
					href="/files/manche5.pdf"
					download="/files/manche5.pdf"
				>
					Download
				</a>
				<h3>Championnat MX</h3>
				<a
					className={reglementStyle.reglement__link}
					href="/files/classementMX.pdf"
					download="/files/classementMX.pdf"
				>
					Download
				</a>
			</div>
		</div>
	);
};
Calendrier.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Calendrier;
