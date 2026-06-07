import Image from "next/image";
import Link from "next/link";
import { TrendingUp, ShieldCheck, Heart, ArrowRight, CheckCircle } from "lucide-react";

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
			<section className="py-12">
				<div className="site-shell">
					<div className="grid gap-8 sm:grid-cols-3">
						<div className="panel p-8 text-center">
							<h3 className="font-[var(--font-display)] text-5xl font-bold text-[var(--brand-dark)]">25 Tons</h3>
							<p className="mt-2 text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider">Food Kept Useful</p>
							<p className="mt-4 text-xs text-[var(--muted)]">
								Edible meals, fresh ingredients, and baked goods redirected to local tables instead of ending up in composting or landfills.
							</p>
						</div>

						<div className="panel p-8 text-center">
							<h3 className="font-[var(--font-display)] text-5xl font-bold text-[var(--clay)]">10K+</h3>
							<p className="mt-2 text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider">Meals Shared</p>
							<p className="mt-4 text-xs text-[var(--muted)]">
								Direct sharing interactions between neighbors, fostering trust and warm connections in local circles.
							</p>
						</div>

						<div className="panel p-8 text-center">
							<h3 className="font-[var(--font-display)] text-5xl font-bold text-[var(--gold)]">5K+</h3>
							<p className="mt-2 text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider">Active Neighbors</p>
							<p className="mt-4 text-xs text-[var(--muted)]">
								Families, local bakers, market stalls, and volunteers actively keeping their immediate community vibrant and waste-free.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Sustainability Goals */}
			<section className="py-16">
				<div className="site-shell">
					<div className="grid gap-12 md:grid-cols-2 items-center">
						<div>
							<h3 className="font-[var(--font-display)] text-3xl font-bold">Connecting surplus with community needs</h3>
							<p className="mt-4 text-[var(--muted)] leading-relaxed">
								Our goal is not just environmental. By sharing food, we decrease isolation, build social trust, and support families with access to excellent, fresh produce that would otherwise go unused.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-3 text-sm text-[var(--foreground)] font-medium">
									<CheckCircle size={18} className="text-[var(--brand)]" /> Carbon footprint reduction from landfills
								</li>
								<li className="flex items-center gap-3 text-sm text-[var(--foreground)] font-medium">
									<CheckCircle size={18} className="text-[var(--brand)]" /> Greater neighborhood trust and collaboration
								</li>
								<li className="flex items-center gap-3 text-sm text-[var(--foreground)] font-medium">
									<CheckCircle size={18} className="text-[var(--brand)]" /> Zero barriers to respectful food access
								</li>
							</ul>
						</div>
						<div className="panel p-8 bg-[var(--surface-soft)]">
							<h4 className="font-bold text-lg mb-4">Our Environmental Benchmark</h4>
							<p className="text-sm text-[var(--muted)] leading-relaxed">
								For every kilogram of food saved from landfills, we prevent approximately 2.5 kg of CO2 equivalents from entering the atmosphere. Our community has collectively prevented over 60,000 kg of greenhouse gas emissions.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-12 sm:py-16">
				<div className="site-shell">
					<div className="panel bg-[var(--brand-dark)] text-white p-8 sm:p-16 rounded-[22px] flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="max-w-xl">
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold leading-tight">
								Ready to make an impact?
							</h3>
							<p className="mt-4 text-white/70">
								Start sharing surplus meals or pick up fresh food from neighbors today.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
							<Link href="/" className="primary-button bg-white text-[var(--brand-dark)] hover:bg-[var(--brand-soft)] transition justify-center">
								Back to Home
							</Link>
							<Link href="#download" className="secondary-button bg-transparent border-white/20 text-white hover:border-white hover:bg-white/10 transition justify-center gap-2">
								Download App <ArrowRight size={16} />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
