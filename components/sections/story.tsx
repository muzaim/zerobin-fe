"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function StorySection() {
	const { language } = useLanguageStore();
	const t = translations[language].story;

	return (
		<section className="relative isolate overflow-hidden bg-[var(--brand-dark)] py-20 text-white sm:py-24">
			<Image
				src="/assets/produce/lettuce.png"
				alt=""
				width={1200}
				height={1200}
				className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] opacity-[0.06]"
			/>

			<div className="site-shell">
				<div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
					<div className="max-w-3xl">
						<p className="font-[var(--font-display)] text-lg italic text-[var(--brand-soft)]">
							{t.eyebrow}
						</p>
						<h2 className="display-title mt-4 text-[clamp(2.75rem,7vw,6rem)] text-white">
							{t.title}
						</h2>
					</div>
					<div className="max-w-sm md:text-right">
						<p className="leading-8 text-white/72">
							{t.desc}
						</p>
						<Link href="/#download" className="secondary-button mt-6 bg-white text-[var(--brand-dark)]">
							{t.btnStart}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}


