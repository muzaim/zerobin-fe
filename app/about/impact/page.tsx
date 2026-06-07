import Image from "next/image";
import Link from "next/link";
import { TrendingUp, ShieldCheck, Heart, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
	title: "Our Impact — Cellar",
	description: "Measuring our collective difference. Learn how much food waste has been prevented by our community.",
};

export default function OurImpactPage() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Impact Hero */}
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">Our Impact</span>
						<h1 className="display-title mt-6 text-[clamp(2.8rem,8vw,4.5rem)] leading-[1.1]">
							Measuring our collective <span className="text-[#195A00]">difference</span>.
						</h1>
						<p className="section-copy mt-8 max-w-2xl">
							Every shared meal is a vote for a more sustainable, connected world. Here is how our community's small daily actions add up to a significant impact.
						</p>
					</div>
				</div>
			</section>

			{/* Impact Numbers */}
			<section className="py-12 border-b border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 sm:grid-cols-3 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)]">
						<div className="py-6 sm:py-0 sm:px-8 text-center sm:text-left first:pl-0">
							<h3 className="font-[var(--font-display)] text-5xl font-bold text-[#195A00] tracking-tight">25 Tons</h3>
							<p className="mt-3 text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">Food Kept Useful</p>
							<p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
								Edible meals, fresh ingredients, and baked goods redirected to local tables instead of ending up in composting or landfills.
							</p>
						</div>

						<div className="py-6 sm:py-0 sm:px-8 text-center sm:text-left">
							<h3 className="font-[var(--font-display)] text-5xl font-bold text-[var(--clay)] tracking-tight">10K+</h3>
							<p className="mt-3 text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">Meals Shared</p>
							<p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
								Direct sharing interactions between neighbors, fostering trust and warm connections in local circles.
							</p>
						</div>

						<div className="py-6 sm:py-0 sm:px-8 text-center sm:text-left last:pr-0">
							<h3 className="font-[var(--font-display)] text-5xl font-bold text-[var(--gold)] tracking-tight">5K+</h3>
							<p className="mt-3 text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">Active Neighbors</p>
							<p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
								Families, local bakers, market stalls, and volunteers actively keeping their immediate community vibrant and waste-free.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Sustainability Goals */}
			<section className="py-20 sm:py-28">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-2 items-center">
						<div className="space-y-6">
							<span className="eyebrow text-[#195A00]">Our Goals</span>
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
								Connecting surplus with community needs
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-lg">
								Our goal is not just environmental. By sharing food, we decrease isolation, build social trust, and support families with access to excellent, fresh produce that would otherwise go unused. No barriers, just neighbors helping neighbors.
							</p>
							
							<div className="relative pl-6 border-l-2 border-[#195A00] py-1">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block mb-1">
									Environmental Benchmark
								</span>
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Measuring our carbon footprint reduction
								</h4>
								<p className="text-sm text-[var(--muted)] leading-relaxed mt-2">
									For every kilogram of food saved from landfills, we prevent approximately 2.5 kg of CO2 equivalents from entering the atmosphere. Our community has collectively prevented over 60,000 kg of greenhouse gas emissions.
								</p>
							</div>
						</div>

						{/* Clean HD Image representing community impact with Cellar borders & decorations */}
						<div className="relative">
							{/* Floating organic background shape */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }}
							/>

							{/* Polaroid-like custom paper-board image card */}
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=85"
										alt="Volunteers packing fresh organic food boxes in community kitchen"
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 600px"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
