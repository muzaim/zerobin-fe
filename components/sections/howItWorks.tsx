"use client";

import Image from "next/image";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function HowItWorks() {
	const language = useCurrentLanguage();
	const t = translations[language].howItWorks;

	const stepsData = [
		{
			step: "01",
			title: t.steps[0].title,
			description: t.steps[0].desc,
			image: "/assets/food/list-food.svg",
			alt: "Food listing illustration",
		},
		{
			step: "02",
			title: t.steps[1].title,
			description: t.steps[1].desc,
			image: "/assets/food/match-food.svg",
			alt: "Food pickup illustration",
		},
		{
			step: "03",
			title: t.steps[2].title,
			description: t.steps[2].desc,
			image: "/assets/food/share-impact.svg",
			alt: "Community impact illustration",
		},
	];

	return (
		<section id="how-it-works" className="section-pad">
			<div className="site-shell">
				<div className="mx-auto max-w-3xl text-center">
					<p className="eyebrow centered justify-center">
						{t.eyebrow}
					</p>
					<h2 className="section-title mt-5">
						{t.title}
					</h2>
					<p className="section-copy mt-6">
						{t.desc}
					</p>
				</div>

				<div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
					{stepsData.map((item) => (
						<article
							key={item.step}
							className="group border-t border-[var(--line)] bg-[rgb(255_253_247_/_0.52)] p-5 transition hover:bg-[var(--surface)] sm:p-6"
						>
							<div className="flex items-start justify-between gap-4">
								<span className="font-[var(--font-display)] text-5xl font-semibold text-[var(--brand-dark)]">
									{item.step}
								</span>
								<Image
									src={item.image}
									alt={item.alt}
									width={180}
									height={140}
									className="h-28 w-32 object-contain transition "
								/>
							</div>
							<h3 className="mt-7 text-2xl font-bold text-[var(--foreground)]">
								{item.title}
							</h3>
							<p className="mt-4 leading-7 text-[var(--muted)]">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

