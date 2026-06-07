"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ChevronDown } from "lucide-react";

const navItems = [
	{
		label: "About",
		items: [
			{
				label: "About Us",
				href: "/about",
			},
			{
				label: "Our Story",
				href: "/about/story",
			},
			{
				label: "Our Impact",
				href: "/about/impact",
			},
		],
	},
	{
		label: "How It Works",
		items: [
			{
				label: "For Donors",
				href: "/how-it-works/donors",
			},
			{
				label: "For Recipients",
				href: "/how-it-works/recipients",
			},
			{
				label: "Community Guidelines",
				href: "/how-it-works/guidelines",
			},
		],
	},
	{
		label: "Impact",
		items: [
			{
				label: "Food Waste Facts",
				href: "/impact/statistics",
			},
			{
				label: "Success Stories",
				href: "/impact/stories",
			},
			{
				label: "Sustainability Goals",
				href: "/impact/goals",
			},
		],
	},
	{
		label: "FAQ",
		items: [
			{
				label: "General Questions",
				href: "/faq",
			},
			{
				label: "Food Safety",
				href: "/faq/food-safety",
			},
			{
				label: "Contact Support",
				href: "/contact",
			},
		],
	},
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
							<li key={item.label} className="group relative">
								<button
									className="
		flex
		items-center
		gap-1

		text-[15px]
		font-medium

		text-neutral-700

		transition-colors

		group-hover:text-[#195A00]
	"
								>
									{item.label}

									<ChevronDown
										size={16}
										className="
		ml-1

		transition-transform
		duration-300
		delay-75

		ease-in-out

		group-hover:rotate-180
	"
									/>
								</button>

								<div
									className="
									invisible
						
									absolute
									left-1/2
									top-full
						
									mt-4
						
									w-64
						
									-translate-x-1/2
						
									rounded-2xl
						
									border
									border-neutral-100
						
									bg-white
						
									p-2
						
									opacity-0
						
									shadow-xl
						
									transition-all
						
									group-hover:visible
									group-hover:opacity-100
								"
								>
									{item.items.map((subItem) => (
										<Link
											key={subItem.href}
											href={subItem.href}
											className="
											block
						
											rounded-xl
						
											p-3
						
											text-sm
						
											text-neutral-600
						
											hover:bg-neutral-50
											hover:text-[#195A00]
										"
										>
											{subItem.label}
										</Link>
									))}
								</div>
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
