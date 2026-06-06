// app/layout.tsx

import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-[#f8f8f8]">
				<Navbar />

				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
