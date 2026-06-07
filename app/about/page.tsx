import Image from "next/image";
import Link from "next/link";
import { Users, Heart, Sprout, ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutUsPage() {
	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero Section */}
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">About Us</span>
						<h1 className="display-title mt-6 text-[clamp(2.8rem,8vw,4.5rem)] leading-[1.1]">
							We believe good food belongs on <span className="text-[#195A00]">plates</span>, not in landfills.
						</h1>
						<p className="section-copy mt-8 max-w-2xl">
							Cellar is a community-driven initiative born out of a simple observation: we have an abundance of food, yet so much of it goes to waste simply because we lack a clear, local way to share it.
						</p>
					</div>
				</div>
			</section>

			{/* Mission and Vision */}
			<section className="py-12 sm:py-16">
				<div className="site-shell">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="panel p-8 sm:p-12 flex flex-col justify-between hover:border-[var(--brand)] transition duration-300">
							<div>
								<div className="h-12 w-12 rounded-xl bg-[var(--brand-soft)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
									<Sprout size={24} />
								</div>
								<h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--foreground)]">Our Mission</h3>
								<p className="mt-4 text-[var(--muted)] leading-relaxed">
									To make local food sharing seamless, respectful, and routine. We are building the infrastructure that transforms potential food waste into shared community moments, one neighbor at a time.
								</p>
							</div>
						</div>

						<div className="panel p-8 sm:p-12 flex flex-col justify-between hover:border-[var(--brand)] transition duration-300">
							<div>
								<div className="h-12 w-12 rounded-xl bg-[var(--brand-soft)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
									<Heart size={24} />
								</div>
								<h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--foreground)]">Our Vision</h3>
								<p className="mt-4 text-[var(--muted)] leading-relaxed">
									A world where surplus food is instinctively shared, where neighborhoods are connected by trust and generosity, and where landfilling edible food becomes a practice of the past.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-16 sm:py-24">
				<div className="site-shell">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<span className="eyebrow centered">Our Foundation</span>
						<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mt-4">Values that guide Cellar</h2>
						<p className="mt-4 text-[var(--muted)]">
							These principles shape every feature we build, every guideline we write, and every interaction we support.
						</p>
					</div>

					<div className="grid gap-8 sm:grid-cols-3">
						<div className="flex flex-col items-center text-center p-6">
							<div className="h-16 w-16 rounded-full bg-[var(--surface-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
								<Users size={28} />
							</div>
							<h4 className="font-bold text-lg">Community Centered</h4>
							<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
								We believe local connections make us stronger. Cellar is designed to foster friendly interactions and real relationships between neighbors.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6">
							<div className="h-16 w-16 rounded-full bg-[var(--surface-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
								<ShieldCheck size={28} />
							</div>
							<h4 className="font-bold text-lg">Safety & Respect</h4>
							<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
								We treat both food and people with the utmost dignity. Our platform implements clear safety guidelines so everyone can share with peace of mind.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-6">
							<div className="h-16 w-16 rounded-full bg-[var(--surface-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--brand-dark)] mb-6">
								<Sprout size={28} />
							</div>
							<h4 className="font-bold text-lg">Mindful Consumption</h4>
							<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
								Every resource represents water, soil, energy, and labor. We respect these resources by keeping surplus food out of the waste stream.
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
								Ready to start sharing?
							</h3>
							<p className="mt-4 text-white/70">
								Join thousands of neighbors already listing extra meals, cafe portions, and garden surplus today.
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
