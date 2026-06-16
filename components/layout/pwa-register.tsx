"use client";

import { useEffect } from "react";

export default function PwaRegister() {
	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			"serviceWorker" in navigator &&
			!("workbox" in window) // Avoid registering multiple times if workbox or next-pwa is used
		) {
			navigator.serviceWorker
				.register("/sw.js")
				.then((reg) => {
					console.log("Service Worker registered successfully:", reg.scope);
				})
				.catch((err) => {
					console.error("Service Worker registration failed:", err);
				});
		}
	}, []);

	return null;
}
