import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
	title: "For Donors — Cellar",
	description: "Giving away extra food shouldn't feel like a part-time job. Learn how to list your surplus food in under a minute.",
};

export default function HowItWorksDonors() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">How to Share</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							Giving away extra food shouldn’t feel like a <span className="text-[#195A00]">part-time job.</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							Nobody likes throwing away good food. With Cellar, listing your surplus groceries, backyard harvest, or closing-time bakery items takes under a minute.
						</p>
					</div>
				</div>
			</section>

			{/* Three Simple Steps & Image */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 items-center">
						<div className="space-y-12">
							<div className="space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Step 01
								</span>
								<h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
									Post what you have
								</h3>
								<p className="text-[var(--muted)] leading-relaxed max-w-lg">
									Take a quick photo on your phone. Write a brief note telling neighbors what it is, when it was made or harvested, and if it contains common allergens.
								</p>
							</div>

							<div className="space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Step 02
								</span>
								<h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
									Set a pickup window
								</h3>
								<p className="text-[var(--muted)] leading-relaxed max-w-lg">
									You decide when people can come by. Neighbors only see a general radius on the map—your exact location remains hidden until you accept their request.
								</p>
							</div>

							<div className="space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Step 03
								</span>
								<h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
									Make the handoff
								</h3>
								<p className="text-[var(--muted)] leading-relaxed max-w-lg">
									Coordinate pickups safely via in-app chat. Many donors prefer simple, contact-free handoffs like leaving a bag on their porch or hanging it on the gate.
								</p>
							</div>
						</div>

						{/* Polaroid Image Container */}
						<div className="relative pt-8 sm:pt-12 lg:pt-0">
							{/* Organic BG Blob */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&h=800&q=80"
										alt="Person packing homemade food to share with neighbors"
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

			{/* Reality Checks (FAQ Grid) */}
			<section className="py-20 border-t border-[var(--line)] bg-[var(--surface-soft)]/20">
				<div className="site-shell">
					<div className="max-w-4xl mx-auto">
						<h3 className="font-[var(--font-display)] text-3xl font-bold mb-12 text-center">
							The details you actually want to know
						</h3>
						
						<div className="divide-y divide-[var(--line)]">
							<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									What can I actually list?
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									Apples from your garden, extra catering portions, unopened pantry items, or day-old bread from your cafe. The gold standard rule: If you wouldn’t feed it to your close friends, don’t share it on the app.
								</p>
							</div>

							<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Do I have to meet people at my door?
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									Not at all. Many donors prefer leaving a bag on their porch, hanging it on the gate, or meeting at a nearby public spot like a park bench or building lobby. Pick whatever makes you comfortable.
								</p>
							</div>

							<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Is there any fee?
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									No. Cellar is completely free. It is built as a community utility, not a business. No ads, no hidden costs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
