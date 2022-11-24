import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="description" content="Club de motocross de la guadeloupe" />
				<meta
					property="og:title"
					content="Club de motocross de la guadeloupe"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://guadeloupemotoclub.fr/" />
				{/* <meta property="og:image" content="../public/images/logo.svg" /> */}
				{/* <meta property="og:image" content={`${logo}`} /> */}
				<title>Guadeloupe Moto Club</title>
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</>
	);
}

export default MyApp;
