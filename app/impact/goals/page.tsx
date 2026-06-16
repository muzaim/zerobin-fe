"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function SustainabilityGoals() {
	const { language } = useLanguageStore();
	const t = translations[language].innerImpact.goals;

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

			{/* Sticky Sidebar & Text Cards Layout */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
						{/* Sticky Left Sidebar */}
						<div className="lg:sticky lg:top-36 h-fit space-y-6">
							<span className="eyebrow text-[#195A00]">
								{language === "en" ? "Our Commitment" : "Komitmen Kami"}
							</span>
							<h3 className="font-[var(--font-display)] text-3xl font-bold text-[var(--foreground)] tracking-tight">
								{language === "en" ? "Real milestones for local communities" : "Langkah nyata untuk komunitas lokal"}
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-base">
								{language === "en"
									? "ZeroBin targets concrete local changes. Rather than purchasing carbon credits or publishing corporate compliance spreadsheets, we invest our efforts directly in preventing local waste, building neighborhood trust, and supporting families."
									: "ZeroBin menyasar perubahan lokal yang konkret. Alih-alih membeli sertifikat karbon atau menerbitkan laporan kepatuhan korporat, kami mencurahkan tenaga kami langsung untuk mencegah sampah makanan lokal, membangun rasa saling percaya antar tetangga, dan membantu sesama."
								}
							</p>
						</div>

						{/* Stack of Commitments (Right Column) */}
						<div className="divide-y divide-[var(--line)]">
							{t.goals.map((goal, idx) => (
								<div key={idx} className={`${idx > 0 ? "py-10" : "pb-10"} space-y-3`}>
									<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
										{language === "en" ? `Goal 0${idx + 1}` : `Target 0${idx + 1}`}
									</span>
									<h4 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)] mt-2">
										{goal.title}
									</h4>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{goal.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* How we measure progress */}
			<section className="py-16 sm:py-20 bg-[var(--surface-soft)]/40 border-y border-[var(--line)] mt-12">
				<div className="site-shell">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
							{language === "en" ? "How we measure progress" : "Bagaimana kami mengukur kemajuan"}
						</h3>
						<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
							{language === "en"
								? "We don't count success in terms of arbitrary 'credits' or corporate reports. We measure it by checking how active our neighborhood hubs are, how many requests are successfully completed, and how much food gets saved. Simple, real-world metrics that actually translate to healthier neighborhoods."
								: "Kami tidak mengukur kesuksesan lewat sertifikat buatan atau laporan korporat. Kami mengukurnya dengan melihat seberapa aktif hub lingkungan kami, berapa banyak serah-terima makanan yang berhasil diselesaikan, dan seberapa banyak makanan yang terselamatkan. Indikator nyata di dunia nyata yang benar-benar membawa manfaat langsung bagi warga sekitar."
							}
						</p>
						<Link href="/impact/statistics" className="primary-button justify-center gap-2 text-sm py-2 px-5 inline-flex">
							{language === "en" ? "See our latest statistics" : "Lihat statistik terbaru kami"} <ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}

