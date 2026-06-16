"use client";

import { useEffect } from "react";
import Image from "next/image";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function HowItWorksRecipients() {
	const language = useCurrentLanguage();
	const t = translations[language].innerHowItWorks.recipients;

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
								style={{ borderRadius: "50% 50% 30% 70% / 60% 40% 60% 40%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&h=800&q=80"
										alt="Fresh artisan sourdough bread ready to be shared"
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
								{language === "en" ? "Important safety & sharing checks" : "Pemeriksaan penting tentang keamanan & berbagi"}
							</h3>
						</div>
						
						<div className="divide-y divide-[var(--line)]">
							<div>
								<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
									<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
										{language === "en" ? "Is the food safe to eat?" : "Apakah makanannya aman dikonsumsi?"}
									</h4>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en"
											? "Yes, but use your judgment. Donors list when the food was prepared or expiry dates. Always look, smell, and inspect the food before eating. If something doesn't feel right, do not consume it."
											: "Ya, tetapi gunakan penilaian Anda sendiri. Donor mencantumkan kapan makanan tersebut disiapkan atau tanggal kedaluwarsanya. Selalu lihat, cium aromanya, dan periksa makanan sebelum dimakan. Jika ada sesuatu yang tidak biasa, jangan dikonsumsi."
										}
									</p>
								</div>
							</div>

							<div>
								<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
									<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
										{language === "en" ? "Can I pay or tip the donor?" : "Apakah saya boleh membayar atau memberi tip kepada donor?"}
									</h4>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en"
											? "No. Everything shared on ZeroBin is 100% free. Offering money or trading items is not allowed. A warm thank-you message is the only currency we support here."
											: "Tidak boleh. Semua yang dibagikan di ZeroBin 100% gratis. Menawarkan uang atau menukarkan barang tidak diperbolehkan. Pesan terima kasih yang tulus adalah satu-satunya 'mata uang' yang kami dukung di sini."
										}
									</p>
								</div>
							</div>

							<div>
								<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
									<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
										{language === "en" ? "What if I can't show up?" : "Bagaimana jika saya tidak bisa datang?"}
									</h4>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en"
											? "Message the donor immediately to cancel or reschedule. Neighbors set aside time to hand over food, so letting them know early is a basic matter of respect."
											: "Kirim pesan kepada donor segera untuk membatalkan atau menjadwal ulang. Tetangga meluangkan waktu mereka untuk menyerahkan makanan, jadi memberi tahu mereka lebih awal adalah bentuk saling menghormati."
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
