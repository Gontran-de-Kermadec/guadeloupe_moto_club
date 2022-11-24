/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
};

//export default nextConfig;
module.exports = nextConfig;
