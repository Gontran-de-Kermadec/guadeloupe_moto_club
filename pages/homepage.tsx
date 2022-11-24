import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import Logo from "../public/images/gmc_logo.png";
import Monster from "../public/images/monster_logo.png";
import Mxgp from "../public/images/mxgp_logo.png";
import Ffm from "../public/images/ffm_logo.png";
import homepagePic from "../public/images/homepage.jpg";
import homepageStyle from "../styles/Homepage.module.css";

const Homepage: NextPageWithLayout = () => {
	return (
		<div className={homepageStyle.homepage__section}>
			<div>
				<Image src={homepagePic} alt="" />
			</div>
			<div>
				<h1>Bienvenue au Guadeloupe Moto Club</h1>
			</div>
		</div>
	);
};
Homepage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Homepage;
