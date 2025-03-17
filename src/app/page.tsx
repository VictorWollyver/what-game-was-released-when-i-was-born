import React from "react";

import FormSearchGame from "@/components/FormSearchGame";
import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
	title: "What Game Was Released When I Born",
	description: "Discover what game was released when you born",
	keywords: ["game", "release", "born", "date", "gamings", "gamer"],
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
	],
};

const HomePage = async () => {
	return (
		<div className="font-bold text-2xl font-sans px-4  text-center">
			<Container />
		</div>
	);
};

export default HomePage;
