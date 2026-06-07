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

			{/* Featured Image Banner */}
			<section className="pb-12 sm:pb-16">
				<div className="site-shell">
					<div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[24px] border border-[var(--line)] shadow-sm bg-[var(--surface-soft)]">
						<Image
							src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85"
							alt="Community food sharing table outdoors"
							fill
							priority
							className="object-cover"
							sizes="(max-width: 1280px) 100vw, 1280px"
						/>
					</div>
				</div>
			</section>

			{/* Mission and Vision */}
			<section className="py-16 sm:py-24 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 md:grid-cols-2 md:gap-24">
						<div className="space-y-4">
							<span className="eyebrow text-[#195A00]">Our Mission</span>
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)] mt-2">
								Making food sharing completely routine.
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-[16px] sm:text-[17px] pt-2">
								No grand tech promises or complicated rules. We are building the local, friendly pathway that makes sending extra food to a neighbor feel as normal and simple as putting it in your fridge.
							</p>
						</div>

						<div className="space-y-4">
							<span className="eyebrow text-[#195A00]">Our Vision</span>
							<h3 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)] mt-2">
								A neighborhood built on trust.
							</h3>
							<p className="text-[var(--muted)] leading-relaxed text-[16px] sm:text-[17px] pt-2">
								We imagine a street where surplus food is shared by default. Where communities are connected by trust and dinner tables, and where sending good, edible food to a landfill becomes a behavior of the past.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="py-16 sm:py-24 border-t border-[var(--line)]">
				<div className="site-shell">
					<div className="grid gap-12 lg:grid-cols-2 items-center">
						<div className="space-y-6">
							<span className="eyebrow">How It Started</span>
							<h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold">Connecting neighborhoods through shared meals</h2>
							<p className="text-[var(--muted)] leading-relaxed">
								Cellar began in a small kitchen when we realized how much fresh bread, backyard garden surplus, and perfectly good meals were being discarded simply due to a lack of communication. We wanted to create a platform that feels warm, personal, and completely local—a digital cellar where neighbors could invite others to share in their excess.
							</p>
							<p className="text-[var(--muted)] leading-relaxed">
								Today, we are proud to connect thousands of individuals, local bakeries, and community groups, fostering relationships built on trust, respect, and a shared commitment to a zero-waste lifestyle.
							</p>
						</div>
						<div className="relative">
							{/* Floating organic background shape */}
							<div
								className="absolute -inset-4 bg-[var(--brand-soft)]/50 -z-10"
								style={{ borderRadius: "40% 60% 50% 50% / 50% 60% 40% 50%" }}
							/>

							{/* Polaroid-like custom paper-board image card */}
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_24px_rgba(0,0,0,0.03)] rotate-[1.5deg]">
								<div className="relative w-full h-full overflow-hidden rounded-[20px]">
									<Image
										src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
										alt="Volunteers and neighbors smiling, sharing fresh bread and meals together"
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 600px"
									/>
								</div>
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

			{/* Simple bottom nav */}
			<section className="py-10 border-t border-[var(--line)]">
				<div className="site-shell flex flex-wrap items-center justify-between gap-4">
					<p className="text-sm text-[var(--muted)]">Cellar · Built for the ordinary moment.</p>
					<div className="flex gap-6">
						<Link href="/how-it-works/donors" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand)] transition">
							How to share →
						</Link>
						<Link href="/#download" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand)] transition">
							Get the app →
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
