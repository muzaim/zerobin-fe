"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function About() {
	const { language } = useLanguageStore();
	const t = translations[language].about;

	return (
		<section id="about" className="section-pad">
			<div className="site-shell">
				<div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
					<div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
						<Image
							src="/assets/food/share-platter.svg"
							alt="Fresh food ready to be shared"
							width={720}
							height={520}
							className="h-[300px] w-full rounded-[14px] border border-[var(--line)] bg-[var(--surface-soft)] object-cover sm:col-span-2 md:h-[390px]"
						/>
						<Image
							src="/assets/food/community-pickup.svg"
							alt="Community food pickup"
							width={360}
							height={300}
							className="h-[210px] w-full rounded-[14px] border border-[var(--line)] bg-[var(--surface-soft)] object-cover"
						/>
						<Image
							src="/assets/food/sandwich.svg"
							alt="Community food pickup"
							width={360}
							height={300}
							className="h-[210px] w-full rounded-[14px] border border-[var(--line)] bg-[var(--surface-soft)] object-cover"
						/>
					</div>

					<div>
						<p className="eyebrow">{t.eyebrow}</p>
						<h2 className="section-title mt-5">
							{t.title}
						</h2>
						<p className="section-copy mt-6 max-w-2xl">
							{t.desc1}
						</p>
						<p className="section-copy mt-4 max-w-2xl">
							{t.desc2}
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a href="#impact" className="primary-button">
								{t.btnImpact}
							</a>
							<button
								type="button"
								className="secondary-button gap-3"
							>
								<Play size={17} fill="currentColor" />
								{t.btnWatch}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

