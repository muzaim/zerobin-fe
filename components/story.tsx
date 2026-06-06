import Image from "next/image";

export default function StorySection() {
	return (
		<section className="relative isolate overflow-hidden bg-[var(--brand-dark)] py-20 text-white sm:py-24">
			<Image
				src="/assets/produce/lettuce.png"
				alt=""
				width={1200}
				height={1200}
				className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] opacity-[0.06]"
			/>

			<div className="site-shell">
				<div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
					<div className="max-w-3xl">
						<p className="font-[var(--font-display)] text-lg italic text-[var(--brand-soft)]">
							A small action can still feel human.
						</p>
						<h2 className="display-title mt-4 text-[clamp(2.75rem,7vw,6rem)] text-white">
							Every meal has a little more story left in it.
						</h2>
					</div>
					<div className="max-w-sm md:text-right">
						<p className="leading-8 text-white/72">
							Do not let it end in a bin by default. Good food can still feed
							someone, save resources, and connect people nearby.
						</p>
						<a href="#download" className="secondary-button mt-6 bg-white text-[var(--brand-dark)]">
							Start sharing
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
