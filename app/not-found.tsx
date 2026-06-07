"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
	useEffect(() => {
		document.title = "404 - Page Not Found — Cellar";
	}, []);

	return (
		<div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-6">
			<div className="max-w-xl w-full text-center">

				{/* Big number */}
				<p className="font-[var(--font-display)] text-[clamp(7rem,22vw,13rem)] font-bold leading-none text-[var(--brand)] opacity-20 select-none">
					404
				</p>

				{/* Message */}
				<div className="-mt-6 sm:-mt-10">
					<p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--brand)]">
						Page not found
					</p>
					<h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mt-4 text-[var(--foreground)] leading-snug">
						This plate is empty.
					</h1>
					<p className="mt-4 text-[var(--muted)] leading-relaxed text-base max-w-sm mx-auto">
						The page you&apos;re looking for seems to have moved, or maybe it was shared with someone else already.
					</p>
				</div>

				{/* Divider */}
				<div className="mt-10 mb-8 border-t border-[var(--line)]" />

				{/* Actions */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link
						href="/"
						className="inline-flex items-center gap-2 primary-button text-sm py-2.5 px-5"
					>
						<ArrowLeft size={15} />
						Back to home
					</Link>
					<Link
						href="/faq"
						className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition"
					>
						Visit FAQ
					</Link>
				</div>

				{/* Subtle footer note */}
				<p className="mt-12 text-xs text-[var(--muted)]/50 font-mono tracking-wide">
					Cellar · Every meal deserves a plate, not a bin.
				</p>

			</div>
		</div>
	);
}
