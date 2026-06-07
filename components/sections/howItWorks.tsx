import Image from "next/image";

const steps = [
	{
		step: "01",
		title: "List it honestly",
		description:
			"Add a photo, quantity, ingredients, pickup window, and any safety notes people should know.",
		image: "/assets/food/list-food.svg",
		alt: "Food listing illustration",
	},
	{
		step: "02",
		title: "Choose the handoff",
		description:
			"Neighbors can request a pickup, then both sides confirm the place and timing that feels right.",
		image: "/assets/food/match-food.svg",
		alt: "Food pickup illustration",
	},
	{
		step: "03",
		title: "Close the loop",
		description:
			"Mark it shared, keep a small impact record, and make tomorrow's surplus easier to route.",
		image: "/assets/food/share-impact.svg",
		alt: "Community impact illustration",
	},
];

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="section-pad">
			<div className="site-shell">
				<div className="mx-auto max-w-3xl text-center">
					<p className="eyebrow centered justify-center">
						How it works
					</p>
					<h2 className="section-title mt-5">
						Three steps, with room for real life.
					</h2>
					<p className="section-copy mt-6">
						Sharing food only works when the details are clear.
						Cellar keeps the flow short, but leaves space for notes
						that matter.
					</p>
				</div>

				<div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
					{steps.map((item) => (
						<article
							key={item.step}
							className="group border-t border-[var(--line)] bg-[rgb(255_253_247_/_0.52)] p-5 transition hover:bg-[var(--surface)] sm:p-6"
						>
							<div className="flex items-start justify-between gap-4">
								<span className="font-[var(--font-display)] text-5xl font-semibold text-[var(--brand-dark)]">
									{item.step}
								</span>
								<Image
									src={item.image}
									alt={item.alt}
									width={180}
									height={140}
									className="h-28 w-32 object-contain transition "
								/>
							</div>
							<h3 className="mt-7 text-2xl font-bold text-[var(--foreground)]">
								{item.title}
							</h3>
							<p className="mt-4 leading-7 text-[var(--muted)]">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
