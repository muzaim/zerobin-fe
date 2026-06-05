import Image from "next/image";
import { LucidePaintBucket, Globe, Mail } from "lucide-react";
export default function Hero() {
	return (
		<section className="relative min-h-screen overflow-hidden">
			{/* SHAPE */}

			{/* GREEN SHAPE */}

			<Image
				src="/assets/vector/vector1.png"
				alt=""
				width={3000}
				height={3000}
				priority
				className="
    absolute
    right-[-320px]
    top-[-180px]

    z-0

    w-[1100]
    max-w-none
  "
			/>

			{/* WHITE OVERLAY */}

			<Image
				src="/assets/vector/vector2.png"
				alt=""
				width={3000}
				height={3000}
				priority
				className="
    absolute
    right-[-100px]
    top-[-0px]

    z-10

    w-[1300]
    max-w-none

    opacity-100
  "
			/>

			{/* CONTENT */}

			<div className="relative z-10 mx-auto max-w-7xl ">
				<div
					className="
      grid
      min-h-screen
      items-center

      lg:grid-cols-[90px_1.1fr_1fr]
    "
				>
					{/* SOCIAL */}
					<div
						className="
    hidden
    lg:flex
    flex-col
    items-center
    justify-center
    gap-8
  "
					>
						<div className="h-24 w-px bg-neutral-300" />

						<a
							href="#"
							className="
      text-neutral-500
      transition-all
      duration-300
      hover:-translate-y-1
      hover:text-[#195A00]
    "
						>
							<Globe size={18} />
						</a>

						<a
							href="#"
							className="
      text-neutral-500
      transition-all
      duration-300
      hover:-translate-y-1
      hover:text-[#195A00]
    "
						>
							<Mail size={18} />
						</a>

						<a
							href="#"
							className="
      text-neutral-500
      transition-all
      duration-300
      hover:-translate-y-1
      hover:text-[#195A00]
    "
						>
							<LucidePaintBucket size={18} />
						</a>

						<div className="h-24 w-px bg-neutral-300" />
					</div>

					{/* CONTENT */}

					<div className="max-w-3xl pl-6">
						{/* Heading */}

						<h1
							className="
          mt-8

          text-7xl

          font-extrabold

          leading-[1.02]

          tracking-[-0.05em]

          text-neutral-900
        "
						>
							Every meal deserves
							<br />a plate,
							<span className="text-[#195A00]"> not a bin.</span>
						</h1>

						{/* Description */}

						<p
							className="
          mt-8

          max-w-xl

          text-lg

          leading-8

          text-neutral-500
        "
						>
							Share surplus food with people nearby before it goes
							to waste. List extra meals, discover available food
							around you, and help your community while reducing
							food waste.
						</p>

						{/* CTA */}

						<div className="mt-10 flex flex-wrap gap-4">
							<button
								className="
            rounded-full

            bg-[#195A00]

            px-8
            py-4

            text-sm
            font-semibold
            text-white

            transition-all
            duration-300

            hover:shadow-xl
            hover:shadow-green-900/20
          "
							>
								Share Food
							</button>

							<button
								className="
            rounded-full

            border
            border-neutral-200

            bg-white

            px-8
            py-4

            text-sm
            font-semibold

            text-neutral-700

            transition-all
            duration-300

            hover:bg-neutral-50
          "
							>
								Find Food Nearby
							</button>
						</div>

						{/* Stats */}

						<div className="mt-14 flex gap-14">
							<div>
								<h3 className="text-3xl font-bold text-neutral-900">
									10K+
								</h3>

								<p className="mt-1 text-sm text-neutral-500">
									Meals Shared
								</p>
							</div>

							<div>
								<h3 className="text-3xl font-bold text-neutral-900">
									5K+
								</h3>

								<p className="mt-1 text-sm text-neutral-500">
									People Helped
								</p>
							</div>

							<div>
								<h3 className="text-3xl font-bold text-neutral-900">
									25T
								</h3>

								<p className="mt-1 text-sm text-neutral-500">
									Food Saved
								</p>
							</div>
						</div>
					</div>

					{/* IMAGE */}

					<div className="relative h-[750px]">
						<Image
							src="/assets/food1.svg"
							alt="Food Bowl"
							width={900}
							height={900}
							priority
							className="
          absolute

          right-[-40px]
          top-1/2

          z-20

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
