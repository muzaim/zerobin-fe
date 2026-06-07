"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

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
				label: "Contact Support",
				href: "/contact",
			},
		],
	},
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
	const [enterTimeout, setEnterTimeout] = useState<NodeJS.Timeout | null>(null);
	const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

	const handleMouseEnter = (label: string) => {
		if (leaveTimeout) {
			clearTimeout(leaveTimeout);
			setLeaveTimeout(null);
		}

		if (activeDropdown === label) return;

		if (enterTimeout) {
			clearTimeout(enterTimeout);
		}

		// Wait 150ms before showing the menu to prevent accidental brushing
		const timer = setTimeout(() => {
			setActiveDropdown(label);
		}, 150);
		setEnterTimeout(timer);
	};

	const handleMouseLeave = () => {
		if (enterTimeout) {
			clearTimeout(enterTimeout);
			setEnterTimeout(null);
		}

		if (leaveTimeout) {
			clearTimeout(leaveTimeout);
		}

		// Wait 200ms grace period before hiding the menu
		const timer = setTimeout(() => {
			setActiveDropdown(null);
		}, 200);
		setLeaveTimeout(timer);
	};

	return (
		<header className="absolute inset-x-0 top-0 z-[100] w-full bg-transparent py-5">
			<div className="site-shell">
				<nav className="flex items-center justify-between h-16 lg:h-20 relative">
					{/* Logo */}
					<Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
						<span className="font-[var(--font-display)] text-[1.6rem] font-bold italic tracking-tight text-neutral-900">
							Cellar
						</span>
					</Link>

					{/* Desktop Menu */}
					<ul className="hidden lg:flex items-center gap-8">
						{navItems.map((item) => (
							<li
								key={item.label}
								className="relative"
								onMouseEnter={() => handleMouseEnter(item.label)}
								onMouseLeave={handleMouseLeave}
							>
								<button
									className={`
										flex
										items-center
										gap-1
										text-[15px]
										font-medium
										transition-colors
										duration-200
										${activeDropdown === item.label ? "text-[var(--brand)]" : "text-neutral-700 hover:text-[var(--brand)]"}
									`}
								>
									{item.label}

									<ChevronDown
										size={16}
										className={`
											ml-1
											transition-transform
											duration-300
											ease-in-out
											${activeDropdown === item.label ? "rotate-180 text-[var(--brand)]" : "rotate-0 text-neutral-500"}
										`}
									/>
								</button>

								<div
									className={`
										absolute
										left-1/2
										top-full
										z-50
										mt-2
										w-60
										-translate-x-1/2
										rounded-2xl
										border
										border-[var(--line)]
										bg-[var(--surface)]/95
										backdrop-blur-md
										p-2
										shadow-[0_12px_32px_rgba(31,36,22,0.08)]
										transition-all
										duration-250
										ease-out
										${activeDropdown === item.label
											? "visible opacity-100 translate-y-0"
											: "invisible opacity-0 translate-y-2 pointer-events-none"
										}
									`}
								>
									{item.items.map((subItem) => (
										<Link
											key={subItem.href}
											href={subItem.href}
											className="
												block
												rounded-xl
												px-4
												py-3
												text-sm
												font-medium
												text-[var(--foreground)]
												transition-all
												duration-200
												hover:bg-[var(--brand-soft)]
												hover:text-[var(--brand-dark)]
											"
										>
											{subItem.label}
										</Link>
									))}
								</div>
							</li>
						))}
					</ul>

	

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface)]/80 text-[var(--foreground)] hover:text-[var(--brand)] transition duration-200"
						aria-label="Toggle mobile menu"
					>
						{isOpen ? <X size={20} /> : <Menu size={20} />}
					</button>

					{/* Mobile Drawer Overlay */}
					<div
						className={`
							absolute
							left-0
							right-0
							top-full
							z-40
							mt-2
							rounded-2xl
							border
							border-[var(--line)]
							bg-[var(--surface)]/98
							backdrop-blur-lg
							p-6
							shadow-[0_24px_50px_rgba(31,36,22,0.15)]
							transition-all
							duration-300
							ease-in-out
							lg:hidden
							${isOpen
								? "visible translate-y-0 opacity-100"
								: "invisible -translate-y-4 opacity-0 pointer-events-none"
							}
						`}
					>
						<ul className="space-y-4">
							{navItems.map((item) => (
								<li key={item.label} className="border-b border-[var(--line)]/50 pb-3 last:border-0 last:pb-0">
									<button
										onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
										className="flex w-full items-center justify-between text-base font-semibold text-[var(--foreground)] py-1"
									>
										<span>{item.label}</span>
										<ChevronDown
											size={16}
											className={`
												text-[var(--brand)]
												transition-transform
												duration-300
												${openMobileDropdown === item.label ? "rotate-180" : "rotate-0"}
											`}
										/>
									</button>

									<div
										className={`
											transition-all
											duration-300
											ease-in-out
											overflow-hidden
											${openMobileDropdown === item.label
												? "max-h-[300px] opacity-100 mt-2"
												: "max-h-0 opacity-0 pointer-events-none"
											}
										`}
									>
										<div className="space-y-1 pl-4 pb-2">
											{item.items.map((subItem) => (
												<Link
													key={subItem.href}
													href={subItem.href}
													onClick={() => setIsOpen(false)}
													className="
														block
														rounded-lg
														py-2
														px-3
														text-sm
														font-medium
														text-[var(--muted)]
														hover:bg-[var(--brand-soft)]
														hover:text-[var(--brand-dark)]
														transition-all
														duration-200
													"
												>
													{subItem.label}
												</Link>
											))}
										</div>
									</div>
								</li>
							))}
						</ul>

						<div className="mt-6 pt-6 border-t border-[var(--line)]/50 flex flex-col gap-3">
							<Link
								href="/#download"
								onClick={() => setIsOpen(false)}
								className="primary-button w-full text-center text-sm py-2.5 min-h-[44px]"
							>
								Download App
							</Link>
							<Link
								href="/contact"
								onClick={() => setIsOpen(false)}
								className="secondary-button w-full text-center text-sm py-2.5 min-h-[44px]"
							>
								Contact Support
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
