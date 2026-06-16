"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StoriesSlider from "@/components/sections/stories-slider";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function SuccessStories() {
	const language = useCurrentLanguage();
	const t = translations[language].innerImpact.stories;

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

			{/* Stories Layout */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="max-w-4xl mx-auto space-y-12">
						
						{/* Title Block */}
						<div className="text-center max-w-2xl mx-auto space-y-3">
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
								{t.storiesTitle}
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base">
								{t.storiesDesc}
							</p>
						</div>

						{/* Success Stories Slider */}
						<div className="pt-2">
							<StoriesSlider />
						</div>

					</div>
				</div>
			</section>

			{/* Deeper dive text block */}
			<section className="py-16 sm:py-20 bg-[var(--surface-soft)]/40 border-y border-[var(--line)] mt-12">
				<div className="site-shell">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
							{language === "en" ? "It starts with a simple post" : "Semua dimulai dari kiriman sederhana"}
						</h3>
						<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
							{language === "en"
								? "Every single story on ZeroBin starts exactly the same way: someone has a bit of extra food, spends 30 seconds taking a photo, and posts it. You don't need to coordinate large-scale donation programs or fill out stacks of paperwork. Just share what you can, when you can."
								: "Setiap cerita di ZeroBin selalu dimulai dari hal yang sama: seseorang yang kelebihan makanan meluangkan 30 detik untuk memotretnya dan mengunggahnya. Anda tidak perlu mengoordinasikan program donasi besar atau mengisi bertumpuk dokumen. Cukup bagikan apa yang Anda miliki, kapan saja Anda bisa."
							}
						</p>
						<Link href="/how-it-works/donors" className="primary-button justify-center gap-2 text-sm py-2 px-5 inline-flex">
							{language === "en" ? "How to share your surplus" : "Cara membagikan makanan surplus Anda"} <ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}

