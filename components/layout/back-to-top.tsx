"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > window.innerHeight);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollUp}
			aria-label="Back to top"
			className={`
				fixed bottom-8 right-6 z-[200]
				flex items-center justify-center
				h-11 w-11
				rounded-full
				bg-white
				text-[var(--brand-dark)]
				border border-[var(--line)]
				shadow-[0_4px_20px_rgba(0,0,0,0.15)]
				transition-all duration-300 ease-out
				${visible
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 translate-y-4 pointer-events-none"
				}
			`}
		>
			<ArrowUp size={16} strokeWidth={2.5} />
		</button>
	);
}
