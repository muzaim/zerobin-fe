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

					<div className="relative z-0 mx-auto h-[400px] sm:h-[550px] lg:h-[620px] w-full max-w-[620px] flex items-center justify-center overflow-visible">
						{/* Soft organic green background blob */}
						<div 
							className="absolute -inset-4 bg-[var(--brand-soft)]/70 -z-20 blur-xl opacity-90" 
							style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }} 
						/>

						{/* Soft green background organic card border shape */}
						<div 
							className="absolute w-[88%] aspect-[4/3] bg-[#195A00]/8 rounded-3xl -z-10 rotate-[2.5deg] border border-[#195A00]/12"
						/>

						{/* Single Large Polaroid Card */}
						<div className="absolute w-[86%] aspect-[4/3] bg-white p-3.5 pb-8 sm:p-5 sm:pb-12 rounded-3xl border border-[var(--line)] shadow-[0_20px_45px_rgba(0,0,0,0.06)] rotate-[-1.5deg] transition-all duration-500 z-10">
							<div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl">
								<Image
									src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1000&h=750&q=85"
									alt="Neighbors sharing home-cooked food at a community table"
									fill
									priority
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 550px"
								/>
							</div>
							<p className="mt-3 text-center text-[10px] sm:text-xs font-mono text-[var(--muted)] font-bold tracking-wider uppercase">
								Sunday Neighborhood Table
							</p>
						</div>

						{/* Floating Badge 1 (Sarah's Sourdough Bread Listing) */}
						<div className="absolute left-[-4%] top-[14%] z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-[var(--line)] shadow-[0_10px_25px_rgba(31,36,22,0.08)] hover:-translate-y-1 transition-transform duration-300 sm:flex hidden">
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
						<div className="absolute right-[-2%] bottom-[16%] z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-[var(--line)] shadow-[0_10px_25px_rgba(31,36,22,0.08)] hover:-translate-y-1 transition-transform duration-300 sm:flex hidden">
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
