import { ArrowRight } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full bg-[#0F3311]">
			<div className="mx-auto max-w-7xl px-8 py-24">
				<div className="grid gap-16 lg:grid-cols-4">
					{/* BRAND */}

					<div>
						<div className="flex items-center gap-4">
							<div
								className="
									flex
									h-14
									w-14
									items-center
									justify-center

									rounded-2xl

									bg-[#195A00]

									text-2xl
									font-bold

									text-white
								"
							>
								C
							</div>

							<div>
								<h2
									className="
										text-3xl
										font-bold

										text-white
									"
								>
									Cellar
								</h2>

								<p className="text-sm text-white/50">
									Food Sharing Platform
								</p>
							</div>
						</div>

						<p
							className="
								mt-8

								max-w-sm

								leading-8

								text-white/65
							"
						>
							Connecting surplus food with people who need it.
							Together we reduce food waste and build stronger
							communities, one shared meal at a time.
						</p>

						<div
							className="
								mt-10

								flex
								gap-6
							"
						>
							<a
								href="#"
								className="
									text-sm
									font-medium

									text-white/50

									transition

									hover:text-white
								"
							>
								Instagram
							</a>

							<a
								href="#"
								className="
									text-sm
									font-medium

									text-white/50

									transition

									hover:text-white
								"
							>
								LinkedIn
							</a>

							<a
								href="#"
								className="
									text-sm
									font-medium

									text-white/50

									transition

									hover:text-white
								"
							>
								GitHub
							</a>
						</div>
					</div>

					{/* PLATFORM */}

					<div>
						<h3
							className="
								text-xl
								font-semibold

								text-white
							"
						>
							Platform
						</h3>

						<div
							className="
								mt-8

								flex
								flex-col

								gap-4

								text-white/60
							"
						>
							<a href="#" className="hover:text-white">
								Home
							</a>

							<a href="#" className="hover:text-white">
								About
							</a>

							<a href="#" className="hover:text-white">
								How It Works
							</a>

							<a href="#" className="hover:text-white">
								Download App
							</a>
						</div>
					</div>

					{/* RESOURCES */}

					<div>
						<h3
							className="
								text-xl
								font-semibold

								text-white
							"
						>
							Resources
						</h3>

						<div
							className="
								mt-8

								flex
								flex-col

								gap-4

								text-white/60
							"
						>
							<a href="#" className="hover:text-white">
								FAQ
							</a>

							<a href="#" className="hover:text-white">
								Food Safety
							</a>

							<a href="#" className="hover:text-white">
								Guidelines
							</a>

							<a href="#" className="hover:text-white">
								Blog
							</a>
						</div>
					</div>

					{/* NEWSLETTER */}

					<div>
						<h3
							className="
								text-xl
								font-semibold

								text-white
							"
						>
							Stay Updated
						</h3>

						<p
							className="
								mt-8

								leading-8

								text-white/60
							"
						>
							Get updates about community stories, new features,
							and our impact in reducing food waste.
						</p>

						<div
							className="
								mt-8

								flex
								items-center

								rounded-full

								border
								border-white/10

								bg-white/5

								p-2

								backdrop-blur-sm
							"
						>
							<input
								type="email"
								placeholder="Enter your email"
								className="
									flex-1

									bg-transparent

									px-4

									text-white

									outline-none

									placeholder:text-white/35
								"
							/>

							<button
								className="
									flex
									h-11
									w-11

									items-center
									justify-center

									rounded-full

									bg-[#195A00]

									text-white

									transition

									hover:bg-[#236E08]
								"
							>
								<ArrowRight size={18} />
							</button>
						</div>
					</div>
				</div>

				{/* Divider */}

				<div
					className="
						mt-20

						border-t
						border-white/10

						pt-8
					"
				>
					<div
						className="
							flex
							flex-col

							gap-4

							text-sm

							text-white/40

							md:flex-row
							md:items-center
							md:justify-between
						"
					>
						<p>© 2026 Cellar. All rights reserved.</p>

						<p>Every meal deserves a plate, not a bin.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
