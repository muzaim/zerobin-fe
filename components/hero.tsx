import Image from "next/image";
import { ArrowDown, MapPin, PackageCheck } from "lucide-react";

const stats = [
	{ value: "10K+", label: "meals shared" },
	{ value: "5K+", label: "neighbors reached" },
	{ value: "25T", label: "food kept useful" },
];

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidde sm:pt-32 lg:min-h-screen lg:pt-5">
			<div className="site-shell relative z-10">
				<div className="grid min-h-[calc(100vh-80px)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-6">
					<div className="max-w-3xl">
						<h1 className="display-title mt-5 text-[clamp(3.4rem,12vw,4.8rem)]">
							Every meal deserve a plate,{" "}
							<span className="text-[#195A00]">not a bin.</span>
						</h1>

						<p className="section-copy mt-6 max-w-2xl">
							Cellar helps people list extra meals, coordinate
							simple pickups, and pass food to someone nearby
							while it is still at its best.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a
								href="#download"
								className="primary-button gap-2"
							>
								<PackageCheck size={18} />
								Share surplus food
							</a>
							<a
								href="#how-it-works"
								className="secondary-button gap-2"
							>
								<ArrowDown size={18} />
								See how it works
							</a>
						</div>

						<div className="mt-10 grid max-w-2xl grid-cols-3 gap-3  py-5">
							{stats.map((stat) => (
								<div key={stat.label}>
									<p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--brand-dark)] sm:text-4xl">
										{stat.value}
									</p>
									<p className="mt-1 text-sm leading-5 text-[var(--muted)]">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="relative mx-auto h-[700px] w-full max-w-[760px]">
						{/* Green Background */}

						<div
							className="
			absolute

			-right-20
			-top-[-80px]

			h-[780px]
			w-[780px]

			bg-[#195A00]

			z-0
		"
							style={{
								borderRadius:
									"45% 55% 55% 45% / 35% 40% 60% 65%",
							}}
						/>

						{/* Decorative Text */}

						<div
							className="
			absolute

			right-10
			bottom-0

			z-10

			text-[220px]
			font-black

			leading-none

			text-white/5
		"
						>
							C
						</div>

						{/* Top Leaf */}

						<Image
							src="/assets/daunatas.png"
							alt=""
							width={260}
							height={260}
							className="
			absolute

			left-8
			top-32

			z-20

			w-[180px]

			-rotate-[12deg]
		"
						/>

						{/* Cabbage Bottom Left */}

						<Image
							src="/assets/food/hero-bowl.svg"
							alt=""
							width={400}
							height={400}
							className="
			absolute

			-bottom-10
			-left-6

			z-10

			w-[320px]
		"
						/>

						{/* Bottom Leaf */}

						<Image
							src="/assets/daunbawah.png"
							alt=""
							width={260}
							height={260}
							className="
			absolute

			bottom-4
			right-16

			z-20

			w-[180px]

			rotate-[12deg]
		"
						/>

						{/* Small Floating Card */}

						<div
							className="
			absolute

			left-8
			top-10

			z-30

			hidden

			rounded-2xl

			bg-white

			px-4
			py-3

			shadow-xl

			sm:block
		"
						>
							<div className="flex items-center gap-2 text-sm font-semibold text-[#195A00]">
								<MapPin size={15} />
								Near You
							</div>

							<p className="mt-1 text-xs text-neutral-500">
								Fresh meals available nearby
							</p>
						</div>

						{/* Main Bowl */}

						<Image
							src="/assets/food1.svg"
							alt="A fresh prepared meal bowl"
							width={900}
							height={900}
							priority
							className="
			absolute

			right-[-40px]
			top-1/2

			z-30

			w-[760px]

			-translate-y-1/2
		"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
