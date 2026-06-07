import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { Suspense } from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import SmoothScroll from "@/components/layout/smooth-scroll";
import BackToTop from "@/components/layout/back-to-top";
import CookieConsent from "@/components/layout/cookie-consent";
import TopProgressBar from "@/components/layout/top-progress-bar";
import SubscribeModal from "@/components/layout/subscribe-modal";
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
					<Suspense fallback={null}>
						<TopProgressBar />
					</Suspense>
					<Navbar />
					<main>{children}</main>
					<Footer />
					<BackToTop />
					<CookieConsent />
					<SubscribeModal />
				</SmoothScroll>
			</body>
		</html>
	);
}
