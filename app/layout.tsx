import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const sans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const display = Fraunces({
	subsets: ["latin"],
	variable: "--font-display",
});

export const metadata: Metadata = {
	title: "Cellar - Share Surplus Food Nearby",
	description:
		"Cellar helps households, cafes, and community groups share surplus food before it goes to waste.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${sans.variable} ${display.variable}`}>
			<body>
				<SmoothScroll>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
