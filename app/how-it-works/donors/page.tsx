"use client";

import { useEffect } from "react";
import Image from "next/image";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function HowItWorksDonors() {
	const language = useCurrentLanguage();
	const t = translations[language].innerHowItWorks.donors;

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

			{/* Three Simple Steps & Image */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 items-center">
						<div className="space-y-12">
							{t.steps.map((step, idx) => (
								<div key={idx}>
									<div className="space-y-3">
										<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
											{language === "en" ? `Step ${step.num}` : `Langkah ${step.num}`}
										</span>
										<h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
											{step.title}
										</h3>
										<p className="text-[var(--muted)] leading-relaxed max-w-lg">
											{step.desc}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Polaroid Image Container */}
						<div className="relative pt-8 sm:pt-12 lg:pt-0">
							{/* Organic BG Blob */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&h=800&q=80"
										alt="Person packing homemade food to share with neighbors"
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 500px"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Reality Checks (FAQ Grid) */}
			<section className="py-20 border-t border-[var(--line)] bg-[var(--surface-soft)]/20">
				<div className="site-shell">
					<div className="max-w-4xl mx-auto">
						<div>
							<h3 className="font-[var(--font-display)] text-3xl font-bold mb-12 text-center">
								{language === "en" ? "The details you actually want to know" : "Detail yang ingin Anda ketahui"}
							</h3>
						</div>
						
						<div className="divide-y divide-[var(--line)]">
							<div>
								<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
									<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
										{language === "en" ? "What can I actually list?" : "Apa saja yang bisa saya bagikan?"}
									</h4>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en"
											? "Apples from your garden, extra catering portions, unopened pantry items, or day-old bread from your cafe. The gold standard rule: If you wouldn’t feed it to your close friends, don’t share it on the app."
											: "Apel dari kebun Anda, kelebihan porsi katering, bahan makanan mentah yang belum dibuka, atau roti sisa hari ini dari kafe Anda. Aturan emasnya: Jika Anda tidak akan menyajikannya kepada teman dekat Anda, jangan bagikan di aplikasi."
										}
									</p>
								</div>
							</div>

							<div>
								<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
									<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
										{language === "en" ? "Do I have to meet people at my door?" : "Apakah saya harus menemui penerima di depan pintu?"}
									</h4>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en"
											? "Not at all. Many donors prefer leaving a bag on their porch, hanging it on the gate, or meeting at a nearby public spot like a park bench or building lobby. Pick whatever makes you comfortable."
											: "Sama sekali tidak. Banyak donor memilih meninggalkan tas di teras, menggantungnya di pagar, atau bertemu di tempat umum terdekat seperti bangku taman atau lobi gedung. Pilih cara apa pun yang membuat Anda merasa nyaman."
										}
									</p>
								</div>
							</div>

							<div>
								<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
									<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
										{language === "en" ? "Is there any fee?" : "Apakah ada biaya?"}
									</h4>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en"
											? "No. ZeroBin is completely free. It is built as a community utility, not a business. No ads, no hidden costs."
											: "Tidak ada. ZeroBin sepenuhnya gratis. Aplikasi ini dibangun sebagai sarana sosial komunitas, bukan bisnis komersial. Tanpa iklan, tanpa biaya tersembunyi."
										}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
