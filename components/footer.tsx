import Link from "next/link";
import { ArrowRight } from "lucide-react";

const platformLinks = [
	{ label: "About", href: "#about" },
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Impact", href: "#impact" },
	{ label: "Download", href: "#download" },
];

const resourceLinks = ["FAQ", "Food safety", "Guidelines", "Community notes"];

export default function Footer() {
	return (
		<footer className="bg-[var(--brand-dark)] text-white">
			<div className="site-shell py-16 sm:py-20">
				<div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
					<div>
						<Link href="/" className="flex items-center gap-3">
							<span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white font-bold text-[var(--brand-dark)]">
								C
							</span>
							<div>
								<h2 className="text-2xl font-black">Cellar</h2>
								<p className="text-sm text-white/52">
									Food sharing platform
								</p>
							</div>
						</Link>
						<p className="mt-6 max-w-sm leading-8 text-white/65">
							Connecting surplus food with nearby people through simple,
							respectful pickup flows.
						</p>
						<div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-white/58">
							<a href="#">Instagram</a>
							<a href="#">LinkedIn</a>
							<a href="#">GitHub</a>
						</div>
					</div>

					<div>
						<h3 className="font-bold">Platform</h3>
						<div className="mt-5 grid gap-3 text-white/62">
							{platformLinks.map((link) => (
								<a key={link.href} href={link.href} className="hover:text-white">
									{link.label}
								</a>
							))}
						</div>
					</div>

					<div>
						<h3 className="font-bold">Resources</h3>
						<div className="mt-5 grid gap-3 text-white/62">
							{resourceLinks.map((link) => (
								<a key={link} href="#" className="hover:text-white">
									{link}
								</a>
							))}
						</div>
					</div>

					<div>
						<h3 className="font-bold">Stay updated</h3>
						<p className="mt-5 leading-7 text-white/62">
							Get product notes and community stories from Cellar.
						</p>
						<form className="mt-6 flex overflow-hidden rounded-[8px] border border-white/12 bg-white/7">
							<input
								type="email"
								placeholder="Email address"
								aria-label="Email address"
								className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/36"
							/>
							<button
								type="submit"
								aria-label="Subscribe"
								className="flex w-12 items-center justify-center bg-white text-[var(--brand-dark)]"
							>
								<ArrowRight size={18} />
							</button>
						</form>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
					<p>(c) 2026 Cellar. All rights reserved.</p>
					<p>Every meal deserves a plate, not a bin.</p>
				</div>
			</div>
		</footer>
	);
}
