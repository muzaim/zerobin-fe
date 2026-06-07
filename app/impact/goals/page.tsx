import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
	title: "Sustainability Goals — Cellar",
	description: "Goals that matter to our neighborhoods. Learn about our commitment to zero food waste.",
};

export default function SustainabilityGoals() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">Sustainability Goals</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							Goals that matter to <span className="text-[#195A00]">our neighborhoods.</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							We aren't trying to change the entire world in a day. We are focusing on our own streets, one kitchen and one neighborhood at a time. Here is what we are working toward.
						</p>
					</div>
				</div>
			</section>

			{/* Sticky Sidebar & Text Cards Layout */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
						{/* Sticky Left Sidebar */}
						<div className="lg:sticky lg:top-36 h-fit space-y-6">
							<span className="eyebrow text-[#195A00]">Our Commitment</span>
							<h3 className="font-[var(--font-display)] text-3xl font-bold text-[var(--foreground)] tracking-tight">
								Real milestones for local communities
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-base">
								Cellar targets concrete local changes. Rather than purchasing carbon credits or publishing corporate compliance spreadsheets, we invest our efforts directly in preventing local waste, building neighborhood trust, and supporting families.
							</p>
						</div>

						{/* Stack of Commitments (Right Column) */}
						<div className="divide-y divide-[var(--line)]">
							{/* Goal 1 */}
							<div className="pb-10 space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Goal 01 / Zero Food Waste
								</span>
								<h4 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)] mt-2">
									Zero edible food in local bins
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									If food can be eaten, it shouldn't be discarded. We want to normalize local food sharing so that whenever a household or local shop has extra portions, their first instinct is to open the map and invite a neighbor, not dump it in the trash bin.
								</p>
							</div>

							{/* Goal 2 */}
							<div className="py-10 space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Goal 02 / Social Integration
								</span>
								<h4 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)] mt-2">
									Supporting neighbors directly
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									Sharing bread builds relationship. We connect home cooks and small businesses with families living blocks away, removing the charity stigma and replacing it with respectful, friendly local handoffs.
								</p>
							</div>

							{/* Goal 3 */}
							<div className="pt-10 space-y-3">
								<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
									Goal 03 / Environmental Protection
								</span>
								<h4 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--foreground)] mt-2">
									Landfill diversion at the source
								</h4>
								<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
									Every apple and portion of catering saved is a victory. Keeping organic matter out of local waste dumps prevents direct methane gas generation, bypassing the municipal processing loop entirely.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How we measure progress */}
			<section className="py-16 sm:py-20 bg-[var(--surface-soft)]/40 border-y border-[var(--line)] mt-12">
				<div className="site-shell">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
							How we measure progress
						</h3>
						<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
							We don't count success in terms of arbitrary "credits" or corporate reports. We measure it by checking how active our neighborhood hubs are, how many requests are successfully completed, and how much food gets saved. Simple, real-world metrics that actually translate to healthier neighborhoods.
						</p>
						<Link href="/impact/statistics" className="primary-button justify-center gap-2 text-sm py-2 px-5 inline-flex">
							See our latest statistics <ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}
