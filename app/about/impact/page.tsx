"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function OurImpactPage() {
	const { language } = useLanguageStore();
	const t = translations[language].innerAboutImpact;

	useEffect(() => {
		document.title = `${t.eyebrow} — Cellar`;
	}, [t.eyebrow]);

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Impact Hero */}
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

			{/* Impact Numbers */}
			<section className="py-12 border-b border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 sm:grid-cols-3 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)]">
						{t.metrics.map((metric, idx) => (
							<div key={idx} className="py-6 sm:py-0 sm:px-8 text-center sm:text-left first:pl-0">
								<h3 className="font-[var(--font-display)] text-5xl font-bold text-[#195A00] tracking-tight">
									{metric.value}
								</h3>
								<p className="mt-3 text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">
									{metric.label}
								</p>
								<p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
									{metric.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pillars of our impact */}
			<section className="py-20 sm:py-28">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-2 items-center">
						<div className="space-y-6">
							<span className="eyebrow text-[#195A00]">{t.eyebrow}</span>
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
								{t.pillarsTitle}
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-lg">
								{t.pillarsDesc}
							</p>
							
							<div className="space-y-6 mt-8">
								{t.pillars.map((pillar, idx) => (
									<div key={idx} className="relative pl-6 border-l-2 border-[#195A00] py-1">
										<h4 className="font-[var(--font-display)] text-lg font-semibold text-[var(--foreground)]">
											{pillar.title}
										</h4>
										<p className="text-sm text-[var(--muted)] leading-relaxed mt-2">
											{pillar.desc}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Collage/Image */}
						<div className="relative">
							{/* Floating organic background shape */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }}
							/>

							{/* Polaroid-like custom paper-board image card */}
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=85"
										alt="Volunteers packing fresh organic food boxes in community kitchen"
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 600px"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}

