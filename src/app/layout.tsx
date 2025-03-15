import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "What Game Was Released When I Born",
	description: "Discover what game was released when you born",
	keywords: ["game", "release", "born", "date", "gamings", "gamer"],
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={` ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
