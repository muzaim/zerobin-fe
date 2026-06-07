"use client";

import { useState } from "react";

const faqs = [
	{
		question: "Can I share homemade meals?",
		answer: "Yes. Homemade meals are welcome when they are fresh, clearly described, and shared with ingredient or allergen notes.",
	},
	{
		question: "What happens if nobody claims my food?",
		answer: "You can adjust the pickup window, update the listing, or remove it. Cellar keeps the listing under your control.",
	},
	{
		question: "Is Cellar free to use?",
		answer: "Yes. Cellar is centered on reducing waste and helping nearby people, not selling leftover food.",
	},
	{
		question: "Can restaurants and cafes join?",
		answer: "Yes. Local food businesses can share surplus items, set pickup rules, and keep recurring handoffs easy to manage.",
	},
	{
		question: "Do I have to meet someone at my home?",
		answer: "No. You can choose a public pickup point or another arrangement that feels comfortable for both sides.",
	},
];

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id="faq" className="section-pad bg-[var(--surface-soft)]">
			<div className="site-shell">
				<div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
					<div className="lg:sticky lg:top-28 lg:h-fit">
						<p className="eyebrow">Questions before sharing</p>
						<h2 className="section-title mt-5">
							The basics should be clear.
						</h2>
						<p className="section-copy mt-6 max-w-md">
							Food sharing works best when people understand the expectations
							before the first pickup.
						</p>
						<div className="mt-8 border-l-2 border-[var(--brand)] pl-5">
							<p className="text-sm text-[var(--muted)]">
								Still deciding?
							</p>
							<a
								href="mailto:hello@cellar.id"
								className="mt-1 inline-block font-bold text-[var(--brand-dark)]"
							>
								hello@cellar.id
							</a>
						</div>
					</div>

					<div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
						{faqs.map((faq, index) => {
							const isOpen = openIndex === index;
							return (
								<div key={faq.question} className="group">
									<button
										onClick={() => toggleFaq(index)}
										aria-expanded={isOpen}
										className="w-full text-left flex cursor-pointer items-center justify-between gap-6 py-6 outline-none focus:text-[#195A00] transition duration-200"
									>
										<h3 className="text-xl font-bold leading-snug text-[var(--foreground)] sm:text-2xl font-[var(--font-display)]">
											{faq.question}
										</h3>
										<span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[var(--line)] text-xl text-[var(--brand-dark)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
											+
										</span>
									</button>
									<div
										className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
									>
										<div className="overflow-hidden">
											<p className="max-w-2xl pb-7 text-base leading-8 text-[var(--muted)] sm:text-lg">
												{faq.answer}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
