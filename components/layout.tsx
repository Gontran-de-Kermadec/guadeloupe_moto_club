import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";

const Layout: FC<any> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
