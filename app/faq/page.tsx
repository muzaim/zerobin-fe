"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
	{
		question: "What is Cellar, exactly?",
		answer: "Cellar is a community utility app designed to stop good food from ending up in trash bins. It connects neighbors who have surplus food—whether that's fresh garden tomatoes, leftover catering, or extra groceries—with people nearby who are happy to eat it.",
	},
	{
		question: "Who is this app for?",
		answer: "Everyone. It’s for home cooks who accidentally made a double batch of lasagna, gardeners with too many pumpkins, cafes with extra pastries at closing time, or anyone who hates seeing food go to waste.",
	},
	{
		question: "Is there any cost or catch?",
		answer: "No catch, and no cost. Everything listed on Cellar must be shared for free. We do not run ads, and we do not charge membership fees. This is purely a neighborhood safety net and climate utility.",
	},
	{
		question: "How does the handoff work?",
		answer: "Once a neighbor requests your listing and you approve it, you coordinate details through the in-app chat. Some prefer leaving a bag on their porch or gate, meeting in a building lobby, or handing it over directly at a public park. Choose whatever feels safe and comfortable.",
	},
	{
		question: "Can I list raw ingredients or just cooked meals?",
		answer: "Both! You can list fresh garden produce, unopened pantry staples (cans, flour, pasta), extra eggs, or fully cooked home meals. The only rule is: if you wouldn't feed it to your own friends or family, please don't share it here.",
	},
	{
		question: "How do you handle privacy and safety?",
		answer: "Your exact address is never shown publicly. The map only displays a general radius (about a 5-minute walk) around your location. The exact pickup spot is only revealed to the recipient after you explicitly accept their request in the app.",
	},
];

export default function GeneralFaq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">FAQ</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							Everything you need to <span className="text-[#195A00]">know about Cellar.</span>
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							Have questions about how sharing works, privacy, or who can join? We’ve gathered the most common questions from our community here.
						</p>
					</div>
				</div>
			</section>

			{/* FAQ Accordions */}
			<section className="py-8">
				<div className="site-shell">
					<div className="divide-y divide-[var(--line)] border-y border-[var(--line)] max-w-3xl">
						{faqs.map((faq, index) => {
							const isOpen = openIndex === index;
							return (
								<div key={faq.question} className="group">
									<button
										onClick={() => toggleFaq(index)}
										aria-expanded={isOpen}
										className="w-full text-left flex cursor-pointer items-center justify-between gap-6 py-6 outline-none focus:text-[#195A00] transition duration-200"
									>
										<h3 className="text-lg font-bold leading-snug text-[var(--foreground)] sm:text-xl font-[var(--font-display)]">
											{faq.question}
										</h3>
										<span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-[var(--line)] text-lg text-[var(--brand-dark)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
											+
										</span>
									</button>
									<div
										className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out delay-150 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
									>
										<div className="overflow-hidden">
											<p className="pb-7 text-sm sm:text-base leading-relaxed text-[var(--muted)] max-w-2xl">
												{faq.answer}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Simple contact nudge */}
			<section className="py-10 border-t border-[var(--line)]">
				<div className="site-shell flex flex-wrap items-center justify-between gap-4">
					<p className="text-sm text-[var(--muted)]">Still have a question? We're a message away.</p>
					<Link href="/contact" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand)] transition">
						Contact support →
					</Link>
				</div>
			</section>
		</div>
	);
}
