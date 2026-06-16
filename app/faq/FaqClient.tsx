"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguageStore } from "@/lib/store";

const faqsBilingual = [
	{
		category: "about",
		en: {
			question: "What is ZeroBin, exactly?",
			answer: "ZeroBin is a community utility app designed to stop good food from ending up in trash bins. It connects neighbors who have surplus food—whether that's fresh garden tomatoes, leftover catering, or extra groceries—with people nearby who are happy to eat it.",
		},
		id: {
			question: "Apa itu ZeroBin sebenarnya?",
			answer: "ZeroBin adalah aplikasi komunitas yang dirancang untuk mencegah makanan layak konsumsi terbuang di tong sampah. Kami menghubungkan tetangga yang memiliki kelebihan makanan—baik itu tomat segar hasil kebun, sisa makanan katering, atau kelebihan belanjaan—dengan orang-orang di sekitar yang senang menyantapnya.",
		}
	},
	{
		category: "about",
		en: {
			question: "Who is this app for?",
			answer: "Everyone. It’s for home cooks who accidentally made a double batch of lasagna, gardeners with too many pumpkins, cafes with extra pastries at closing time, or anyone who hates seeing food go to waste.",
		},
		id: {
			question: "Untuk siapa aplikasi ini?",
			answer: "Semua orang. Aplikasi ini cocok bagi masakan rumah tangga yang tidak sengaja membuat lasagna porsi ganda, pekebun yang kelebihan buah labu, kafe yang memiliki sisa kue saat jam tutup, atau siapa saja yang tidak suka melihat makanan terbuang sia-sia.",
		}
	},
	{
		category: "about",
		en: {
			question: "Is there any cost or catch?",
			answer: "No catch, and no cost. Everything listed on ZeroBin must be shared for free. We do not run ads, and we do not charge membership fees. This is purely a neighborhood safety net and climate utility.",
		},
		id: {
			question: "Apakah ada biaya atau ketentuan tersembunyi?",
			answer: "Sama sekali tidak ada ketentuan tersembunyi dan 100% gratis. Segala hal yang diunggah di ZeroBin harus dibagikan secara gratis. Kami tidak memasang iklan dan tidak mengenakan biaya keanggotaan. Gerakan ini murni jaring pengaman sosial lingkungan dan upaya menjaga iklim.",
		}
	},
	{
		category: "how-it-works",
		en: {
			question: "How does the handoff work?",
			answer: "Once a neighbor requests your listing and you approve it, you coordinate details through the in-app chat. Some prefer leaving a bag on their porch or gate, meeting in a building lobby, or handing it over directly at a public park. Choose whatever feels safe and comfortable.",
		},
		id: {
			question: "Bagaimana cara kerja serah-terima makanannya?",
			answer: "Setelah tetangga sekitar meminta makanan Anda dan Anda menyetujuinya, Anda dapat mengoordinasikan rincian penjemputan melalui obrolan chat di aplikasi. Beberapa orang lebih suka meletakkan tas di teras atau pagar rumah, bertemu di lobi gedung, atau menyerahkannya secara langsung di taman umum. Pilih cara apa saja yang dirasa aman dan nyaman bagi kedua belah pihak.",
		}
	},
	{
		category: "how-it-works",
		en: {
			question: "Can I list raw ingredients or just cooked meals?",
			answer: "Both! You can list fresh garden produce, unopened pantry staples (cans, flour, pasta), extra eggs, or fully cooked home meals. The only rule is: if you wouldn't feed it to your own friends or family, please don't share it here.",
		},
		id: {
			question: "Apakah saya bisa membagikan bahan mentah atau hanya makanan matang?",
			answer: "Dua-duanya bisa! Anda bisa membagikan hasil kebun segar, bahan makanan kering di dapur yang belum dibuka (makanan kaleng, tepung, pasta), kelebihan telur, atau masakan rumah yang sudah matang sepenuhnya. Satu-satunya aturan emas kami: jika Anda sendiri tidak bersedia menyajikannya kepada teman atau keluarga Anda sendiri, harap tidak membagikannya di sini.",
		}
	},
	{
		category: "safety",
		en: {
			question: "How do you handle privacy and safety?",
			answer: "Your exact address is never shown publicly. The map only displays a general radius (about a 5-minute walk) around your location. The exact pickup spot is only revealed to the recipient after you explicitly accept their request in the app.",
		},
		id: {
			question: "Bagaimana cara menjaga privasi dan keamanan?",
			answer: "Alamat rumah lengkap Anda tidak pernah ditampilkan secara publik. Peta hanya menampilkan radius umum (sekitar 5 menit berjalan kaki) di sekitar lokasi Anda. Titik penjemputan yang tepat hanya akan diberitahukan kepada penerima setelah Anda secara sadar menerima permintaan mereka di aplikasi.",
		}
	},
];

export default function FaqClient() {
	const { language } = useLanguageStore();
	const [openQuestion, setOpenQuestion] = useState<string | null>(null);

	const toggleFaq = (question: string) => {
		setOpenQuestion(openQuestion === question ? null : question);
	};

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			{/* Hero */}
			<section className="relative overflow-hidden py-12 sm:py-16">
				<div className="site-shell">
					<div className="max-w-3xl">
						<span className="eyebrow">FAQ</span>
						<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
							{language === "en" ? (
								<>Everything you need to <span className="text-[#195A00]">know about ZeroBin.</span></>
							) : (
								<>Segala hal yang perlu Anda <span className="text-[#195A00]">ketahui tentang ZeroBin.</span></>
							)}
						</h1>
						<p className="section-copy mt-6 max-w-xl">
							{language === "en"
								? "Have questions about how sharing works, privacy, or who can join? We’ve gathered the most common questions from our community here."
								: "Punya pertanyaan tentang cara kerja berbagi, privasi, atau siapa saja yang bisa bergabung? Kami telah merangkum pertanyaan yang paling sering diajukan oleh komunitas kami di sini."
							}
						</p>
					</div>
				</div>
			</section>

			{/* FAQ Accordions */}
			<section className="py-4">
				<div className="site-shell">
					<div className="divide-y divide-[var(--line)] border-t border-[var(--line)] max-w-3xl animate-in fade-in duration-300">
						{faqsBilingual.map((faqGroup) => {
							const faq = faqGroup[language];
							const isOpen = openQuestion === faq.question;
							return (
								<div key={faq.question} className="group">
									<button
										onClick={() => toggleFaq(faq.question)}
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
										className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
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
			<section className="py-10 border-t border-[var(--line)] mt-12">
				<div className="site-shell flex flex-wrap items-center justify-between gap-4">
					<p className="text-sm text-[var(--muted)]">
						{language === "en" ? "Still have a question? We're a message away." : "Masih memiliki pertanyaan? Kami siap membantu Anda."}
					</p>
					<Link href="/contact" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand)] transition">
						{language === "en" ? "Contact support →" : "Hubungi bantuan →"}
					</Link>
				</div>
			</section>
		</div>
	);
}
