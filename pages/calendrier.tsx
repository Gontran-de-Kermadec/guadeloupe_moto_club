import { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import calendarStyle from "../styles/Calendar.module.css";

const Calendrier: NextPageWithLayout = () => {
	return (
		<div className={calendarStyle.calendar__section}>
			<div className={calendarStyle.calendar__triangle}>
				<h1>CALENDRIER 2022</h1>
			</div>
			<p>
				Notre calendrier 2022 est composé des 8 courses du championnat de
				Guadeloupe ainsi qu&apos;une épreuve d&apos;endurance.
			</p>
			<ul>
				<li>- 20 MARS</li>
				<li>- 17 AVRIL</li>
				<li>- 22 MAI</li>
				<li>- 26 JUIN</li>
				<li>- 25 SEPTEMBRE</li>
				<li>- 23 OCTOBRE</li>
				<li>- 20 NOVEMBRE</li>
				<li>- 18 DÉCEMBRE</li>
			</ul>
		</div>
	);
};
Calendrier.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Calendrier;
