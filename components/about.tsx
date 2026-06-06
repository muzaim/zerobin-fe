import Image from "next/image";
import { Play } from "lucide-react";

export default function About() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-7xl px-8">
				<div className="grid items-center gap-20 lg:grid-cols-2">
					{/* LEFT IMAGES */}

					<div className="space-y-6">
						<Image
							src="/assets/food2.svg"
							alt="Food Sharing"
							width={600}
							height={400}
							className="
								h-[320px]
								w-full
								rounded-3xl
								object-cover
								shadow-xl
							"
						/>

						<div className="grid grid-cols-2 gap-6">
							<Image
								src="/assets/food3.svg"
								alt="Community"
								width={300}
								height={250}
								className="
									h-[220px]
									w-full
									rounded-3xl
									object-cover
									shadow-lg
								"
							/>

							<Image
								src="/assets/food4.svg"
								alt="Food Donation"
								width={300}
								height={250}
								className="
									h-[220px]
									w-full
									rounded-3xl
									object-cover
									shadow-lg
								"
							/>
						</div>
					</div>

					{/* RIGHT CONTENT */}

					<div>
						<div className="flex items-center gap-4">
							<span
								className="
									font-[var(--font-playfair)]
									text-lg
									italic
									text-[#195A00]
								"
							>
								About Cellar
							</span>

							<div className="h-px w-20 bg-[#195A00]" />
						</div>

						<h2
							className="
								mt-6
								text-5xl
								font-extrabold
								leading-tight
								tracking-tight
								text-neutral-900
							"
						>
							Give food a second
							<br />
							chance to matter.
						</h2>

						<p
							className="
								mt-8
								text-lg
								leading-8
								text-neutral-500
							"
						>
							Cellar connects people with surplus food to those
							who can use it. Instead of letting good meals go to
							waste, we make it easy to share food with nearby
							communities and help create a more sustainable
							future.
						</p>

						<p
							className="
								mt-5
								text-lg
								leading-8
								text-neutral-500
							"
						>
							Every shared meal reduces waste, saves resources,
							and helps someone in need.
						</p>

						<div className="mt-10 flex items-center gap-6">
							<button
								className="
									rounded-full
									bg-[#195A00]
									px-8
									py-4
									font-semibold
									text-white

									transition-all
									duration-300

									hover:-translate-y-1
									hover:shadow-xl
									hover:shadow-green-900/20
								"
							>
								Show More
							</button>

							<button
								className="
									group
									flex
									items-center
									gap-4
								"
							>
								<div
									className="
										flex
										h-14
										w-14
										items-center
										justify-center

										rounded-full

										border
										border-[#195A00]

										text-[#195A00]

										transition-all
										duration-300

										group-hover:bg-[#195A00]
										group-hover:text-white
									"
								>
									<Play size={18} fill="currentColor" />
								</div>

								<span
									className="
										font-semibold
										text-neutral-800
									"
								>
									Watch Video
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
