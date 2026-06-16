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
	title: {
		default: "ZeroBin - Share Surplus Food Nearby",
		template: "%s — ZeroBin"
	},
	description: "ZeroBin is a quiet, local community app designed to connect neighbors to share surplus food. Pass on extra portions before they end up in the bin, reduce waste, and build neighborhood trust.",
	keywords: ["ZeroBin", "food sharing", "surplus food", "local community", "anti-waste", "sustainability", "berbagi makanan", "makanan sisa", "lingkungan", "tetangga"],
	authors: [{ name: "ZeroBin Community" }],
	creator: "ZeroBin Team",
	metadataBase: new URL("https://zerobin.id"),
	alternates: {
		canonical: "/",
		languages: {
			"en": "/?lang=en",
			"id": "/?lang=id",
		},
	},
	openGraph: {
		title: "ZeroBin - Share Surplus Food Nearby",
		description: "A calmer way to share surplus food with neighbors — before it goes to waste. Free, local, and built with care.",
		url: "https://zerobin.id",
		siteName: "ZeroBin",
		images: [
			{
				url: "/assets/brand/zerobin-og.png",
				width: 1200,
				height: 630,
				alt: "ZeroBin - Share Surplus Food Nearby",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "ZeroBin - Share Surplus Food Nearby",
		description: "A calmer way to share surplus food with neighbors — before it goes to waste. Free, local, and built with care.",
		images: ["/assets/brand/zerobin-og.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${sans.variable} ${display.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "ZeroBin",
							"url": "https://zerobin.id",
							"logo": "https://zerobin.id/assets/brand/zerobin-og.png",
							"sameAs": [
								"https://www.instagram.com/zerobin.id",
								"https://www.linkedin.com/company/zerobin-id"
							],
							"description": "ZeroBin is a local community food sharing platform designed to connect neighbors to share surplus food and reduce organic waste."
						})
					}}
				/>
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
