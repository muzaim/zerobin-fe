"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = ["Features", "Solutions", "Pricing", "Resources"];

export default function Navbar() {
	return (
		<header
			className=" absolute
    inset-x-0
    top-0
    z-50"
		>
			<div className="mx-auto max-w-7xl px-8">
				<nav className="flex h-24 items-center justify-between">
					{/* Logo */}
					<Link href="/" className="group flex items-center gap-3">
						<span
							className="
                font-[var(--font-manrope)]
                text-3xl
                font-extrabold
                tracking-tight
                text-neutral-900
              "
						>
							Cellar
						</span>
					</Link>

					{/* Center Menu */}
					<ul className="hidden items-center gap-12 lg:flex">
						<li>
							<Link
								href="/"
								className="
                  relative
                  text-[15px]
                  font-bold
                  text-[#14532D]
                "
							>
								Home
								<span
									className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-full
                    rounded-full
                    bg-[#14532D]
                  "
								/>
							</Link>
						</li>

						{navItems.map((item) => (
							<li key={item}>
								<Link
									href="#"
									className="
                    group
                    relative
                    text-[15px]
                    font-semibold
                    tracking-tight
                    text-neutral-500
                    transition-all
                    duration-300
                    hover:text-[#14532D]
                  "
								>
									{item}

									<span
										className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-[#14532D]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
									/>
								</Link>
							</li>
						))}
					</ul>

					{/* Right Side */}
					<div className="flex items-center gap-6">
						<button
							className="
                text-[15px]
                font-semibold
                text-neutral-600
                transition
                hover:text-[#14532D]
              "
						>
							Login
						</button>

						<button
							className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-[#14532D]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-green-900/20
              "
						>
							Start Free
							<ArrowRight
								size={16}
								className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
							/>
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
