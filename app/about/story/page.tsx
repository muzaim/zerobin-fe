"use client";

import { useEffect } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function OurStoryPage() {
	const { language } = useLanguageStore();
	const t = translations[language].innerAboutStory;

	useEffect(() => {
		document.title = `${t.eyebrow} — ZeroBin`;
	}, [t.eyebrow]);

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Story Hero */}
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">{t.eyebrow}</span>
						<h1 className="display-title mt-6 text-[clamp(2.8rem,8vw,4.5rem)] leading-[1.1]">
							{t.titlePrefix}<span className="text-[#195A00]">{t.titleHighlight}</span>
						</h1>
						<p className="section-copy mt-8 max-w-2xl">
							{t.desc}
						</p>
					</div>
				</div>
			</section>

			{/* Timeline / Narrative */}
			<section className="py-12">
				<div className="site-shell">
					<div className="grid gap-12 md:grid-cols-[1fr_2fr]">
						<div>
							<h3 className="font-[var(--font-display)] text-2xl font-bold">{t.narrativeTitle}</h3>
							<p className="mt-4 text-[var(--muted)] leading-relaxed">
								{t.narrativeDesc1}
							</p>
						</div>

						<div className="space-y-12">
							{t.timelineItems.map((item, idx) => (
								<div key={idx}>
									<div className="border-l-2 border-[var(--brand)] pl-6 relative">
										<div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[var(--brand)] border-4 border-[var(--background)]" />
										<span className="text-sm font-bold text-[var(--brand)]">{item.year}</span>
										<h4 className="font-bold text-lg mt-1">{item.title}</h4>
										<p className="mt-2 text-sm text-[var(--muted)]">
											{item.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
