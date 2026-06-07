import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StoriesSlider from "@/components/sections/stories-slider";

export const metadata = {
	title: "Success Stories — Cellar",
	description: "Real food, real people, real stories. Read inspiring stories of neighborhood sharing on Cellar.",
};

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

			{/* Stories Layout */}
			<section className="py-12 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="max-w-4xl mx-auto space-y-12">
						
						{/* Title Block */}
						<div className="text-center max-w-2xl mx-auto space-y-3">
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)]">
								Shared moments from our blocks
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base">
								A listing takes less than a minute, but the connections and resources saved linger much longer. Here is how sharing looks in daily life.
							</p>
						</div>

						{/* Success Stories Slider */}
						<div className="pt-2">
							<StoriesSlider />
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
