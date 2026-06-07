import Image from "next/image";
import { Play, ShieldCheck } from "lucide-react";

export default function About() {
	return (
		<section id="about" className="section-pad">
			<div className="site-shell">
				<div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
					<div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
						<Image
							src="/assets/food/share-platter.svg"
							alt="Fresh food ready to be shared"
							width={720}
							height={520}
							className="h-[300px] w-full rounded-[14px] border border-[var(--line)] bg-[var(--surface-soft)] object-cover sm:col-span-2 md:h-[390px]"
						/>
						<Image
							src="/assets/food/community-pickup.svg"
							alt="Community food pickup"
							width={360}
							height={300}
							className="h-[210px] w-full rounded-[14px] border border-[var(--line)] bg-[var(--surface-soft)] object-cover"
						/>
						<Image
							src="/assets/food/sandwich.svg"
							alt="Community food pickup"
							width={360}
							height={300}
							className="h-[210px] w-full rounded-[14px] border border-[var(--line)] bg-[var(--surface-soft)] object-cover"
						/>
					</div>

					<div>
						<p className="eyebrow">About Cellar</p>
						<h2 className="section-title mt-5">
							A calmer way to share what would be wasted.
						</h2>
						<p className="section-copy mt-6 max-w-2xl">
							Cellar is built around the ordinary moments where
							good food needs a second route: a cafe closing
							early, a family cooking too much, a community group
							with extra portions after an event.
						</p>
						<p className="section-copy mt-4 max-w-2xl">
							The goal is not to turn meals into a marketplace. It
							is to make sharing clear, local, and respectful.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a href="#impact" className="primary-button">
								Read the impact
							</a>
							<button
								type="button"
								className="secondary-button gap-3"
							>
								<Play size={17} fill="currentColor" />
								Watch story
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
