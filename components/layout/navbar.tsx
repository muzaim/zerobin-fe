"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Download } from "lucide-react";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function Navbar() {
	const pathname = usePathname();
	const { setLanguage } = useLanguageStore();
	const language = useCurrentLanguage();
	const t = translations[language].navbar;

	const isItemActive = (item: { items: { href: string }[] }) => {
		return item.items.some((subItem) => pathname === subItem.href);
	};

	const isBlogActive = pathname === "/blog" || pathname?.startsWith("/blog/");

	const navItems = [
		{
			label: t.about,
			items: [
				{
					label: t.aboutUs,
					href: "/about",
				},
				{
					label: t.ourStory,
					href: "/about/story",
				},
				{
					label: t.ourImpact,
					href: "/about/impact",
				},
			],
		},
		{
			label: t.howItWorks,
			items: [
				{
					label: t.forDonors,
					href: "/how-it-works/donors",
				},
				{
					label: t.forRecipients,
					href: "/how-it-works/recipients",
				},
				{
					label: t.communityGuidelines,
					href: "/how-it-works/guidelines",
				},
			],
		},
		{
			label: t.impact,
			items: [
				{
					label: t.foodWasteFacts,
					href: "/impact/statistics",
				},
				{
					label: t.successStories,
					href: "/impact/stories",
				},
				{
					label: t.sustainabilityGoals,
					href: "/impact/goals",
				},
			],
		},
		{
			label: t.faq,
			items: [
				{
					label: t.generalQuestions,
					href: "/faq",
				},
				{
					label: t.foodSafetyDisclaimer,
					href: "/safety",
				},
				{
					label: t.contactSupport,
					href: "/contact",
				},
			],
		},
	];

	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
	const [enterTimeout, setEnterTimeout] = useState<NodeJS.Timeout | null>(null);
	const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const saved = localStorage.getItem("zerobin-language") as "en" | "id";
		if (saved && (saved === "en" || saved === "id")) {
			setLanguage(saved);
		}
	}, [setLanguage]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			document.body.style.height = "100vh";
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.style.overflow = "";
			document.body.style.height = "";
			document.body.classList.remove("overflow-hidden");
		}
		return () => {
			document.body.style.overflow = "";
			document.body.style.height = "";
			document.body.classList.remove("overflow-hidden");
		};
	}, [isOpen]);

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
		<header className={`inset-x-0 top-0 z-[100] w-full bg-transparent py-5 ${isOpen ? "fixed" : "absolute"}`}>
			<div className="site-shell">
				<nav className="flex items-center justify-between h-16 lg:h-20 relative">
					{/* Logo */}
					<Link href="/" className="flex items-center relative z-50" onClick={() => setIsOpen(false)}>
						<span className="font-[var(--font-display)] text-[1.6rem] font-bold italic tracking-tight text-neutral-900">
							ZeroBin
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
										transition-colors
										duration-200
										cursor-pointer
										${isItemActive(item) ? "font-semibold" : "font-medium"}
										${activeDropdown === item.label || isItemActive(item) ? "text-[var(--brand)]" : "text-neutral-700 hover:text-[var(--brand)]"}
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
											${activeDropdown === item.label ? "rotate-180 text-[var(--brand)]" : isItemActive(item) ? "rotate-0 text-[var(--brand)]" : "rotate-0 text-neutral-500"}
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
										flex
										flex-col
										gap-1
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
							</li>
						))}
						<li key="Blog">
							<Link
								href="/blog"
								className={`
									text-[15px]
									font-medium
									transition-colors
									duration-200
									${isBlogActive ? "text-[var(--brand)] font-semibold" : "text-neutral-700 hover:text-[var(--brand)]"}
								`}
							>
								{t.blog}
							</Link>
						</li>
						<li key="Language" className="flex items-center">
							<button
								onClick={() => setLanguage(language === "en" ? "id" : "en")}
								className="
									flex
									items-center
									gap-1.5
									px-3
									py-1.5
									rounded-full
									border
									border-[var(--line)]
									bg-[var(--surface-soft)]/50
									hover:bg-[var(--brand-soft)]/60
									hover:border-[var(--brand)]/30
									text-neutral-700
									hover:text-[var(--brand)]
									transition-all
									duration-300
									text-[13px]
									font-medium
									cursor-pointer
								"
								aria-label="Toggle language"
							>
								<Globe size={14} className="text-neutral-400" />
								<span className="font-mono font-bold tracking-wider">{language.toUpperCase()}</span>
							</button>
						</li>
						<li key="Download">
							<Link
								href="/#download"
								className="download-nav-button gap-2"
							>
								<Download size={15} />
								{t.downloadApp}
							</Link>
						</li>
					</ul>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface)]/80 text-[var(--foreground)] hover:text-[var(--brand)] transition duration-200 cursor-pointer relative z-50 group"
						aria-label="Toggle mobile menu"
					>
						<div className="relative w-5 h-5 flex flex-col justify-center items-center">
							<span
								className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${
									isOpen ? "rotate-45" : "-translate-y-1.5"
								}`}
							/>
							<span
								className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${
									isOpen ? "opacity-0 translate-x-2" : ""
								}`}
							/>
							<span
								className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${
									isOpen ? "-rotate-45" : "translate-y-1.5"
								}`}
							/>
						</div>
					</button>

					{/* Mobile Drawer Overlay */}
					<div
						className={`
							fixed
							inset-0
							z-40
							h-screen
							w-screen
							bg-[var(--surface)]/98
							backdrop-blur-xl
							overflow-y-auto
							transition-all
							duration-300
							ease-in-out
							lg:hidden
							${isOpen
								? "visible opacity-100 translate-y-0"
								: "invisible opacity-0 -translate-y-4 pointer-events-none"
							}
						`}
					>
						<div className="site-shell pt-24 pb-12">
							<ul className="space-y-2">
								{navItems.map((item) => (
									<li key={item.label} className="border-b border-[var(--line)]/50 py-3.5">
										<button
											onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
											className={`flex w-full items-center justify-between text-lg font-semibold cursor-pointer ${isItemActive(item) ? "text-[var(--brand)] font-bold" : "text-[var(--foreground)]"}`}
										>
											<span>{item.label}</span>
											<ChevronDown
												size={18}
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
													? "max-h-[300px] opacity-100 mt-3"
													: "max-h-0 opacity-0 pointer-events-none"
												}
											`}
										>
											<div className="space-y-2 pl-4 pb-2">
												{item.items.map((subItem) => (
													<Link
														key={subItem.href}
														href={subItem.href}
														onClick={() => setIsOpen(false)}
														className="
															block
															rounded-xl
															py-2.5
															px-4
															text-[15px]
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
								<li key="Blog" className="border-b border-[var(--line)]/50 py-3.5">
									<Link
										href="/blog"
										onClick={() => setIsOpen(false)}
										className={`
											block text-lg font-semibold transition-colors
											${isBlogActive ? "text-[var(--brand)] font-bold" : "text-[var(--foreground)] hover:text-[var(--brand)]"}
										`}
									>
										{t.blog}
									</Link>
								</li>
								<li key="Language" className="flex items-center justify-between py-3.5 border-b border-[var(--line)]/50">
									<div className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
										<Globe size={18} className="text-[var(--brand)]" />
										<span>Language / Bahasa</span>
									</div>
									<button
										onClick={() => setLanguage(language === "en" ? "id" : "en")}
										className="
											flex
											items-center
											gap-1.5
											px-3
											py-1.5
											rounded-full
											border
											border-[var(--line)]
											bg-[var(--surface-soft)]/50
											hover:bg-[var(--brand-soft)]/60
											hover:border-[var(--brand)]/30
											text-neutral-700
											hover:text-[var(--brand)]
											transition-all
											duration-300
											text-[13px]
											font-medium
											cursor-pointer
										"
										aria-label="Toggle language"
									>
										<Globe size={14} className="text-neutral-400" />
										<span className="font-mono font-bold tracking-wider">{language.toUpperCase()}</span>
									</button>
								</li>
							</ul>

							<div className="mt-8 flex flex-col gap-3">
								<Link
									href="/#download"
									onClick={() => setIsOpen(false)}
									className="download-nav-button w-full gap-2 !py-3.5 text-base flex items-center justify-center"
								>
									<Download size={18} />
									{t.downloadApp}
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
