import Image from "next/image";
import { Check } from "lucide-react";

const audiences = ["Households", "Restaurants", "Cafes", "Community groups"];

export default function Impact() {
	return (
		<section id="impact" className="section-pad">
			<div className="site-shell">
				<div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
					<div>
						<p className="eyebrow">Built for local hands</p>
						<h2 className="section-title mt-5">
							Food belongs on tables, not in trash bins.
						</h2>
						<p className="section-copy mt-6 max-w-2xl">
							Cellar works for the people who actually deal with surplus:
							home cooks, small food businesses, volunteers, and local
							organizers who need a practical way to move food while it is
							still fresh.
						</p>

						<div className="mt-8 grid gap-3 sm:grid-cols-2">
							{audiences.map((audience) => (
								<div
									key={audience}
									className="flex items-center gap-3 border-l-2 border-[var(--brand)] bg-[rgb(255_253_247_/_0.58)] px-4 py-3"
								>
									<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[var(--brand-soft)] text-[var(--brand-dark)]">
										<Check size={16} />
									</span>
									<span className="font-semibold text-[var(--ink-soft)]">
										{audience}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="relative">
						<div className="panel overflow-hidden p-3">
							<Image
								src="/assets/people/community-chef.jpg"
								alt="A chef preparing food for the community"
								width={760}
								height={860}
								className="h-[360px] w-full rounded-[10px] object-cover sm:h-[520px]"
							/>
							<div className="grid grid-cols-2 border-t border-[var(--line)]">
								<div className="p-5">
									<p className="font-[var(--font-display)] text-4xl font-semibold text-[var(--brand-dark)]">
										25T
									</p>
									<p className="mt-1 text-sm text-[var(--muted)]">
										food saved
									</p>
								</div>
								<div className="border-l border-[var(--line)] p-5">
									<p className="font-[var(--font-display)] text-4xl font-semibold text-[var(--clay)]">
										4.8
									</p>
									<p className="mt-1 text-sm text-[var(--muted)]">
										avg pickup rating
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
