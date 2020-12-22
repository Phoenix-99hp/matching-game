import React, { useEffect, useState } from "react";
import { PageContainer, MainContent } from "./LayoutStyle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
	const [opacity, setOpacity] = useState(false);

	useEffect(() => {
		setOpacity(true);
	}, []);

	return (
		<PageContainer opacity={opacity}>
			<Header />
			<MainContent>{children}</MainContent>
			<Footer />
		</PageContainer>
	);
};

export default Layout;
