"use client";

import Image from "next/image";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function DownloadApp() {
	const { language } = useLanguageStore();
	const t = translations[language].download;

	const featureCards = [
		{ icon: "📍", title: language === "en" ? "Local map view" : "Peta makanan lokal", desc: language === "en" ? "See food nearby" : "Lihat makanan terdekat" },
		{ icon: "🛡️", title: language === "en" ? "Safety verified" : "Keamanan terverifikasi", desc: language === "en" ? "Community checked" : "Diperiksa komunitas" },
		{ icon: "💬", title: language === "en" ? "Direct chat" : "Obrolan langsung", desc: language === "en" ? "No middleman" : "Tanpa perantara" },
		{ icon: "🌱", title: language === "en" ? "Impact log" : "Log kontribusi", desc: language === "en" ? "Track your sharing" : "Catat aktivitas Anda" },
	];

	return (
		<section id="download" className="section-pad bg-[var(--background)] border-t border-[var(--line)]">
			<div className="site-shell">
				<div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

					{/* LEFT */}
					<div>
						<p className="eyebrow">{t.eyebrow}</p>

						<h2 className="section-title mt-5">
							{t.titlePrefix}{" "}
							<span className="text-[var(--brand)]">{t.titleHighlight}</span>
						</h2>

						<p className="section-copy mt-6 max-w-xl">
							{t.desc}
						</p>

						{/* Steps */}
						<div className="mt-10 border-t border-[var(--line)] pt-8 space-y-0">
							{t.steps.map((s, i) => (
								<div
									key={s.step}
									className={`flex gap-5 py-5 ${i < t.steps.length - 1 ? "border-b border-[var(--line)]" : ""}`}
								>
									<span className="font-mono text-[11px] font-bold tracking-widest text-[var(--brand)] uppercase mt-0.5 shrink-0 w-24">
										{s.step}
									</span>
									<div>
										<h4 className="font-bold text-base text-[var(--foreground)]">
											{s.title}
										</h4>
										<p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
											{s.body}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Store Buttons */}
						<div className="mt-10 flex flex-wrap gap-4 items-center">
							<a href="#">
								<Image
									src="/assets/brand/app-store.svg"
									alt="Download on App Store"
									width={160}
									height={48}
									className="h-12 w-auto"
								/>
							</a>
							<a href="#">
								<Image
									src="/assets/brand/google-play.svg"
									alt="Get it on Google Play"
									width={160}
									height={48}
									className="h-12 w-auto"
								/>
							</a>
						</div>

						<div className="mt-6 flex flex-wrap gap-6 text-xs text-[var(--muted)] font-medium">
							<span>{t.check1}</span>
							<span>{t.check2}</span>
							<span>{t.check3}</span>
						</div>
					</div>

					{/* RIGHT — App Screenshot + Feature Cards */}
					<div className="relative mx-auto w-full max-w-[440px] flex flex-col items-center">

						{/* Soft blob */}
						<div className="absolute right-0 top-10 w-72 h-72 bg-green-100 rounded-full -z-10 opacity-50 blur-2xl pointer-events-none" />

						{/* App screenshot — no phone frame */}
						<div className="relative w-[260px] sm:w-[310px] lg:w-[340px] z-10">
							<Image
								src="/assets/app/cellar-screen.png"
								alt="Cellar App Interface"
								width={600}
								height={1220}
								priority
								className="w-full h-auto"
							/>

							{/* Feature card — top left, outside phone */}
							<div className="absolute -left-[110px] top-[60px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">{featureCards[0].icon}</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">{featureCards[0].title}</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">{featureCards[0].desc}</p>
							</div>

							{/* Feature card — top right, outside phone */}
							<div className="absolute -right-[110px] top-[60px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">{featureCards[1].icon}</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">{featureCards[1].title}</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">{featureCards[1].desc}</p>
							</div>

							{/* Feature card — bottom left */}
							<div className="absolute -left-[110px] bottom-[100px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">{featureCards[2].icon}</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">{featureCards[2].title}</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">{featureCards[2].desc}</p>
							</div>

							{/* Feature card — bottom right */}
							<div className="absolute -right-[110px] bottom-[100px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">{featureCards[3].icon}</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">{featureCards[3].title}</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">{featureCards[3].desc}</p>
							</div>

							{/* Active listing badge — floats above phone */}
							<div className="absolute -right-[80px] sm:-right-[90px] top-[200px] z-20 flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 py-2.5 rounded-2xl border border-[var(--line)] shadow-[0_10px_25px_rgba(31,36,22,0.08)] hidden sm:flex">
								<span className="h-2 w-2 rounded-full bg-[var(--brand)] animate-pulse shrink-0" />
								<div>
									<p className="text-[10px] font-bold text-[var(--brand)] font-mono uppercase tracking-wider">{language === "en" ? "New listing" : "Kiriman baru"}</p>
									<p className="text-[11px] font-bold text-[var(--foreground)]">{language === "en" ? "250m away" : "250m dari sini"}</p>
								</div>
							</div>
						</div>

						{/* Mobile feature grid — shown only on small screens */}
						<div className="mt-10 grid grid-cols-2 gap-3 w-full sm:hidden">
							{featureCards.map((f) => (
								<div key={f.title} className="bg-white border border-[var(--line)] rounded-2xl p-3 shadow-sm">
									<span className="text-xl">{f.icon}</span>
									<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)]">{f.title}</p>
									<p className="mt-0.5 text-[10px] text-[var(--muted)]">{f.desc}</p>
								</div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

