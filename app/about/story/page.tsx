import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export default function OurStoryPage() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Story Hero */}
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">Our Story</span>
						<h1 className="display-title mt-6 text-[clamp(2.8rem,8vw,4.5rem)] leading-[1.1]">
							How a simple neighborly act became <span className="text-[#195A00]">Cellar</span>.
						</h1>
						<p className="section-copy mt-8 max-w-2xl">
							What started as a WhatsApp group between three neighbors trying to share excess garden vegetables has grown into a structured, reliable way to reduce local food waste.
						</p>
					</div>
				</div>
			</section>

			{/* Timeline / Narrative */}
			<section className="py-12">
				<div className="site-shell">
					<div className="grid gap-12 md:grid-cols-[1fr_2fr]">
						<div>
							<h3 className="font-[var(--font-display)] text-2xl font-bold">The Journey</h3>
							<p className="mt-4 text-[var(--muted)] leading-relaxed">
								We believe in incremental, meaningful change. Here is how we grew our community from a local experiment to a dedicated platform.
							</p>
						</div>

						<div className="space-y-12">
							<div className="border-l-2 border-[var(--brand)] pl-6 relative">
								<div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[var(--brand)] border-4 border-[var(--background)]" />
								<span className="text-sm font-bold text-[var(--brand)]">Early 2025</span>
								<h4 className="font-bold text-lg mt-1">The First Sprout</h4>
								<p className="mt-2 text-sm text-[var(--muted)]">
									A community group in a small neighborhood shares surplus backyard crop harvests. We realize there's a strong desire to share but no easy way to coordinate.
								</p>
							</div>

							<div className="border-l-2 border-[var(--brand)] pl-6 relative">
								<div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[var(--brand)] border-4 border-[var(--background)]" />
								<span className="text-sm font-bold text-[var(--brand)]">Late 2025</span>
								<h4 className="font-bold text-lg mt-1">Building Cellar</h4>
								<p className="mt-2 text-sm text-[var(--muted)]">
									We designed the Cellar app prototype to make listings quick (under 30 seconds) and pickups safe and structured, keeping the warm community feel alive.
								</p>
							</div>

							<div className="border-l-2 border-[var(--brand)] pl-6 relative">
								<div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[var(--brand)] border-4 border-[var(--background)]" />
								<span className="text-sm font-bold text-[var(--brand)]">Present</span>
								<h4 className="font-bold text-lg mt-1">Growing Stronger</h4>
								<p className="mt-2 text-sm text-[var(--muted)]">
									Now expanding to more neighborhoods, local cafes, and organic grocers, helping hundreds of families share daily.
								</p>
							</div>
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
								Be a part of our story
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
