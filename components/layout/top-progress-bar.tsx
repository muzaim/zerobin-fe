"use client";

import { useEffect, useState } from "react";
import { useLanguageStore } from "@/lib/store";

export default function TopProgressBar() {
	const { isNavigating } = useLanguageStore();

	const [progress, setProgress] = useState(0);
	const [visible, setVisible] = useState(false);



	// Animate progress bar values
	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (isNavigating) {
			setTimeout(() => {
				setVisible(true);
				setProgress(10);
			}, 0);

			// Simulate progress incrementing
			interval = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 90) {
						clearInterval(interval);
						return 90;
					}
					// Increment by random amounts
					return prev + Math.random() * 15;
				});
			}, 150);
		} else {
			setTimeout(() => {
				setProgress(100);
			}, 0);
			// Hide after transition completes
			const timeout = setTimeout(() => {
				setVisible(false);
				setProgress(0);
			}, 300);

			return () => clearTimeout(timeout);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isNavigating]);

	if (!visible) return null;

	return (
		<div
			className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-[var(--brand-soft)] overflow-hidden"
			style={{ pointerEvents: "none" }}
		>
			<div
				className="h-full bg-[var(--brand)] transition-all duration-300 ease-out shadow-[0_0_8px_var(--brand)]"
				style={{
					width: `${progress}%`,
				}}
			/>
		</div>
	);
}
