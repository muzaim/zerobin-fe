import Image from "next/image";

export default function Impact() {
	return (
		<section id="impact" className="section-pad bg-[var(--background)] border-t border-[var(--line)]">
			<div className="site-shell">
				<div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
					<div className="space-y-8">
						<div>
							<span className="eyebrow text-[#195A00]">Our Impact</span>
							<h2 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mt-4 leading-[1.15]">
								Good food belongs on tables, not in bins.
							</h2>
							<p className="text-[var(--muted)] leading-relaxed text-lg mt-6 max-w-2xl">
								Cellar is built for the hands that actually move food: home cooks sharing an extra batch of soup, local cafes listing pastries before closing, and neighbors picking up garden surplus. We keep it personal, simple, and entirely local.
							</p>
						</div>

						{/* Clean Minimalist Stats Grid */}
						<div className="grid gap-8 sm:grid-cols-2 pt-6 border-t border-[var(--line)]">
							<div className="space-y-1">
								<p className="font-[var(--font-display)] text-5xl font-bold text-[#195A00] tracking-tight">
									25 Tons
								</p>
								<p className="text-xs uppercase tracking-widest font-mono text-[var(--muted)]">
									Surplus food saved & shared
								</p>
								<p className="text-sm text-[var(--muted)] mt-2">
									Redirected from local landfills straight to neighboring dinner plates.
								</p>
							</div>

							<div className="space-y-1">
								<p className="font-[var(--font-display)] text-5xl font-bold text-[var(--clay)] tracking-tight">
									4.8 / 5
								</p>
								<p className="text-xs uppercase tracking-widest font-mono text-[var(--muted)]">
									Average pickup rating
								</p>
								<p className="text-sm text-[var(--muted)] mt-2">
									Built on trust, safety, and friendly hand-offs between neighbors.
								</p>
							</div>
						</div>
					</div>

					{/* Asymmetrical Image Collage */}
					<div className="relative pt-8 sm:pt-12 lg:pt-0">
						{/* Main Image: Neighbor receiving food bag */}
						<div className="relative aspect-[4/5] w-[85%] ml-auto overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)] shadow-md">
							<Image
								src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&h=1000&q=80"
								alt="Hands handing over a bag of fresh community food sharing"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 500px"
							/>
						</div>

						{/* Secondary Overlapping Image: Volunteers cooking/packing */}
						<div className="absolute bottom-[-20px] left-0 w-[45%] aspect-square overflow-hidden rounded-[18px] border-4 border-[var(--background)] bg-[var(--surface-soft)] shadow-lg hidden sm:block">
							<Image
								src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=500&h=500&q=80"
								alt="Volunteers sharing and preparing food packs"
								fill
								className="object-cover"
								sizes="250px"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
