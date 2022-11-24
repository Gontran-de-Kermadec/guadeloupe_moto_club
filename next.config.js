/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	env: {
		REACT_APP_API_KEY: "AIzaSyABk40x_Cm15s86P2q6T57vX3hfN1cFb_s",
		REACT_APP_AUTH_DOMAIN: "guadeloupe-motoclub.firebaseapp.com",
		REACT_APP_PROJECT_ID: "guadeloupe-motoclub",
		REACT_APP_STORAGE_BUCKET: "guadeloupe-motoclub.appspot.com",
		REACT_APP_MESSAGING_SENDER_ID: "991014625849",
		REACT_APP_APP_ID: "1:991014625849:web:e49a62d613c47fbb7723e8",
		REACT_APP_MEASUREMENT_ID: "G-XVFF8984G2",
	},
};

//export default nextConfig;
module.exports = nextConfig;
