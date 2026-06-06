import { Upload, Search, Heart } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
	return (
		<section className="relative py-32">
			{/* Floating Decoration */}

			<Image
				src="/assets/side1.png"
				alt=""
				width={220}
				height={220}
				className="
			absolute

			-left-70
			-top-20

			z-0

			w-[520px]
			rotate-[-12deg]
		"
			/>
			<div className="mx-auto max-w-7xl px-8">
				{/* Heading */}

				<div className="text-center">
					<div className="flex items-center justify-center gap-4">
						<div className="h-px w-16 bg-[#195A00]" />

						<span className="font-serif text-lg italic text-[#195A00]">
							How It Works
						</span>

						<div className="h-px w-16 bg-[#195A00]" />
					</div>

					<h2 className="mt-6 text-5xl font-extrabold tracking-tight text-neutral-900">
						Three simple steps
						<br />
						to reduce food waste
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
						Cellar helps people share surplus food with nearby
						communities in just a few simple steps.
					</p>
				</div>

				{/* Cards */}

				<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Card 1 */}

					<div
						className="
    rounded-3xl
    border
    border-neutral-200
    bg-white
    p-8

    transition-all
    duration-300

    
    
  "
					>
						{/* Illustration */}

						<Image
							src="/assets/impact1.svg"
							alt="Share Food"
							width={300}
							height={220}
							className="
      mx-auto
      h-44
      w-auto
      object-contain
    "
						/>

						{/* Step */}

						<p
							className="
      mt-8
      text-xs
      font-bold
      tracking-[0.25em]
      text-[#195A00]
    "
						>
							STEP 1
						</p>

						{/* Title */}

						<h3
							className="
      mt-3
      text-2xl
      font-bold
      text-neutral-900
    "
						>
							Share Food
						</h3>

						{/* Desc */}

						<p
							className="
      mt-4
      leading-7
      text-neutral-500
    "
						>
							Upload surplus food in seconds and let nearby people
							know it is available.
						</p>
					</div>

					{/* Card 2 */}

					<div
						className="
    rounded-3xl
    border
    border-neutral-200
    bg-white
    p-8

    transition-all
    duration-300

    
    
  "
					>
						{/* Illustration */}

						<Image
							src="/assets/impact2.svg"
							alt="Share Food"
							width={300}
							height={220}
							className="
      mx-auto
      h-44
      w-auto
      object-contain
    "
						/>

						{/* Step */}

						<p
							className="
      mt-8
      text-xs
      font-bold
      tracking-[0.25em]
      text-[#195A00]
    "
						>
							STEP 2
						</p>

						{/* Title */}

						<h3
							className="
      mt-3
      text-2xl
      font-bold
      text-neutral-900
    "
						>
							Get Matched
						</h3>

						{/* Desc */}

						<p
							className="
      mt-4
      leading-7
      text-neutral-500
    "
						>
							People nearby can discover available food and
							reserve what they need.
						</p>
					</div>

					{/* Card 3 */}

					<div
						className="
    rounded-3xl
    border
    border-neutral-200
    bg-white
    p-8

    transition-all
    duration-300

    
    
  "
					>
						{/* Illustration */}

						<Image
							src="/assets/impact3.svg"
							alt="Share Food"
							width={300}
							height={220}
							className="
      mx-auto
      h-44
      w-auto
      object-contain
    "
						/>

						{/* Step */}

						<p
							className="
      mt-8
      text-xs
      font-bold
      tracking-[0.25em]
      text-[#195A00]
    "
						>
							STEP 3
						</p>

						{/* Title */}

						<h3
							className="
      mt-3
      text-2xl
      font-bold
      text-neutral-900
    "
						>
							Make Impact
						</h3>

						{/* Desc */}

						<p
							className="
      mt-4
      leading-7
      text-neutral-500
    "
						>
							Help reduce food waste and ensure every meal finds
							someone who can enjoy it.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
