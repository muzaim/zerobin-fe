"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sprout, ShieldCheck } from "lucide-react";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function AboutUsPage() {
	const language = useCurrentLanguage();
	const t = translations[language].innerAbout;

	useEffect(() => {
		document.title = `${t.eyebrow} — ZeroBin`;
	}, [t.eyebrow]);

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero Section */}
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">{t.eyebrow}</span>
						<h1 className="display-title mt-6 text-[clamp(2.8rem,8vw,4.5rem)] leading-[1.1]">
							{t.titlePrefix}<span className="text-[#195A00]">{t.titleHighlight}</span>{t.titleSuffix}
						</h1>
						<p className="section-copy mt-8 max-w-2xl">
							{t.desc}
						</p>
					</div>
				</div>
			</section>

			{/* Featured Image Banner */}
			<section className="pb-12 sm:pb-16">
				<div className="site-shell">
					<div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[24px] border border-[var(--line)] shadow-sm bg-[var(--surface-soft)]">
						<Image
							src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=85"
							alt={t.bannerAlt}
							fill
							priority
							className="object-cover"
							sizes="(max-width: 1280px) 100vw, 1280px"
						/>
					</div>
				</div>
			</section>

			{/* Mission and Vision */}
			<section className="py-16 sm:py-24 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 md:grid-cols-2 md:gap-24">
						<div className="space-y-4">
							<span className="eyebrow text-[#195A00]">{t.missionEyebrow}</span>
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)] mt-2">
								{t.missionTitle}
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-[16px] sm:text-[17px] pt-2">
								{t.missionDesc}
							</p>
						</div>

						<div className="space-y-4">
							<span className="eyebrow text-[#195A00]">{t.visionEyebrow}</span>
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)] mt-2">
								{t.visionTitle}
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-[16px] sm:text-[17px] pt-2">
								{t.visionDesc}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="py-16 sm:py-24 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 lg:grid-cols-2 items-center">
						<div className="space-y-6">
							<span className="eyebrow">{t.storyEyebrow}</span>
							<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold">{t.storyTitle}</h2>
							<p className="text-[var(--muted)] leading-relaxed">
								{t.storyDesc1}
							</p>
							<p className="text-[var(--muted)] leading-relaxed">
								{t.storyDesc2}
							</p>
						</div>
						<div className="relative">
							{/* Floating organic background shape */}
							<div
								className="absolute -inset-4 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "40% 60% 50% 50% / 50% 60% 40% 50%" }}
							/>

							{/* Polaroid-like custom paper-board image card */}
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
										alt={t.storyImgAlt}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 600px"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-16 sm:py-24">
				<div className="site-shell">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<span className="eyebrow centered">{t.valuesEyebrow}</span>
						<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mt-4">{t.valuesTitle}</h2>
						<p className="mt-4 text-[var(--muted)]">
							{t.valuesDesc}
						</p>
					</div>

					<div className="grid gap-8 sm:grid-cols-3">
						<div className="flex flex-col items-center text-center p-6">
							<div className="h-16 w-16 rounded-full bg-[var(--surface-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
								<Users size={28} />
							</div>
							<h4 className="font-bold text-lg">{t.value1Title}</h4>
							<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
								{t.value1Desc}
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6">
							<div className="h-16 w-16 rounded-full bg-[var(--surface-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
								<ShieldCheck size={28} />
							</div>
							<h4 className="font-bold text-lg">{t.value2Title}</h4>
							<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
								{t.value2Desc}
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6">
							<div className="h-16 w-16 rounded-full bg-[var(--surface-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
								<Sprout size={28} />
							</div>
							<h4 className="font-bold text-lg">{t.value3Title}</h4>
							<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
								{t.value3Desc}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Simple bottom nav */}
			<section className="py-10 border-t border-[var(--line)]">
				<div className="site-shell flex flex-wrap items-center justify-between gap-4">
					<p className="text-sm text-[var(--muted)]">{t.footerText}</p>
					<div className="flex gap-6">
						<Link href="/how-it-works/donors" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand)] transition">
							{t.footerShare}
						</Link>
						<Link href="/#download" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand)] transition">
							{t.footerApp}
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

