"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function FoodWasteFacts() {
	const language = useCurrentLanguage();
	const t = translations[language].innerImpact.statistics;

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

			{/* Image-Left, Stats-Right Section */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 items-center">
						
						{/* Polaroid Image Container (Left Column) */}
						<div className="relative order-last lg:order-first pt-8 sm:pt-12 lg:pt-0">
							{/* Organic BG Blob */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&h=800&q=80"
										alt="Green sprouts growing out of healthy organic soil"
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 500px"
									/>
								</div>
							</div>
						</div>

						{/* Stats Content (Right Column) */}
						<div className="space-y-10">
							<div className="space-y-2">
								<h3 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
									{t.factsTitle}
								</h3>
								<p className="text-[var(--muted)] leading-relaxed">
									{t.factsDesc}
								</p>
							</div>

							{t.facts.map((fact, idx) => {
								const value = idx === 0 ? "1/3" : idx === 1 ? "70%" : "8%";
								const color = idx === 0 ? "text-[var(--clay)]" : idx === 1 ? "text-[#195A00]" : "text-[var(--gold)]";
								return (
									<div key={idx} className="space-y-4 pt-6 border-t border-[var(--line)]">
										<div className="flex items-baseline gap-3">
											<span className={`text-5xl font-bold font-[var(--font-display)] ${color}`}>
												{value}
											</span>
											<span className="text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">
												{fact.title}
											</span>
										</div>
										<p className="text-sm text-[var(--muted)] leading-relaxed">
											{fact.desc}
										</p>
									</div>
								);
							})}
						</div>

					</div>
				</div>
			</section>

			{/* Reality Check Text block */}
			<section className="py-16 sm:py-20 bg-[var(--surface-soft)]/40 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
							{language === "en" ? "Why local sharing matters" : "Mengapa berbagi lokal itu penting"}
						</h3>
						<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
							{language === "en"
								? "Composting is great, but feeding hungry people is far better. When food decomposes in a landfill, it releases methane—a gas far more damaging than carbon dioxide. By passing surplus food to a neighbor blocks away, you bypass the waste system entirely and strengthen your local community."
								: "Kompos memang baik, tetapi membagikannya untuk dikonsumsi sesama jauh lebih baik. Ketika makanan membusuk di tempat pembuangan sampah, tindakan itu melepaskan metana—gas yang jauh lebih berbahaya daripada karbon dioksida. Dengan membagikan kelebihan makanan kepada tetangga beberapa blok dari rumah Anda, Anda menghindari sistem pembuangan sampah sepenuhnya sekaligus mempererat hubungan di komunitas Anda."
							}
						</p>
						<Link href="/how-it-works/donors" className="primary-button justify-center gap-2 text-sm py-2 px-5 inline-flex">
							{language === "en" ? "See how to share" : "Lihat cara berbagi"} <ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}
