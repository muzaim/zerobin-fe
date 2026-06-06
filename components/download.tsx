import Image from "next/image";
import { Download, Leaf, MapPin, Package, Users } from "lucide-react";

export default function DownloadApp() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-7xl px-8">
				<div
					className="
					relative
	
					overflow-hidden
	
					rounded-[48px]
	
	
					px-12
					py-16
	
					lg:px-20
					lg:py-20
				"
				>
					<div className="grid items-center gap-16 lg:grid-cols-2">
						{/* LEFT */}

						<div>
							<div className="flex items-center gap-3">
								<div
									className="
									flex
									h-12
									w-12
	
									items-center
									justify-center
	
									rounded-2xl
	
									bg-[#195A00]/10
								"
								>
									<Download
										size={20}
										className="text-[#195A00]"
									/>
								</div>

								<span
									className="
									font-semibold
	
									tracking-[0.2em]
	
									text-[#195A00]
								"
								>
									DOWNLOAD APP
								</span>
							</div>

							<h2
								className="
								mt-8
	
								text-6xl
								font-bold
	section-title
								leading-tight
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
	section-copy 
								text-neutral-500
							"
							>
								Join thousands of people using Cellar to share
								surplus food, help others, and build a stronger
								community.
							</p>

							{/* FEATURES */}

							<div className="mt-12 grid grid-cols-3 gap-6">
								<div>
									<div
										className="
										flex
										h-16
										w-16
	
										items-center
										justify-center
	
										rounded-3xl
	
										bg-[#195A00]/10
									"
									>
										<Package className="text-[#195A00]" />
									</div>

									<h4 className="mt-5 font-semibold">
										Share Food
									</h4>

									<p className="mt-2 text-sm text-neutral-500">
										List extra meals and help those in need.
									</p>
								</div>

								<div>
									<div
										className="
										flex
										h-16
										w-16
	
										items-center
										justify-center
	
										rounded-3xl
	
										bg-[#195A00]/10
									"
									>
										<MapPin className="text-[#195A00]" />
									</div>

									<h4 className="mt-5 font-semibold">
										Find Nearby
									</h4>

									<p className="mt-2 text-sm text-neutral-500">
										Discover food available in your area.
									</p>
								</div>

								<div>
									<div
										className="
										flex
										h-16
										w-16
	
										items-center
										justify-center
	
										rounded-3xl
	
										bg-[#195A00]/10
									"
									>
										<Users className="text-[#195A00]" />
									</div>

									<h4 className="mt-5 font-semibold">
										Community
									</h4>

									<p className="mt-2 text-sm text-neutral-500">
										Every meal shared makes a difference.
									</p>
								</div>
							</div>

							{/* STORE */}

							<div className="mt-12 flex flex-wrap gap-4">
								<Image
									src="/assets/app-store.svg"
									alt=""
									width={170}
									height={52}
								/>

								<Image
									src="/assets/google-play.svg"
									alt=""
									width={170}
									height={52}
								/>
							</div>

							<div className="mt-8 flex flex-wrap gap-8 text-sm text-neutral-500">
								<span>✓ Free to download</span>

								<span>✓ Safe & Secure</span>

								<span>✓ Easy to use</span>
							</div>
						</div>

						{/* RIGHT */}

						<div className="relative flex justify-center">
							{/* BLOB */}

							<div
								className="
								absolute
	
								h-[620px]
								w-[620px]
	
								rounded-[45%_55%_50%_50%]
	
								bg-[#195A00]/5
							"
							/>

							{/* PHONE */}

							<Image
								src="/assets/app/cellar-screen.png"
								alt="Cellar App"
								width={520}
								height={900}
								className="relative z-20"
							/>

							{/* CARD 1 */}

							<div
								className="
								absolute
	
								right-0
								top-40
	
								z-30
	
								rounded-3xl
	
								bg-white
	
								p-6
	
								shadow-xl
							"
							>
								<p
									className="
									text-4xl
									font-bold
	
									text-[#195A00]
								"
								>
									12K+
								</p>

								<p className="mt-2 text-neutral-600">
									Meals Shared
								</p>
							</div>

							{/* CARD 2 */}

							<div
								className="
								absolute
	
								bottom-32
								right-0
	
								z-30
	
								rounded-3xl
	
								bg-white
	
								p-6
	
								shadow-xl
							"
							>
								<p
									className="
									text-4xl
									font-bold
	
									text-[#195A00]
								"
								>
									25 Tons
								</p>

								<p className="mt-2 text-neutral-600">
									Food Saved
								</p>
							</div>

							{/* LEAFS */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
