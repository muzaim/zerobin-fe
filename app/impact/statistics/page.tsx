"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
	ArrowRight, 
	Wheat, 
	ChefHat, 
	Apple, 
	UtensilsCrossed, 
	Beef, 
	Milk as MilkIcon, 
	Plus, 
	Minus 
} from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

// Smooth animated counter component
function AnimatedCounter({ value, decimals = 0 }: { value: number; decimals?: number }) {
	const [displayValue, setDisplayValue] = useState(value);

	useEffect(() => {
		let start = displayValue;
		const end = value;
		if (start === end) return;

		const duration = 600; // ms
		const startTime = performance.now();
		let animationFrameId: number;

		const updateCounter = (now: number) => {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			
			// Ease out quad curve
			const easeProgress = progress * (2 - progress);
			const current = start + (end - start) * easeProgress;
			
			setDisplayValue(current);

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(updateCounter);
			}
		};

		animationFrameId = requestAnimationFrame(updateCounter);
		return () => cancelAnimationFrame(animationFrameId);
	}, [value, displayValue]);

	return (
		<span>
			{decimals > 0 
				? displayValue.toFixed(decimals) 
				: Math.round(displayValue).toLocaleString()
			}
		</span>
	);
}

export default function FoodWasteFacts() {
	const { language } = useLanguageStore();
	const t = translations[language].innerImpact.statistics;
	const tCalc = translations[language].calculator;

	// Food Waste Counters
	const [bread, setBread] = useState(0);
	const [rice, setRice] = useState(0);
	const [fruits, setFruits] = useState(0);
	const [veggies, setVeggies] = useState(0);
	const [meat, setMeat] = useState(0);
	const [milk, setMilk] = useState(0);

	useEffect(() => {
		document.title = `${t.eyebrow} — Cellar`;
	}, [t.eyebrow]);

	// Computations
	// Bread slice: 80L water, 0.1kg CO2e, 0.3 MJ energy
	// Rice portion: 200L water, 0.4kg CO2e, 0.8 MJ energy
	// Fruit: 70L water, 0.05kg CO2e, 0.15 MJ energy
	// Veggies portion: 40L water, 0.08kg CO2e, 0.12 MJ energy
	// Meat portion: 1000L water, 1.5kg CO2e, 3.0 MJ energy
	// Milk glass: 200L water, 0.3kg CO2e, 0.6 MJ energy
	const totalWater = bread * 80 + rice * 200 + fruits * 70 + veggies * 40 + meat * 1000 + milk * 200;
	const totalCO2 = bread * 0.1 + rice * 0.4 + fruits * 0.05 + veggies * 0.08 + meat * 1.5 + milk * 0.3;
	const totalEnergy = bread * 0.3 + rice * 0.8 + fruits * 0.15 + veggies * 0.12 + meat * 3.0 + milk * 0.6; // in MJ

	// Equivalencies
	// Shower: 15 Liters/min
	const showerMins = Math.round(totalWater / 15);
	// Drive: 0.12 kg CO2 per km
	const driveKm = Number((totalCO2 / 0.12).toFixed(1));
	// 10W LED Light Bulb: 0.036 MJ per hour
	const lightHours = Math.round(totalEnergy / 0.036);

	const resetCalculator = () => {
		setBread(0);
		setRice(0);
		setFruits(0);
		setVeggies(0);
		setMeat(0);
		setMilk(0);
	};

	const renderEquivalentText = (template: string, value: number, isDecimals = false) => {
		const parts = template.split("{val}");
		return (
			<p className="text-sm text-[var(--muted)] leading-relaxed">
				{parts[0]}
				<strong className="text-[var(--brand)] font-[var(--font-display)] text-[16px] font-bold mx-1">
					<AnimatedCounter value={value} decimals={isDecimals ? 1 : 0} />
				</strong>
				{parts[1]}
			</p>
		);
	};

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

			{/* Interactive Footprint Calculator Section */}
			<section className="py-16 sm:py-24 border-t border-[var(--line)] bg-[var(--surface)] relative z-10">
				<div className="site-shell">
					
					{/* Header */}
					<div className="max-w-2xl mx-auto text-center mb-16">
						<span className="eyebrow centered">{language === "en" ? "Personal Impact" : "Dampak Pribadi"}</span>
						<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mt-4 mb-3 text-[var(--foreground)]">
							{tCalc.title}
						</h2>
						<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-xl mx-auto">
							{tCalc.desc}
						</p>
					</div>

					<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
						{/* Input Counters (Left Column) */}
						<div className="space-y-6">
							<p className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-wider font-mono pb-2 border-b border-[var(--line)]">
								{tCalc.introText}
							</p>

							<div className="space-y-1">
								{/* Bread */}
								<div className="flex items-center justify-between py-4 border-b border-[var(--line)]">
									<div className="flex items-center gap-3">
										<span className="text-[var(--brand)] shrink-0"><Wheat size={20} /></span>
										<div>
											<span className="text-[10px] text-[var(--muted)] uppercase font-mono tracking-wider">{tCalc.pieceUnit}</span>
											<p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{tCalc.bread}</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<button
											onClick={() => setBread((prev) => Math.max(0, prev - 1))}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Minus size={12} />
										</button>
										<span className="font-[var(--font-display)] font-bold text-sm w-6 text-center text-[var(--foreground)]">{bread}</span>
										<button
											onClick={() => setBread((prev) => prev + 1)}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Plus size={12} />
										</button>
									</div>
								</div>

								{/* Rice */}
								<div className="flex items-center justify-between py-4 border-b border-[var(--line)]">
									<div className="flex items-center gap-3">
										<span className="text-[var(--brand)] shrink-0"><ChefHat size={20} /></span>
										<div>
											<span className="text-[10px] text-[var(--muted)] uppercase font-mono tracking-wider">{tCalc.portionUnit}</span>
											<p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{tCalc.rice}</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<button
											onClick={() => setRice((prev) => Math.max(0, prev - 1))}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Minus size={12} />
										</button>
										<span className="font-[var(--font-display)] font-bold text-sm w-6 text-center text-[var(--foreground)]">{rice}</span>
										<button
											onClick={() => setRice((prev) => prev + 1)}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Plus size={12} />
										</button>
									</div>
								</div>

								{/* Fruits */}
								<div className="flex items-center justify-between py-4 border-b border-[var(--line)]">
									<div className="flex items-center gap-3">
										<span className="text-[var(--brand)] shrink-0"><Apple size={20} /></span>
										<div>
											<span className="text-[10px] text-[var(--muted)] uppercase font-mono tracking-wider">{tCalc.pieceUnit}</span>
											<p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{tCalc.fruits}</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<button
											onClick={() => setFruits((prev) => Math.max(0, prev - 1))}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Minus size={12} />
										</button>
										<span className="font-[var(--font-display)] font-bold text-sm w-6 text-center text-[var(--foreground)]">{fruits}</span>
										<button
											onClick={() => setFruits((prev) => prev + 1)}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Plus size={12} />
										</button>
									</div>
								</div>

								{/* Veggies */}
								<div className="flex items-center justify-between py-4 border-b border-[var(--line)]">
									<div className="flex items-center gap-3">
										<span className="text-[var(--brand)] shrink-0"><UtensilsCrossed size={20} /></span>
										<div>
											<span className="text-[10px] text-[var(--muted)] uppercase font-mono tracking-wider">{tCalc.portionUnit}</span>
											<p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{tCalc.veggies}</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<button
											onClick={() => setVeggies((prev) => Math.max(0, prev - 1))}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Minus size={12} />
										</button>
										<span className="font-[var(--font-display)] font-bold text-sm w-6 text-center text-[var(--foreground)]">{veggies}</span>
										<button
											onClick={() => setVeggies((prev) => prev + 1)}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Plus size={12} />
										</button>
									</div>
								</div>

								{/* Meat */}
								<div className="flex items-center justify-between py-4 border-b border-[var(--line)]">
									<div className="flex items-center gap-3">
										<span className="text-[var(--brand)] shrink-0"><Beef size={20} /></span>
										<div>
											<span className="text-[10px] text-[var(--muted)] uppercase font-mono tracking-wider">{tCalc.portionUnit}</span>
											<p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{tCalc.meat}</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<button
											onClick={() => setMeat((prev) => Math.max(0, prev - 1))}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Minus size={12} />
										</button>
										<span className="font-[var(--font-display)] font-bold text-sm w-6 text-center text-[var(--foreground)]">{meat}</span>
										<button
											onClick={() => setMeat((prev) => prev + 1)}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Plus size={12} />
										</button>
									</div>
								</div>

								{/* Milk */}
								<div className="flex items-center justify-between py-4 border-b border-[var(--line)] last:border-b-0">
									<div className="flex items-center gap-3">
										<span className="text-[var(--brand)] shrink-0"><MilkIcon size={20} /></span>
										<div>
											<span className="text-[10px] text-[var(--muted)] uppercase font-mono tracking-wider">{tCalc.glassUnit}</span>
											<p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{tCalc.milk}</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<button
											onClick={() => setMilk((prev) => Math.max(0, prev - 1))}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Minus size={12} />
										</button>
										<span className="font-[var(--font-display)] font-bold text-sm w-6 text-center text-[var(--foreground)]">{milk}</span>
										<button
											onClick={() => setMilk((prev) => prev + 1)}
											className="w-7 h-7 rounded-full border border-[var(--line)] text-[var(--muted)] flex items-center justify-center hover:border-[var(--brand)] hover:text-[var(--brand)] active:bg-[var(--brand-soft)]/50 transition cursor-pointer"
										>
											<Plus size={12} />
										</button>
									</div>
								</div>
							</div>

							{(bread > 0 || rice > 0 || fruits > 0 || veggies > 0 || meat > 0 || milk > 0) && (
								<button
									onClick={resetCalculator}
									className="text-xs text-[var(--muted)] hover:text-[var(--clay)] font-bold tracking-wider uppercase underline transition cursor-pointer mt-2"
								>
									{language === "en" ? "Reset Counters" : "Atur Ulang Hitungan"}
								</button>
							)}
						</div>

						{/* Results Ledger Dashboard (Right Column) - Pure Typography Minimalist style */}
						<div className="space-y-8 pl-0 lg:pl-12 lg:border-l border-[var(--line)]">
							
							{/* Calculations */}
							<div className="space-y-8 pt-4 lg:pt-0">
								{/* Water */}
								<div>
									<p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider font-mono">{tCalc.waterSaved}</p>
									<p className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-[var(--brand-dark)] mt-1.5">
										<AnimatedCounter value={totalWater} /> <span className="text-[15px] font-sans font-medium text-[var(--muted)] lowercase">Liters</span>
									</p>
								</div>

								{/* CO2 */}
								<div>
									<p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider font-mono">{tCalc.co2Saved}</p>
									<p className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-[var(--brand-dark)] mt-1.5">
										<AnimatedCounter value={totalCO2} decimals={totalCO2 > 0 ? 1 : 0} /> <span className="text-[15px] font-sans font-medium text-[var(--muted)]">kg CO₂e</span>
									</p>
								</div>

								{/* Energy */}
								<div>
									<p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider font-mono">{tCalc.energySaved}</p>
									<p className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-[var(--brand-dark)] mt-1.5">
										<AnimatedCounter value={totalEnergy} decimals={totalEnergy > 0 ? 1 : 0} /> <span className="text-xs font-sans font-medium text-[var(--muted)]">MJ</span>
									</p>
								</div>
							</div>

							{/* Equivalencies Container */}
							{totalWater > 0 && (
								<div className="pt-8 border-t border-dashed border-[var(--line)] space-y-4 animate-in fade-in duration-300">
									<h4 className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider font-mono mb-2">
										{tCalc.equivalentsTitle}
									</h4>
									<div className="space-y-3">
										{renderEquivalentText(tCalc.equivalentShower, showerMins)}
										{renderEquivalentText(tCalc.equivalentDrive, driveKm, true)}
										{renderEquivalentText(tCalc.equivalentLight, lightHours)}
									</div>
								</div>
							)}

						</div>
					</div>

				</div>
			</section>

			{/* Reality Check Text block */}
			<section className="py-16 sm:py-20 bg-[var(--surface-soft)]/40 border-y border-[var(--line)]">
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
