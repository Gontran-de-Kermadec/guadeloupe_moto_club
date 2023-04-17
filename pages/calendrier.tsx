import { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import calendarStyle from "../styles/Calendar.module.css";

const Calendrier: NextPageWithLayout = () => {
	return (
		<div className={calendarStyle.calendar__section}>
			<div className={calendarStyle.calendar__triangle}>
				<h1>CALENDRIER 2023</h1>
			</div>
			<p>
				Le calendrier 2023 est composé des 6 courses du championnat de
				Guadeloupe.
				{/* ainsi qu&apos;une épreuve d&apos;endurance. */}
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
		</div>
	);
};
Calendrier.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Calendrier;
