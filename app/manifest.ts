import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "ZeroBin",
		short_name: "ZeroBin",
		description: "Share surplus food with neighbors",
		start_url: "/",
		display: "standalone",
		background_color: "#fbfaf5",
		theme_color: "#1f5f2a",
		icons: [
			{
				src: "/assets/brand/zerobin-logo.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/assets/brand/zerobin-logo.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
