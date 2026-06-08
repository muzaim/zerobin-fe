"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
	delay?: number; // delay in ms
	duration?: number; // duration in ms
	distance?: string; // translate distance e.g. "20px" or "2rem"
}

export default function ScrollReveal({
	children,
	className = "",
	delay = 0,
	duration = 800,
	distance = "24px"
}: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target); // Reveal only once
				}
			},
			{
				threshold: 0.05, // trigger when 5% of the element is visible
				rootMargin: "0px 0px -40px 0px" // offset trigger slightly above the bottom viewport edge
			}
		);

		const currentRef = ref.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	const transitionStyle = {
		transitionProperty: "opacity, transform",
		transitionDuration: `${duration}ms`,
		transitionDelay: `${delay}ms`,
		transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		transform: isVisible ? "translateY(0)" : `translateY(${distance})`
	};

	return (
		<div
			ref={ref}
			style={transitionStyle}
			className={`will-change-[transform,opacity] ${
				isVisible ? "opacity-100" : "opacity-0"
			} ${className}`}
		>
			{children}
		</div>
	);
}
