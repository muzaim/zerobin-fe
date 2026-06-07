import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommunityGuidelines() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">The Golden Rules</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							How to not be a <span className="text-[#195A00]">weird neighbor.</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							Cellar runs entirely on trust and mutual respect. We are not a delivery service or a store—just neighbors helping neighbors. Here is how we keep it comfortable for everyone.
						</p>
					</div>
				</div>
			</section>

			{/* Guidelines Section */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 items-center">
						
						{/* Polaroid Image Container (Left Column) */}
						<div className="relative order-last lg:order-first pt-8 sm:pt-12 lg:pt-0">
							{/* Organic BG Blob */}
							<div
								className="absolute -inset-4 sm:-inset-8 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "50% 50% 30% 70% / 60% 40% 60% 40%" }}
							/>

							{/* Polaroid Board */}
							<div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&w=800&h=800&q=80"
										alt="Neighbors happily talking and sharing a warm moment outdoors"
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 500px"
									/>
								</div>
							</div>
						</div>

						{/* Narrative Content (Right Column) */}
						<div className="space-y-8">
							<div className="space-y-3">
								<h3 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
									Keep it friendly, keep it respectful.
								</h3>
								<p className="text-[var(--muted)] leading-relaxed text-base">
									Cellar is not a store, a commercial delivery network, or an anonymous food drive. It is a local pathway built on neighbor-to-neighbor trust. Because we share directly from our own kitchens and gardens, a few simple boundaries keep things comfortable, safe, and welcoming for everyone.
								</p>
							</div>

							<div className="space-y-3 pt-6 border-t border-[var(--line)]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Only share what is good
								</h4>
								<p className="text-sm text-[var(--muted)] leading-relaxed">
									The gold standard is simple: only list food you would happily eat yourself. Fresh garden vegetables, home-baked bread, unopened pantry staples, or leftover portions from a family event are perfect. Moldy, expired, or half-eaten food belongs in the compost, not in a neighbor’s hands.
								</p>
							</div>

							<div className="space-y-3 pt-6 border-t border-[var(--line)]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Show up when you say you will
								</h4>
								<p className="text-sm text-[var(--muted)] leading-relaxed">
									Neighbors coordinate their days to list and hand off food. If you agree on a 5:30 PM pickup, show up at 5:30 PM. If plans change, send a quick note in the app chat immediately so nobody is left waiting.
								</p>
							</div>

							<div className="space-y-3 pt-6 border-t border-[var(--line)]">
								<h4 className="font-[var(--font-display)] text-xl font-semibold text-[var(--foreground)]">
									Keep transactions completely out of it
								</h4>
								<p className="text-sm text-[var(--muted)] leading-relaxed">
									Everything shared here is 100% free. Offering cash, requesting tips, bartering, or pitching local business offers is strictly forbidden. A friendly smile and a warm thank-you are the only exchanges we support.
								</p>
							</div>
						</div>

					</div>
				</div>
			</section>

		</div>
	);
}
