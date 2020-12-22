import React from "react";
import Layout from "../components/Layout/Layout";
import Cards from "../components/Cards/Cards";

const Memory = () => {
	return (
		<Layout>
			<Cards num={30} />
		</Layout>
	);
};

export default Memory;
