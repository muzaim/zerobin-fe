"use client";

import { useEffect } from "react";
import { useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";
import Link from "next/link";

export default function SafetyPage() {
	const language = useCurrentLanguage();
	const t = translations[language].safety;

	useEffect(() => {
		document.title = `${t.eyebrow} — ZeroBin`;
	}, [t.eyebrow]);

	// Guidelines Lists for visual highlights
	const lists = {
		en: {
			donors: {
				safe: [
					"Whole fresh fruits & vegetables",
					"Freshly baked bread & pastries",
					"Dry, shelf-stable canned foods",
					"Fresh meals with complete ingredient lists"
				],
				prohibited: [
					"Expired or souring items",
					"Raw meat, seafood, or raw eggs",
					"Unpasteurized milk or dairy products",
					"Home-canned or preserved items"
				]
			},
			recipients: [
				"Inspect containers & seal freshness before opening",
				"Smell and visual checks for mold or off-odors",
				"Wash all fresh produce thoroughly before eating",
				"Store hot or cold meals in refrigerator immediately"
			]
		},
		id: {
			donors: {
				safe: [
					"Sayur & buah utuh segar",
					"Roti & kue buatan baru",
					"Bahan makanan kering kemasan",
					"Masakan segar dengan info bahan lengkap"
				],
				prohibited: [
					"Makanan kedaluwarsa atau basi",
					"Daging, seafood, atau telur mentah",
					"Susu non-pasteurisasi atau olahannya",
					"Makanan kaleng buatan sendiri"
				]
			},
			recipients: [
				"Periksa kebersihan & segel wadah sebelum dibuka",
				"Cium aroma dan periksa visual jamur/bau asam",
				"Cuci bersih semua sayur & buah sebelum dimakan",
				"Segera konsumsi atau simpan di lemari es"
			]
		}
	};

	const currentLists = lists[language];

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-24">
			{/* Hero Section */}
			<section className="py-16 sm:py-24">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">{t.eyebrow}</span>
						<h1 className="display-title mt-6 text-[clamp(2.8rem,7.5vw,4.5rem)] leading-[1.08]">
							{t.titlePrefix}<span className="text-[#195A00]">{t.titleHighlight}</span>
						</h1>
						<p className="section-copy mt-8 max-w-2xl text-[var(--muted)] leading-relaxed">
							{t.desc}
						</p>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
						
						{/* Left Column: Quick Anchor Links */}
						<div className="relative">
							<div className="lg:sticky lg:top-36 space-y-10">
								<nav className="hidden lg:flex flex-col gap-6">
									<a href="#donors" className="group flex items-center gap-4 text-[13px] font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--brand)] transition-colors">
										<span className="font-[var(--font-display)] text-lg italic text-[var(--brand)] opacity-60">01.</span>
										<span>{t.sections[0].title.split(":")[0]}</span>
									</a>
									<div className="h-[1px] w-8 bg-[var(--line)]" />
									<a href="#recipients" className="group flex items-center gap-4 text-[13px] font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--brand)] transition-colors">
										<span className="font-[var(--font-display)] text-lg italic text-[var(--brand)] opacity-60">02.</span>
										<span>{t.sections[1].title.split(":")[0]}</span>
									</a>
									<div className="h-[1px] w-8 bg-[var(--line)]" />
									<a href="#disclaimer" className="group flex items-center gap-4 text-[13px] font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--clay)] transition-colors">
										<span className="font-[var(--font-display)] text-lg italic text-[var(--clay)] opacity-60">03.</span>
										<span>{language === "en" ? "Disclaimer" : "Ketentuan"}</span>
									</a>
								</nav>

								<div className="pt-4 text-xs text-[var(--muted)] leading-relaxed space-y-2 max-w-[200px]">
									<p className="font-semibold text-[var(--foreground)]">
										{language === "en" ? "Need Support?" : "Butuh Bantuan?"}
									</p>
									<p>
										{language === "en" 
											? "Our community team is here to help maintain neighborhood trust."
											: "Tim komunitas kami siap membantu menjaga rasa percaya warga."}
									</p>
									<Link href="/contact" className="inline-block font-bold text-[var(--brand)] hover:underline pt-1">
										{language === "en" ? "Contact Support" : "Hubungi Kami"} &rarr;
									</Link>
								</div>
							</div>
						</div>

						{/* Right Column: Clean Editorial Content (No Cards) */}
						<div className="space-y-24 max-w-3xl">
							
							{/* Section 01: Donors */}
							<div id="donors" className="scroll-mt-36 space-y-8">
								<div className="space-y-4">
									<div className="font-[var(--font-display)] text-sm italic text-[var(--brand)]">
										01. {language === "en" ? "Donor Guidelines" : "Pedoman Pendonor"}
									</div>
									<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
										{t.sections[0].title}
									</h2>
									<p className="text-base text-[var(--muted)] leading-relaxed">
										{t.sections[0].desc}
									</p>
								</div>

								{/* Side-by-Side Lists (Completely flat text, no cards) */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
									{/* Safe Food List */}
									<div className="space-y-4">
										<h4 className="text-[13px] font-bold uppercase tracking-wider text-[var(--brand)]">
											{language === "en" ? "Recommended to Share" : "Disarankan Dibagi"}
										</h4>
										<ul className="space-y-3 text-sm text-[var(--muted)]">
											{currentLists.donors.safe.map((item, i) => (
												<li key={i} className="flex gap-3 items-start">
													<span className="text-[var(--brand)] select-none mt-0.5">•</span>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>

									{/* Prohibited Food List */}
									<div className="space-y-4">
										<h4 className="text-[13px] font-bold uppercase tracking-wider text-[var(--clay)]">
											{language === "en" ? "Strictly Prohibited" : "Dilarang Keras"}
										</h4>
										<ul className="space-y-3 text-sm text-[var(--muted)]">
											{currentLists.donors.prohibited.map((item, i) => (
												<li key={i} className="flex gap-3 items-start">
													<span className="text-[var(--clay)] select-none mt-0.5">•</span>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							{/* Section 02: Recipients */}
							<div id="recipients" className="scroll-mt-36 space-y-8 pt-16 border-t border-[var(--line)]">
								<div className="space-y-4">
									<div className="font-[var(--font-display)] text-sm italic text-[var(--brand)]">
										02. {language === "en" ? "Recipient Guidelines" : "Pedoman Penerima"}
									</div>
									<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
										{t.sections[1].title}
									</h2>
									<p className="text-base text-[var(--muted)] leading-relaxed">
										{t.sections[1].desc}
									</p>
								</div>

								{/* Flat Check List */}
								<div className="space-y-4 pt-2">
									<h4 className="text-[13px] font-bold uppercase tracking-wider text-[var(--foreground)]">
										{language === "en" ? "Recipient Safety Checklist" : "Daftar Periksa Penerima"}
									</h4>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-[var(--muted)]">
										{currentLists.recipients.map((item, i) => (
											<div key={i} className="flex gap-3 items-start py-1">
												<span className="text-[var(--brand)] font-bold select-none">•</span>
												<span>{item}</span>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Section 03: Disclaimer */}
							<div id="disclaimer" className="scroll-mt-36 space-y-8 pt-16 border-t border-[var(--line)]">
								<div className="space-y-4">
									<div className="font-[var(--font-display)] text-sm italic text-[var(--clay)]">
										03. {language === "en" ? "Liability Disclaimer" : "Pernyataan Batas Tanggung Jawab"}
									</div>
									<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
										{t.sections[2].title}
									</h2>
								</div>

								{/* Premium Blockquote Layout (No box cards, purely typographical) */}
								<div className="border-l-2 border-[var(--clay)] pl-6 sm:pl-8 space-y-6">
									<p className="text-base sm:text-lg italic text-[var(--foreground)] leading-relaxed font-serif">
										&ldquo;{t.sections[2].desc}&rdquo;
									</p>
									<p className="text-xs text-[var(--muted)] leading-relaxed">
										{language === "en"
											? "* Participation in ZeroBin is voluntary and based entirely on direct neighborhood exchange. ZeroBin does not inspect, prepare, or handle any listings."
											: "* Partisipasi dalam ZeroBin bersifat sukarela dan didasarkan sepenuhnya pada pertukaran langsung antar warga. ZeroBin tidak memeriksa, menyiapkan, atau menangani daftar makanan."}
									</p>
								</div>

								<div className="pt-4 text-xs text-[var(--muted)] uppercase tracking-wider font-semibold">
									{language === "en" 
										? "ZeroBin Trust Agreement — signed by community consent" 
										: "Persetujuan Kepercayaan ZeroBin — disepakati oleh warga"}
								</div>
							</div>

						</div>

					</div>
				</div>
			</section>
		</div>
	);
}
