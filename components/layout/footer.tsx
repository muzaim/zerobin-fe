"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function Footer() {
	const language = useCurrentLanguage();
	const t = translations[language].footer;
	const n = translations[language].navbar;

	const platformLinks = [
		{ label: n.aboutUs, href: "/about" },
		{ label: n.howItWorks, href: "/how-it-works/donors" },
		{ label: n.communityGuidelines, href: "/how-it-works/guidelines" },
		{ label: n.ourImpact, href: "/impact/statistics" },
	];

	const resourceLinks = [
		{ label: n.faq, href: "/faq" },
		{ label: n.contactSupport, href: "/contact" },
		{ label: n.successStories, href: "/impact/stories" },
		{ label: n.sustainabilityGoals, href: "/impact/goals" },
	];

	return (
		<footer className="bg-[var(--brand-dark)] text-white">

			{/* Big tagline block — same spirit as story.tsx */}
			<div className="site-shell pt-20 sm:pt-24">
				<div className="border-b border-white/10 pb-14 sm:pb-20">
					<p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--brand-soft)] mb-5">
						{t.tagline}
					</p>
					<h2 className="font-[var(--font-display)] text-[clamp(2.4rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight text-white max-w-4xl">
						{t.headlinePrefix}
						<span className="text-[var(--brand-soft)] italic">{t.headlineItalic}</span>
					</h2>
					<p className="mt-6 max-w-xl text-white/60 leading-7 text-base sm:text-lg">
						{t.desc}
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<Link
							href="/#download"
							className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[var(--brand-dark)] transition duration-200"
						>
							{n.downloadApp}
							<ArrowRight size={15} />
						</Link>
						<Link
							href="/how-it-works/donors"
							className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition duration-200 hover:text-white hover:border-white/40"
						>
							{n.howItWorks}
						</Link>
					</div>
				</div>
			</div>

			{/* Main link columns */}
			<div className="site-shell py-14 sm:py-16">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">

					{/* Brand column */}
					<div>
						<Link href="/" className="inline-flex items-center group">
							<span className="font-[var(--font-display)] text-[1.5rem] font-bold italic tracking-tight text-white">
								ZeroBin
							</span>
						</Link>
						<p className="mt-5 text-sm leading-7 text-white/52 max-w-[230px]">
							{t.brandDesc}
						</p>
						<div className="mt-7 flex gap-5 text-sm font-semibold text-white/45">
							<a href="#" className="hover:text-white transition duration-200">Instagram</a>
							<a href="#" className="hover:text-white transition duration-200">LinkedIn</a>
							<a href="#" className="hover:text-white transition duration-200">GitHub</a>
						</div>
					</div>

					{/* Platform links */}
					<div>
						<p className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--brand-soft)] mb-5">
							{t.about}
						</p>
						<div className="grid gap-3.5">
							{platformLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-white/55 hover:text-white transition duration-200"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					{/* Resource links */}
					<div>
						<p className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--brand-soft)] mb-5">
							{t.howItWorks}
						</p>
						<div className="grid gap-3.5">
							{resourceLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-white/55 hover:text-white transition duration-200"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					{/* Newsletter */}
					<div>
						<p className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--brand-soft)] mb-5">
							{t.stayUpdated}
						</p>
						<p className="text-sm leading-7 text-white/52 mb-5">
							{t.newsletterDesc}
						</p>
						<form className="flex overflow-hidden rounded-xl border border-white/12 bg-white/6">
							<input
								type="email"
								placeholder={t.emailPlaceholder}
								aria-label="Email address"
								className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 animate-none"
							/>
							<button
								type="submit"
								aria-label="Subscribe"
								className="flex w-12 shrink-0 items-center justify-center bg-white text-[var(--brand-dark)] transition duration-200 cursor-pointer"
							>
								<ArrowRight size={16} />
							</button>
						</form>
						<p className="mt-3 text-[11px] text-white/30">
							{t.noSpam}
						</p>
					</div>

				</div>
			</div>

			{/* Bottom bar */}
			<div className="site-shell border-t border-white/8 py-6">
				<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/30 font-medium">
					<p>{t.rightsText}</p>
					<p className="font-mono tracking-wider">{n.communityGuidelines}</p>
				</div>
			</div>

		</footer>
	);
}
