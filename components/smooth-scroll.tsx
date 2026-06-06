"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReactLenis
			root
			options={{
				autoRaf: true,
				duration: 1.15,
				easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				smoothWheel: true,
				wheelMultiplier: 0.9,
			}}
		>
			{children}
		</ReactLenis>
	);
}
