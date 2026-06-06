"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
	{ label: "About", href: "#about" },
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Impact", href: "#impact" },
	{ label: "FAQ", href: "#faq" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-[100] w-full bg-transparent">
			<div className="site-shell">
				<nav className="flex h-24 items-center justify-between">
					{/* Logo */}

					<Link href="/" className="flex items-center gap-3">
						{/* <Image
							src="/logo.svg"
							alt="Cellar"
							width={42}
							height={42}
						/> */}

						<span className="text-2xl font-bold text-neutral-900">
							Cellar
						</span>
					</Link>

					{/* Menu */}

					<ul className="hidden lg:flex items-center gap-10">
						{navItems.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="
									relative
	
									text-[15px]
									font-medium
	
									text-neutral-700
	
									transition
	
									hover:text-[#195A00]
								"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					{/* Right */}

					<div className="hidden lg:flex items-center gap-6">
						<Link
							href="#download"
							className="
							text-neutral-700
	
							transition
	
							hover:text-[#195A00]
						"
						>
							Download
						</Link>

						<Link
							href="#contact"
							className="
							text-neutral-700
	
							transition
	
							hover:text-[#195A00]
						"
						>
							Contact
						</Link>
					</div>

					{/* Mobile */}

					<button
						onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>
			</div>
		</header>
	);
}
