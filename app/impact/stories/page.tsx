import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function SuccessStories() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">Success Stories</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							Real food, real people, <span className="text-[#195A00]">real stories.</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							We aren't a massive charity, and we don't have corporate spokespeople. Cellar is just neighbors helping neighbors. Here are a few small stories from around our blocks.
						</p>
					</div>
				</div>
			</section>

			{/* Stories Layout (Text-Left, Image-Right) */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 items-center">
						
						{/* Stories Stack (Left Column) */}
						<div className="space-y-10">
							<div className="space-y-2">
								<h3 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
									Shared moments from our blocks
								</h3>
								<p className="text-[var(--muted)] leading-relaxed">
									A listing takes less than a minute, but the connections and resources saved linger much longer. Here is how sharing looks in daily life.
								</p>
							</div>

							{/* Story 1 */}
							<div className="space-y-4 pt-6 border-t border-[var(--line)]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									The Backyard Mango Harvest
								</h4>
								<div className="relative">
									<Quote size={28} className="absolute top-0 left-0 text-[var(--brand)]/10 -z-10" />
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed italic relative z-10 pl-6">
										"I couldn't eat twenty kilos of mangoes myself, and my neighbors were thrilled. One of them even brought back a jar of homemade mango jam."
									</p>
								</div>
								<div className="pl-6">
									<p className="text-xs font-bold text-[var(--foreground)]">Pak Andi</p>
									<p className="text-[10px] uppercase tracking-wider font-mono text-[var(--muted)]">South Jakarta • Backyard Crop Share</p>
								</div>
							</div>

							{/* Story 2 */}
							<div className="space-y-4 pt-6 border-t border-[var(--line)]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									The Sunday Bakery Rescue
								</h4>
								<div className="relative">
									<Quote size={28} className="absolute top-0 left-0 text-[var(--brand)]/10 -z-10" />
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed italic relative z-10 pl-6">
										"Throwing away fresh bread feels like a crime. Now, a couple of university students who live nearby drop by to pick up our leftovers. They get free breakfast, we get a clean display case."
									</p>
								</div>
								<div className="pl-6">
									<p className="text-xs font-bold text-[var(--foreground)]">Sarah</p>
									<p className="text-[10px] uppercase tracking-wider font-mono text-[var(--muted)]">Toko Roti Sore • Bakery Owner</p>
								</div>
							</div>

							{/* Story 3 */}
							<div className="space-y-4 pt-6 border-t border-[var(--line)]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									The Birthday Catering Save
								</h4>
								<div className="relative">
									<Quote size={28} className="absolute top-0 left-0 text-[var(--brand)]/10 -z-10" />
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed italic relative z-10 pl-6">
										"We had so much catering food left after my daughter's birthday dinner. It felt terrible to throw it away, but within 20 minutes of listing, a young family from the next street came and picked it up."
									</p>
								</div>
								<div className="pl-6">
									<p className="text-xs font-bold text-[var(--foreground)]">Maya</p>
									<p className="text-[10px] uppercase tracking-wider font-mono text-[var(--muted)]">Kemang • Household Donor</p>
								</div>
							</div>
						</div>

						{/* Polaroid Image Container (Right Column) */}
						<div className="relative pt-8 sm:pt-12 lg:pt-0">
							{/* Organic BG Blob */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=800&h=800&q=80"
										alt="Neighbors dining and sharing food at a rustic outdoor table"
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 500px"
									/>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* Deeper dive text block */}
			<section className="py-16 sm:py-20 bg-[var(--surface-soft)]/40 border-y border-[var(--line)] mt-12">
				<div className="site-shell">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
							It starts with a simple post
						</h3>
						<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
							Every single story on Cellar starts exactly the same way: someone has a bit of extra food, spends 30 seconds taking a photo, and posts it. You don't need to coordinate large-scale donation programs or fill out stacks of paperwork. Just share what you can, when you can.
						</p>
						<Link href="/how-it-works/donors" className="primary-button justify-center gap-2 text-sm py-2 px-5 inline-flex">
							How to share your surplus <ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}
