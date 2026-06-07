import Image from "next/image";
import { ArrowDown, MapPin, PackageCheck } from "lucide-react";

const stats = [
	{ value: "10K+", label: "meals shared" },
	{ value: "5K+", label: "neighbors reached" },
	{ value: "25T", label: "food kept useful" },
];

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:min-h-screen lg:pt-5">
			<div className="site-shell relative z-10">
				<div className="grid min-h-[calc(100vh-80px)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-6">
					<div className="relative z-10 max-w-3xl">
						<h1 className="display-title mt-5 text-[clamp(3.4rem,12vw,4.8rem)]">
							Every meal deserve a plate,{" "}
							<span className="text-[#195A00]">not a bin.</span>
						</h1>

						<p className="section-copy mt-6 max-w-2xl">
							Cellar helps people list extra meals, coordinate
							simple pickups, and pass food to someone nearby
							while it is still at its best.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a
								href="/#download"
								className="primary-button gap-2"
							>
								<PackageCheck size={18} />
								Share surplus food
							</a>
							<a
								href="/#how-it-works"
								className="secondary-button gap-2"
							>
								<ArrowDown size={18} />
								See how it works
							</a>
						</div>

						<div className="mt-10 grid max-w-2xl grid-cols-3 gap-3  py-5">
							{stats.map((stat) => (
								<div key={stat.label}>
									<p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--brand-dark)] sm:text-4xl">
										{stat.value}
									</p>
									<p className="mt-1 text-sm leading-5 text-[var(--muted)]">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="relative z-0 mx-auto h-[400px] sm:h-[550px] lg:h-[650px] w-full max-w-[650px] flex items-center justify-center overflow-visible">
						{/* Simplified hero background blob */}
						<div className="absolute -right-8 -top-12 w-96 h-96 bg-green-200 rounded-full -z-10 opacity-80 blur-lg pointer-events-none"></div>

						{/* Polaroid 1 (Main community dining/sharing) - Hover effects disabled */}
						<div className="absolute w-[76%] aspect-[4/3] bg-white p-3 pb-8 sm:p-4 sm:pb-10 rounded-2xl sm:rounded-3xl border border-[var(--line)] shadow-[0_15px_35px_rgba(0,0,0,0.08)] rotate-[-3deg] transition-all duration-500 z-10">
							<div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl">
								<Image
									src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&h=600&q=85"
									alt="Neighbors sharing home-cooked food at a community table"
									fill
									priority
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 500px"
								/>
							</div>
							<p className="mt-2 text-center text-[10px] sm:text-xs font-mono text-[var(--muted)] font-bold tracking-wider uppercase">
								Sunday Neighborhood Table
							</p>
						</div>

						{/* Polaroid 2 (Secondary fresh garden harvest) - Hover effects disabled */}
						<div className="absolute left-[2%] bottom-[6%] w-[48%] aspect-[4/3] bg-white p-2.5 pb-6 sm:p-3 sm:pb-8 rounded-xl sm:rounded-2xl border border-[var(--line)] shadow-[0_12px_24px_rgba(0,0,0,0.08)] rotate-[6deg] transition-all duration-500 z-20">
							<div className="relative w-full h-full overflow-hidden rounded-md sm:rounded-lg">
								<Image
									src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&h=375&q=85"
									alt="Freshly harvested backyard vegetables"
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 50vw, 250px"
								/>
							</div>
							<p className="mt-1.5 text-center text-[8px] sm:text-[10px] font-mono text-[var(--muted)] font-bold tracking-wider uppercase">
								Sarah's garden surplus
							</p>
						</div>

						{/* Floating Badge 1 (Sarah's Sourdough Bread Listing) */}
						<div className="absolute left-[-2%] top-[12%] z-30 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-[var(--line)] shadow-[0_10px_25px_rgba(31,36,22,0.08)] transition-transform duration-300 sm:flex hidden">
							<div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[var(--line)] font-sans">
								<Image
									src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=80&h=80&q=85"
									alt="Freshly baked sourdough bread"
									fill
									className="object-cover"
								/>
							</div>
							<div className="font-sans text-left">
								<div className="flex items-center gap-1.5">
									<span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] animate-pulse" />
									<p className="text-[9px] font-bold tracking-wider uppercase font-mono text-[var(--brand)]">
										Active Now
									</p>
								</div>
								<p className="text-xs font-bold text-[var(--foreground)] mt-0.5">
									Sarah's Sourdough
								</p>
								<p className="text-[10px] text-[var(--muted)] font-medium">
									200m away • 2 portions
								</p>
							</div>
						</div>

						{/* Floating Badge 2 (James's Fresh Plums Listing) */}
						<div className="absolute right-[-4%] bottom-[22%] z-30 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-[var(--line)] shadow-[0_10px_25px_rgba(31,36,22,0.08)] transition-transform duration-300 sm:flex hidden">
							<div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[var(--line)] font-sans">
								<Image
									src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=80&h=80&q=85"
									alt="Fresh plums"
									fill
									className="object-cover"
								/>
							</div>
							<div className="font-sans text-left">
								<div className="flex items-center gap-1.5">
									<p className="text-[9px] text-[var(--muted)] font-mono font-bold uppercase">
										10m ago
									</p>
								</div>
								<p className="text-xs font-bold text-[var(--foreground)] mt-0.5">
									James's Plums
								</p>
								<p className="text-[10px] text-[var(--muted)] font-medium">
									400m away • 1 bag left
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
