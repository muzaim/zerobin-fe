import Image from "next/image";
import { Download, Leaf, MapPin, Package, Users } from "lucide-react";

export default function DownloadApp() {
	return (
		<section className="py-28">
			<div className="mx-auto max-w-7xl px-8">
				<div
					className="
						relative
						overflow-hidden

						rounded-[40px]

						bg-[#F6F8F3]

						p-8

						lg:p-16
					"
				>
					<div className="grid items-center gap-16 lg:grid-cols-2">
						{/* LEFT */}

						<div className="relative z-10">
							<div className="flex items-center gap-3">
								<div
									className="
										flex
										h-10
										w-10
										items-center
										justify-center

										rounded-xl

										bg-[#195A00]/10
									"
								>
									<Download
										size={18}
										className="text-[#195A00]"
									/>
								</div>

								<span
									className="
										text-sm
										font-semibold

										tracking-[0.25em]
										uppercase

										text-[#195A00]
									"
								>
									Download App
								</span>
							</div>

							<h2
								className="
									mt-8

									text-5xl
									font-bold

									leading-[1.1]

									text-neutral-900

									lg:text-7xl
								"
							>
								Share Food.
								<br />
								Reduce Waste.
								<br />
								<span className="text-[#195A00]">
									Create Impact.
								</span>
							</h2>

							<p
								className="
									mt-8

									max-w-xl

									text-lg
									leading-9

									text-neutral-600
								"
							>
								Join thousands of people using Cellar to share
								surplus food, help others, and build a stronger,
								more caring community.
							</p>

							{/* FEATURES */}

							<div
								className="
									mt-10

									grid

									gap-6

									sm:grid-cols-3
								"
							>
								<div className="flex gap-3">
									<Package
										size={20}
										className="mt-1 text-[#195A00]"
									/>

									<div>
										<h4 className="font-semibold">
											Share Food
										</h4>

										<p className="text-sm text-neutral-500">
											List extra meals nearby.
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<MapPin
										size={20}
										className="mt-1 text-[#195A00]"
									/>

									<div>
										<h4 className="font-semibold">
											Find Nearby
										</h4>

										<p className="text-sm text-neutral-500">
											Discover available food.
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<Users
										size={20}
										className="mt-1 text-[#195A00]"
									/>

									<div>
										<h4 className="font-semibold">
											Community
										</h4>

										<p className="text-sm text-neutral-500">
											Support local people.
										</p>
									</div>
								</div>
							</div>

							{/* BUTTONS */}

							<div className="mt-12 flex flex-wrap gap-4">
								<button
									className="
										rounded-2xl

										bg-black

										px-6
										py-4

										text-left

										text-white
									"
								>
									<p className="text-xs opacity-70">
										Download on the
									</p>

									<p className="font-semibold">App Store</p>
								</button>

								<button
									className="
										rounded-2xl

										bg-black

										px-6
										py-4

										text-left

										text-white
									"
								>
									<p className="text-xs opacity-70">
										Get it on
									</p>

									<p className="font-semibold">Google Play</p>
								</button>
							</div>

							<div
								className="
									mt-8

									flex
									flex-wrap

									gap-6

									text-sm
									text-neutral-500
								"
							>
								<span>✓ Free to use</span>
								<span>✓ Secure</span>
								<span>✓ Community Driven</span>
							</div>
						</div>

						{/* RIGHT */}

						<div className="relative flex justify-center">
							{/* Phone */}
							{/* Organic Shape */}

							<div
								className="
		absolute

		h-[650px]
		w-[500px]

		bg-[#195A00]/5

		blur-sm
	"
								style={{
									borderRadius:
										"58% 42% 62% 38% / 43% 57% 43% 57%",
								}}
							/>

							<div
								className="
		absolute

		right-10
		top-20

		h-28
		w-28

		rounded-full

		bg-[#195A00]/5
	"
							/>

							<div
								className="
		absolute

		-left-6
		bottom-24

		h-16
		w-16

		rounded-full

		bg-[#195A00]/8
	"
							/>
							<Image
								src="/assets/cellar.png"
								alt="Cellar App"
								width={450}
								height={1300}
								className="
									relative
									z-20

									w-[640px]
                                    h-[700px]
								"
							/>

							{/* CARD 1 */}

							<div
								className="
									absolute

									right-0
									top-32

									z-30

									rounded-3xl

									bg-white

									p-6

									shadow-xl
								"
							>
								<div className="flex items-center gap-4">
									<div
										className="
											flex
											h-12
											w-12

											items-center
											justify-center

											rounded-full

											bg-[#195A00]/10
										"
									>
										<Package
											size={20}
											className="text-[#195A00]"
										/>
									</div>

									<div>
										<h3
											className="
												text-3xl
												font-bold

												text-[#195A00]
											"
										>
											12K+
										</h3>

										<p className="text-neutral-500">
											Meals Shared
										</p>
									</div>
								</div>
							</div>

							{/* CARD 2 */}

							<div
								className="
									absolute

									bottom-20
									right-0

									z-30

									rounded-3xl

									bg-white

									p-6

									shadow-xl
								"
							>
								<div className="flex items-center gap-4">
									<div
										className="
											flex
											h-12
											w-12

											items-center
											justify-center

											rounded-full

											bg-[#195A00]/10
										"
									>
										<Leaf
											size={20}
											className="text-[#195A00]"
										/>
									</div>

									<div>
										<h3
											className="
												text-3xl
												font-bold

												text-[#195A00]
											"
										>
											25 Tons
										</h3>

										<p className="text-neutral-500">
											Food Saved
										</p>
									</div>
								</div>
							</div>

							{/* Decorative Leaf */}

							<div
								className="
									absolute

									right-24
									top-20

									text-[#195A00]/30
								"
							>
								<Leaf size={48} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
