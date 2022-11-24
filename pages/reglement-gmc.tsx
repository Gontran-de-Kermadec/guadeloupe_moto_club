import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "../components/layout";
//import mesures from '../public/mesures_evenement.pdf'
import reglementStyle from "../styles/Reglement.module.css";

const Rule: NextPageWithLayout = () => {
	return (
		<div className={reglementStyle.reglement__section}>
			<h1>RÈGLEMENT INTÉRIEUR</h1>
			<div>
				<div className={reglementStyle.reglement__link__container}>
					<h2>MESURES POUR LE BON DÉROULEMENT DE L&apos;ÉVÈNEMENT</h2>
					<a
						className={reglementStyle.reglement__link}
						href="files/mesures_evenement.pdf"
						download="files/mesures_evenement.pdf"
					>
						Download
					</a>
				</div>
				<div className={reglementStyle.reglement__link__container}>
					<h2>RÈGLEMENT CHAMPIONNAT</h2>
					<a
						className={reglementStyle.reglement__link}
						href="files/reglement.pdf"
						download="files/reglement.pdf"
					>
						Download
					</a>
				</div>
				<div className={reglementStyle.reglement__link__container}>
					<h2>HORAIRES</h2>
					<a
						className={reglementStyle.reglement__link}
						href="files/horaires.docx"
						download="files/horaires.docx"
					>
						Download
					</a>
				</div>
			</div>
			{/* <p>HORAIRES COURSES</p> */}
			{/* <button>Download</button> */}
		</div>
	);
};
Rule.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Rule;
