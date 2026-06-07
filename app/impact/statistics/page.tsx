import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FoodWasteFacts() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">Food Waste Facts</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							The real cost of <span className="text-[#195A00]">wasted food.</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							We rarely think about it when letting a bag of salad turn to slime in the back of the fridge. But the numbers behind food waste are staggering.
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
									Understanding the scale of waste
								</h3>
								<p className="text-[var(--muted)] leading-relaxed">
									Food waste represents wasted farmland, soil depletion, packaging materials, shipping fuel, and weeks of farming labor—all dumped straight to rot in massive landfill operations.
								</p>
							</div>

							<div className="space-y-4 pt-6 border-t border-[var(--line)]">
								<div className="flex items-baseline gap-3">
									<span className="text-5xl font-bold font-[var(--font-display)] text-[var(--clay)]">
										1/3
									</span>
									<span className="text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">
										Globally Thrown Away
									</span>
								</div>
								<p className="text-sm text-[var(--muted)] leading-relaxed">
									Roughly one-third of all food produced globally is lost or wasted. We throw away nutrient-rich food while millions experience food insecurity right in our own cities.
								</p>
							</div>

							<div className="space-y-4 pt-6 border-t border-[var(--line)]">
								<div className="flex items-baseline gap-3">
									<span className="text-5xl font-bold font-[var(--font-display)] text-[#195A00]">
										8%
									</span>
									<span className="text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">
										Of Global Emissions
									</span>
								</div>
								<p className="text-sm text-[var(--muted)] leading-relaxed">
									Food waste accounts for approximately 8% of global greenhouse emissions. Organic waste rotting in landfill operations is one of the leading contributors to atmospheric methane generation.
								</p>
							</div>

							<div className="space-y-4 pt-6 border-t border-[var(--line)]">
								<div className="flex items-baseline gap-3">
									<span className="text-5xl font-bold font-[var(--font-display)] text-[var(--gold)]">
										70%
									</span>
									<span className="text-sm font-semibold uppercase tracking-wider font-mono text-[var(--foreground)]">
										Starts in the Kitchen
									</span>
								</div>
								<p className="text-sm text-[var(--muted)] leading-relaxed">
									The majority of food waste happens in our own household kitchens and local retail stores—not on shipping containers or logistics centers. This means our local choices can actually solve it.
								</p>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* Reality Check Text block */}
			<section className="py-16 sm:py-20 bg-[var(--surface-soft)]/40 border-y border-[var(--line)] mt-12">
				<div className="site-shell">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
							Why local sharing matters
						</h3>
						<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
							Composting is great, but feeding hungry people is far better. When food decomposes in a landfill, it releases methane—a gas far more damaging than carbon dioxide. By passing surplus food to a neighbor blocks away, you bypass the waste system entirely and strengthen your local community.
						</p>
						<Link href="/how-it-works/donors" className="primary-button justify-center gap-2 text-sm py-2 px-5 inline-flex">
							See how to share <ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}
