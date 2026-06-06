"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Restaurant Owner",
		image: "/assets/person1.jpg",
		review: "Cellar helped us share leftover meals instead of throwing them away. It's simple, meaningful, and creates a real impact in our community.",
	},
	{
		name: "Michael Lee",
		role: "Community Volunteer",
		image: "/assets/person2.jpg",

		review: "Food that once went to waste now reaches families nearby.",
	},
	{
		name: "Emma Wilson",
		role: "Local Resident",
		image: "/assets/person3.jpg",

		review: "I discovered fresh meals through Cellar and met amazing people in my neighborhood.",
	},
	{
		name: "David Brown",
		role: "Café Owner",
		image: "/assets/person4.jpg",

		review: "Before Cellar, surplus food often ended up discarded.",
	},
	{
		name: "Olivia Smith",
		role: "Volunteer",
		image: "/assets/person5.jpg",

		review: "One small action can make a huge difference.",
	},
];

export default function Testimonials() {
	const [current, setCurrent] = useState(0);

	const next = () =>
		setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

	const prev = () =>
		setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

	const item = testimonials[current];

	return (
		<section className="relative py-28">
			<div className="relative mx-auto max-w-7xl px-8">
				{/* FLOATING DECORATION */}

				<div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
					{/* LEFT */}

					<div className="relative flex justify-center">
						{/* Decorative Ring */}

						<div
							className="
						absolute
						inset-[-20px]

						rounded-[55%_45%_60%_40%]

						border
						border-[#195A00]/15
					"
						/>

						<div
							className="
						absolute
						inset-[-45px]

						rounded-[40%_60%_45%_55%]

						border
						border-[#195A00]/10
					"
						/>

						<Image
							src={item.image}
							alt={item.name}
							width={500}
							height={600}
							className="
						relative
						z-10

						h-[500px]
						w-[420px]

						object-cover
					"
							style={{
								borderRadius:
									"58% 42% 55% 45% / 42% 58% 42% 58%",
							}}
						/>
					</div>

					{/* RIGHT */}
					<div className="max-w-xl">
						{/* LABEL */}

						<div className="flex items-center gap-4">
							<p
								className="
			font-serif
			italic

			text-[#195A00]
		"
							>
								Community Stories
							</p>

							<div className="h-px flex-1 bg-[#195A00]/20" />
						</div>

						{/* CARD */}

						<div
							className="
		mt-10

		rounded-[32px]

		border
		border-[#195A00]/10

		bg-white

		p-10

		shadow-[0_20px_60px_rgba(0,0,0,0.05)]
	"
						>
							{/* QUOTE ICON */}

							<div
								className="
			text-7xl
			font-black

			leading-none

			text-[#195A00]/10
		"
							>
								“
							</div>

							{/* REVIEW */}

							<blockquote
								className="
			-mt-3

			text-2xl
			font-light

			leading-relaxed

			text-neutral-800
		"
							>
								"{item.review}"
							</blockquote>

							{/* STARS */}

							<div className="mt-8 flex gap-1 text-yellow-500">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={18}
										fill="currentColor"
									/>
								))}
							</div>

							{/* AUTHOR */}

							<div
								className="
			mt-8

			flex
			items-center
			justify-between
		"
							>
								<div>
									<h4
										className="
					text-lg
					font-semibold

					text-neutral-900
				"
									>
										{item.name}
									</h4>

									<p className="mt-1 text-neutral-500">
										{item.role}
									</p>
								</div>

								<div
									className="
				rounded-full

				bg-[#195A00]/10

				px-4
				py-2

				text-sm
				font-medium

				text-[#195A00]
			"
								>
									Verified User
								</div>
							</div>

							{/* FOOTER */}

							<div
								className="
			mt-10

			flex
			items-center
			justify-between

			border-t
			border-neutral-100

			pt-8
		"
							>
								{/* COUNTER */}

								<div className="flex items-center gap-4">
									<span
										className="
					text-3xl
					font-bold

					text-[#195A00]
				"
									>
										{String(current + 1).padStart(2, "0")}
									</span>

									<div className="h-px w-16 bg-neutral-300" />

									<span className="text-neutral-400">05</span>
								</div>

								{/* NAV */}

								<div className="flex gap-3">
									<button
										onClick={prev}
										className="
					flex
					h-12
					w-12

					items-center
					justify-center

					rounded-full

					border
					border-neutral-200

					bg-white

					transition-all
					duration-300

					hover:border-[#195A00]
					hover:text-[#195A00]
				"
									>
										<ChevronLeft size={18} />
									</button>

									<button
										onClick={next}
										className="
					flex
					h-12
					w-12

					items-center
					justify-center

					rounded-full

					bg-[#195A00]

					text-white

					transition-all
					duration-300

					hover:bg-[#236E08]
				"
									>
										<ChevronRight size={18} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
