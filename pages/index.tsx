import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Landing.module.css";
import Logo from "../public/images/gmc-logo.png";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MotoStuntTwo from "./utils/MotoStuntTwo";
import MotoStuntOne from "./utils/MotoStuntOne";
import MotoStuntThree from "./utils/MotoStuntThree";
import MotoStuntFour from "./utils/MotoStuntFour";
import MotoStuntFive from "./utils/MotoStuntFive";
import MotoStuntSix from "./utils/MotoStuntSix";

const Landing: NextPage = () => {
	const router = useRouter();
	// useEffect(() => {
	// 	router.push("/homepage");
	// }, [router]);
	return (
		<main className={styles.main}>
			<MotoStuntOne />
			<MotoStuntTwo />
			<MotoStuntThree />
			<MotoStuntFour />
			<MotoStuntFive />
			<MotoStuntSix />
			<div className={styles.landing__logo__container}>
				<Image src={Logo} alt="logo" layout="fill" objectFit="contain"></Image>
			</div>
			<Link href="/homepage" passHref>
				<a href="replace">GO</a>
			</Link>
		</main>
	);
};

export default Landing;
