"use client";

import { useEffect } from "react";
import Image from "next/image";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function CommunityGuidelines() {
	const language = useCurrentLanguage();
	const t = translations[language].innerHowItWorks.guidelines;

	useEffect(() => {
		document.title = `${t.eyebrow} — ZeroBin`;
	}, [t.eyebrow]);

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">{t.eyebrow}</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							{t.titlePrefix}<span className="text-[#195A00]">{t.titleHighlight}</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							{t.desc}
						</p>
					</div>
				</div>
			</section>

			{/* Guidelines Section */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 items-center">
						
						{/* Polaroid Image Container (Left Column) */}
						<div className="relative order-last lg:order-first pt-8 sm:pt-12 lg:pt-0">
							{/* Organic BG Blob */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "50% 50% 30% 70% / 60% 40% 60% 40%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&h=800&q=80"
										alt={t.photoAlt}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 500px"
									/>
								</div>
							</div>
						</div>

						{/* Narrative Content (Right Column) */}
						<div className="space-y-8">
							<div className="space-y-3">
								<h3 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
									{t.guideTitle}
								</h3>
								<p className="text-[var(--muted)] leading-relaxed text-base">
									{t.guideDesc}
								</p>
							</div>

							{t.items.map((item, idx) => (
								<div key={idx} className="space-y-3 pt-6 border-t border-[var(--line)]">
									<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
										{item.title}
									</h4>
									<p className="text-sm text-[var(--muted)] leading-relaxed">
										{item.desc}
									</p>
								</div>
							))}
						</div>

					</div>
				</div>
			</section>

		</div>
	);
}

