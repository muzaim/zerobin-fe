import Image from "next/image";
import { Check } from "lucide-react";

export default function Impact() {
	return (
		<section className="relative py-32">
			<div className="mx-auto max-w-7xl px-8">
				<div className="grid items-center gap-20 lg:grid-cols-2">
					{/* LEFT */}

					<div>
						<div className="flex items-center gap-4">
							<span
								className="
									font-serif
									text-lg
									italic
									text-[#195A00]
								"
							>
								Built For Everyone
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
							Food belongs on tables,
							<br />
							not in trash bins.
						</h2>

						<p
							className="
								mt-8

								max-w-xl

								text-lg
								leading-8

								text-neutral-500
							"
						>
							Whether you're a household with extra meals, a
							restaurant with surplus inventory, or a community
							organization helping others, Cellar makes it easy to
							share food with people who can use it.
						</p>

						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							<div className="flex items-center gap-3">
								<div
									className="
										flex
										h-8
										w-8
										items-center
										justify-center

										rounded-full

										bg-[#195A00]/10

										text-[#195A00]
									"
								>
									<Check size={16} />
								</div>

								<span className="font-medium text-neutral-700">
									Households
								</span>
							</div>

							<div className="flex items-center gap-3">
								<div
									className="
										flex
										h-8
										w-8
										items-center
										justify-center

										rounded-full

										bg-[#195A00]/10

										text-[#195A00]
									"
								>
									<Check size={16} />
								</div>

								<span className="font-medium text-neutral-700">
									Restaurants
								</span>
							</div>

							<div className="flex items-center gap-3">
								<div
									className="
										flex
										h-8
										w-8
										items-center
										justify-center

										rounded-full

										bg-[#195A00]/10

										text-[#195A00]
									"
								>
									<Check size={16} />
								</div>

								<span className="font-medium text-neutral-700">
									Cafés
								</span>
							</div>

							<div className="flex items-center gap-3">
								<div
									className="
										flex
										h-8
										w-8
										items-center
										justify-center

										rounded-full

										bg-[#195A00]/10

										text-[#195A00]
									"
								>
									<Check size={16} />
								</div>

								<span className="font-medium text-neutral-700">
									Community Groups
								</span>
							</div>
						</div>
					</div>

					{/* RIGHT */}

					<div className="relative">
						<div
							className="
								absolute

								-left-6
								-top-6

								h-32
								w-32

								rounded-full

								bg-[#195A00]/10
							"
						/>

						<div className="relative flex justify-center">
							{/* Bubble kiri atas */}

							<div
								className="
	absolute
	left-0
	top-10

	h-32
	w-32

	rounded-full

	bg-[#195A00]/10

	blur-sm
  "
							/>

							{/* Bubble kanan bawah */}

							<div
								className="
	absolute
	bottom-0
	right-10

	h-44
	w-44

	rounded-full

	bg-[#195A00]/10
  "
							/>

							{/* Outline blob */}

							<div
								className="
	absolute

	inset-0

	scale-110

	border-2
	border-[#195A00]/30
  "
								style={{
									borderRadius:
										"45% 55% 60% 40% / 45% 40% 60% 55%",
								}}
							/>

							{/* Main Image */}

							<div
								className="
	relative
	z-10

	overflow-hidden
  "
								style={{
									borderRadius:
										"45% 55% 60% 40% / 45% 40% 60% 55%",
								}}
							>
								<Image
									src="/assets/chef2.jpg"
									alt="Community"
									width={700}
									height={700}
									className="
	  h-[520px]
	  w-full

	  object-cover
	"
								/>
							</div>

							{/* Dots */}

							<div
								className="
	absolute
	top-12
	right-28

	flex
	gap-3
  "
							>
								<span className="h-2 w-2 rounded-full bg-[#195A00]/30" />
								<span className="h-2 w-2 rounded-full bg-[#195A00]/30" />
								<span className="h-2 w-2 rounded-full bg-[#195A00]/30" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
