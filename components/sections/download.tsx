import Image from "next/image";

const steps = [
	{
		step: "01 / Share",
		title: "Post what you have",
		body: "Snap a quick photo, set a pickup window, and add any notes your neighbor should know. Takes about a minute.",
	},
	{
		step: "02 / Discover",
		title: "Find what's nearby",
		body: "Browse the local feed to see surplus meals, garden harvests, and café leftovers being offered a few blocks away.",
	},
	{
		step: "03 / Connect",
		title: "A simple handoff",
		body: "Coordinate by chat, agree on a spot, and close the loop. No marketplace. Just two neighbors.",
	},
];

export default function DownloadApp() {
	return (
		<section id="download" className="section-pad bg-[var(--background)] border-t border-[var(--line)]">
			<div className="site-shell">
				<div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

					{/* LEFT */}
					<div>
						<p className="eyebrow">Get the App</p>

						<h2 className="section-title mt-5">
							Good food, still warm.{" "}
							<span className="text-[var(--brand)]">Ready to share.</span>
						</h2>

						<p className="section-copy mt-6 max-w-xl">
							Cellar is a free, local app for passing surplus food to a neighbor
							before it goes to waste. No fee, no marketplace — just a quieter
							way to let something good keep going.
						</p>

						{/* Steps */}
						<div className="mt-10 border-t border-[var(--line)] pt-8 space-y-0">
							{steps.map((s, i) => (
								<div
									key={s.step}
									className={`flex gap-5 py-5 ${i < steps.length - 1 ? "border-b border-[var(--line)]" : ""}`}
								>
									<span className="font-mono text-[11px] font-bold tracking-widest text-[var(--brand)] uppercase mt-0.5 shrink-0 w-24">
										{s.step}
									</span>
									<div>
										<h4 className="font-bold text-base text-[var(--foreground)]">
											{s.title}
										</h4>
										<p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
											{s.body}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Store Buttons */}
						<div className="mt-10 flex flex-wrap gap-4 items-center">
							<a href="#">
								<Image
									src="/assets/brand/app-store.svg"
									alt="Download on App Store"
									width={160}
									height={48}
									className="h-12 w-auto"
								/>
							</a>
							<a href="#">
								<Image
									src="/assets/brand/google-play.svg"
									alt="Get it on Google Play"
									width={160}
									height={48}
									className="h-12 w-auto"
								/>
							</a>
						</div>

						<div className="mt-6 flex flex-wrap gap-6 text-xs text-[var(--muted)] font-medium">
							<span>✓ Free to download & use</span>
							<span>✓ Works anywhere in your city</span>
							<span>✓ Community-verified listings</span>
						</div>
					</div>

					{/* RIGHT — App Screenshot + Feature Cards */}
					<div className="relative mx-auto w-full max-w-[440px] flex flex-col items-center">

						{/* Soft blob */}
						<div className="absolute right-0 top-10 w-72 h-72 bg-green-100 rounded-full -z-10 opacity-50 blur-2xl pointer-events-none" />

						{/* App screenshot — no phone frame */}
						<div className="relative w-[260px] sm:w-[310px] lg:w-[340px] z-10">
							<Image
								src="/assets/app/cellar-screen.png"
								alt="Cellar App Interface"
								width={600}
								height={1220}
								priority
								className="w-full h-auto"
							/>

							{/* Feature card — top left, outside phone */}
							<div className="absolute -left-[110px] top-[60px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">📍</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">Local map view</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">See food nearby</p>
							</div>

							{/* Feature card — top right, outside phone */}
							<div className="absolute -right-[110px] top-[60px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">🛡️</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">Safety verified</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">Community checked</p>
							</div>

							{/* Feature card — bottom left */}
							<div className="absolute -left-[110px] bottom-[100px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">💬</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">Direct chat</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">No middleman</p>
							</div>

							{/* Feature card — bottom right */}
							<div className="absolute -right-[110px] bottom-[100px] w-[100px] bg-white border border-[var(--line)] rounded-2xl p-3 shadow-[0_8px_20px_rgba(31,36,22,0.08)] hidden sm:block">
								<span className="text-xl">🌱</span>
								<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)] leading-tight">Impact log</p>
								<p className="mt-0.5 text-[10px] text-[var(--muted)]">Track your sharing</p>
							</div>

							{/* Active listing badge — floats above phone */}
							<div className="absolute -right-[80px] sm:-right-[90px] top-[200px] z-20 flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 py-2.5 rounded-2xl border border-[var(--line)] shadow-[0_10px_25px_rgba(31,36,22,0.08)] hidden sm:flex">
								<span className="h-2 w-2 rounded-full bg-[var(--brand)] animate-pulse shrink-0" />
								<div>
									<p className="text-[10px] font-bold text-[var(--brand)] font-mono uppercase tracking-wider">New listing</p>
									<p className="text-[11px] font-bold text-[var(--foreground)]">250m away</p>
								</div>
							</div>
						</div>

						{/* Mobile feature grid — shown only on small screens */}
						<div className="mt-10 grid grid-cols-2 gap-3 w-full sm:hidden">
							{[
								{ icon: "📍", title: "Local map view", desc: "See food nearby" },
								{ icon: "🛡️", title: "Safety verified", desc: "Community checked" },
								{ icon: "💬", title: "Direct chat", desc: "No middleman" },
								{ icon: "🌱", title: "Impact log", desc: "Track your sharing" },
							].map((f) => (
								<div key={f.title} className="bg-white border border-[var(--line)] rounded-2xl p-3 shadow-sm">
									<span className="text-xl">{f.icon}</span>
									<p className="mt-1.5 text-[11px] font-bold text-[var(--foreground)]">{f.title}</p>
									<p className="mt-0.5 text-[10px] text-[var(--muted)]">{f.desc}</p>
								</div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
