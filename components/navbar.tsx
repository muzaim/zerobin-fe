"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
	{ label: "About", href: "#about" },
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Impact", href: "#impact" },
	{ label: "FAQ", href: "#faq" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className=" inset-x-0 top-0 -z-1 border-b border-black/5 bg-transparent backdrop-blur-xl">
			<div className="site-shell">
				<nav className="flex h-20 items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-3"
						onClick={() => setIsOpen(false)}
					>
						<span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[var(--brand-dark)] font-bold text-white">
							C
						</span>
						<span className="text-2xl font-black text-[var(--foreground)]">
							Cellar
						</span>
					</Link>

					<ul className="hidden items-center gap-8 lg:flex">
						{navItems.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand-dark)]"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="hidden items-center gap-3 sm:flex">
						<Link href="#download" className="secondary-button">
							Download
						</Link>
						<Link href="#about" className="primary-button gap-2">
							Start sharing
							<ArrowRight size={16} />
						</Link>
					</div>

					<button
						type="button"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						onClick={() => setIsOpen((value) => !value)}
						className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[var(--line)] bg-white text-[var(--foreground)] lg:hidden"
					>
						{isOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</nav>
			</div>

			{isOpen ? (
				<div className="border-t border-[var(--line)] bg-[var(--surface)] lg:hidden">
					<div className="site-shell py-4">
						<div className="grid gap-2">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setIsOpen(false)}
									className="rounded-[8px] px-2 py-3 text-base font-semibold text-[var(--ink-soft)]"
								>
									{item.label}
								</Link>
							))}
							<Link
								href="#download"
								onClick={() => setIsOpen(false)}
								className="primary-button mt-3"
							>
								Download app
							</Link>
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
}
