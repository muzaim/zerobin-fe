import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorksRecipients() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">How to Collect</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							Getting good food nearby <span className="text-[#195A00]">is straightforward.</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							Whether you want to rescue extra pastries from a bakery down the street or grab some surplus ingredients for dinner, Cellar makes neighborly sharing easy.
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
									Find something nearby
								</h3>
								<p className="text-[var(--muted)] leading-relaxed max-w-lg">
									Open the local map in the app. You’ll see fresh food listed by neighbors and small local shops. Check description, dietary tags, and collection time.
								</p>
							</div>

							<div className="space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Step 02
								</span>
								<h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
									Ask politely
								</h3>
								<p className="text-[var(--muted)] leading-relaxed max-w-lg">
									Tap request and suggest a quick pickup time. A simple, friendly message in the chat helps confirm coordination and build neighborly trust.
								</p>
							</div>

							<div className="space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Step 03
								</span>
								<h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
									Go collect it
								</h3>
								<p className="text-[var(--muted)] leading-relaxed max-w-lg">
									Once approved, the app reveals the exact pickup spot. Show up on time, grab your food, say thank you, and mark it as collected to let neighbors know it’s safe.
								</p>
							</div>
						</div>

						{/* Polaroid Image Container */}
						<div className="relative pt-8 sm:pt-12 lg:pt-0">
							{/* Organic BG Blob */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "50% 50% 30% 70% / 60% 40% 60% 40%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&h=800&q=80"
										alt="Fresh artisan sourdough bread ready to be shared"
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
							Important safety & sharing checks
						</h3>
						
						<div className="divide-y divide-[var(--line)]">
							<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Is the food safe to eat?
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									Yes, but use your judgment. Donors list when the food was prepared or expiry dates. Always look, smell, and inspect the food before eating. If something doesn't feel right, do not consume it.
								</p>
							</div>

							<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Can I pay or tip the donor?
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									No. Everything shared on Cellar is 100% free. Offering money or trading items is not allowed. A warm thank-you message is the only currency we support here.
								</p>
							</div>

							<div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									What if I can't show up?
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									Message the donor immediately to cancel or reschedule. Neighbors set aside time to hand over food, so letting them know early is a basic matter of respect.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
