"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, PackageCheck } from "lucide-react";
import { useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function Hero() {
	const language = useCurrentLanguage();
	const t = translations[language].hero;

	const stats = [
		{ value: "10K+", label: t.statsShared },
		{ value: "5K+", label: t.statsReached },
		{ value: "25T", label: t.statsSaved },
	];

	return (
		<section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center pt-28 pb-16">
			{/* Subtle Background Watermark Image */}
			<div className="absolute inset-0 -z-20 select-none pointer-events-none">
				<Image
					src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1600&q=80"
					alt="ZeroBin community food sharing background"
					fill
					priority
					className="object-cover opacity-[0.16] mix-blend-multiply"
				/>
				{/* Soft radial overlay fading out to background color */}
				<div className="absolute inset-0 bg-radial from-transparent via-[var(--background)]/40 to-[var(--background)]" />
			</div>

			{/* Soft organic green background blob behind centered text */}
			<div 
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-[var(--brand-soft)]/35 rounded-full blur-[90px] -z-10 opacity-80 select-none pointer-events-none animate-morph-blob" 
			/>

			<div className="site-shell relative z-10 w-full">
				<div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
					
					{/* Main Text Content */}
					<h1 className="display-title text-[clamp(2.5rem,8vw,5rem)] leading-[1.06] max-w-3xl opacity-0 animate-fade-in-up">
						{t.titlePrefix}{" "}
						<span className="text-[#195A00] block sm:inline">{t.titleHighlight}</span>
					</h1>

					<p className="section-copy mt-8 max-w-2xl text-center leading-relaxed opacity-0 animate-fade-in-up delay-100">
						{t.desc}
					</p>

					{/* CTA Buttons */}
					<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto opacity-0 animate-fade-in-up delay-200">
						<Link
							href="/#download"
							className="primary-button gap-2 px-8 py-4 text-base"
						>
							<PackageCheck size={18} />
							{t.btnShare}
						</Link>
						<Link
							href="/#how-it-works"
							className="secondary-button gap-2 px-8 py-4 text-base"
						>
							<ArrowDown size={18} />
							{t.btnHow}
						</Link>
					</div>

					{/* Centered Stats Grid */}
					<div className="mt-16 w-full max-w-2xl border-t border-[var(--line)]/70 pt-8 grid grid-cols-3 gap-4 text-center opacity-0 animate-fade-in-up delay-300">
						{stats.map((stat) => (
							<div key={stat.label} className="space-y-1">
								<p className="font-[var(--font-display)] text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">
									{stat.value}
								</p>
								<p className="text-xs sm:text-sm text-[var(--muted)] font-medium">
									{stat.label}
								</p>
							</div>
						))}
					</div>

				</div>

			</div>
		</section>
	);
}
