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

					<div className="relative mx-auto aspect-[0.92] w-full max-w-[620px] lg:max-w-none">
						<div className="absolute inset-x-10 bottom-8 top-10 rounded-[22px] border border-[var(--line)] bg-[rgb(255_253_247_/_0.65)] shadow-[var(--shadow-soft)]" />
						<div className="absolute left-4 top-4 z-20 hidden max-w-[210px] rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)] sm:block">
							<div className="flex items-center gap-2 text-sm font-bold text-[var(--brand-dark)]">
								<MapPin size={16} />
								Near you
							</div>
							<p className="mt-2 text-sm leading-6 text-[var(--muted)]">
								Fresh soup available until 7 PM, two blocks
								away.
							</p>
						</div>
						<Image
							src="/assets/daunatas.png"
							alt=""
							width={260}
							height={260}
							className="absolute left-0 top-16 z-20 w-[26%] -rotate-12"
						/>
						<Image
							src="/assets/food/hero-bowl.svg"
							alt=""
							width={520}
							height={520}
							className="absolute -bottom-4 -left-8 z-10 w-[60%] -rotate-12"
						/>
						<Image
							src="/assets/daunbawah.png"
							alt=""
							width={260}
							height={260}
							className="absolute bottom-6 right-8 z-20 w-[25%] rotate-12"
						/>
						<Image
							src="/assets/food1.svg"
							alt="A fresh prepared meal bowl"
							width={900}
							height={900}
							priority
							className="absolute inset-x-0 top-1/2 z-30 mx-auto w-[94%] -translate-y-1/2"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
