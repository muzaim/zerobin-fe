"use client";

import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";

export default function ContactClient() {
	const language = useCurrentLanguage();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate submission
		setSubmitted(true);
	};

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-20">
			<section className="relative overflow-hidden py-16 sm:py-20">
				<div className="site-shell">
					<div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 items-start">
						
						{/* Text & Contact Channels (Left Column) */}
						<div className="space-y-10">
							<div>
								<span className="eyebrow">
									{language === "en" ? "Contact Support" : "Hubungi Bantuan"}
								</span>
								<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
									{language === "en" ? (
										<>We&apos;d love to <span className="text-[#195A00]">hear from you.</span></>
									) : (
										<>Kami akan sangat senang <span className="text-[#195A00]">mendengar cerita Anda.</span></>
									)}
								</h1>
								<p className="section-copy mt-6 max-w-xl">
									{language === "en" 
										? "We don't have an offshore call center or automated chat robots. When you write to us, it goes straight to the small group of neighbors managing ZeroBin. We'll do our best to reply within a few hours."
										: "Kami tidak memiliki pusat panggilan eksternal atau robot obrolan otomatis. Ketika Anda menulis kepada kami, pesan tersebut akan langsung diterima oleh kelompok kecil tetangga yang mengelola ZeroBin. Kami akan berusaha sebaik mungkin untuk membalas dalam beberapa jam."
									}
								</p>
							</div>

							<div className="space-y-8 pt-8 border-t border-[var(--line)]">
								<div className="space-y-2">
									<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
										{language === "en" ? "Direct Email" : "Email Langsung"}
									</span>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en" ? (
											<>Send us a message at <a href="mailto:hello@zerobin.id" className="font-semibold text-[#195A00] hover:underline">hello@zerobin.id</a> for general inquiries, feedback, or partnerships.</>
										) : (
											<>Kirim pesan kepada kami di <a href="mailto:hello@zerobin.id" className="font-semibold text-[#195A00] hover:underline">hello@zerobin.id</a> untuk pertanyaan umum, masukan, atau kemitraan.</>
										)}
									</p>
								</div>

								<div className="space-y-2">
									<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
										{language === "en" ? "In-App Support" : "Dukungan Dalam Aplikasi"}
									</span>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										{language === "en"
											? 'Open the ZeroBin app, head to settings, and tap "Help Chat" for quick support regarding active food listings, coordinates, or pickup safety.'
											: 'Buka aplikasi ZeroBin, masuk ke pengaturan, lalu ketuk "Bantuan Chat" untuk dukungan cepat terkait kiriman makanan aktif, koordinasi lokasi, atau keamanan penjemputan.'
										}
									</p>
								</div>
							</div>
						</div>

						{/* Form Panel (Right Column) */}
						<div className="pt-4 lg:pt-0">
							{submitted ? (
								<div className="py-12 space-y-4">
									<div className="w-12 h-12 rounded-full bg-[var(--brand-soft)] flex items-center justify-center text-[var(--brand)] mb-6">
										<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<h3 className="font-[var(--font-display)] text-3xl font-bold text-[var(--foreground)]">
										{language === "en" ? "Message sent cleanly." : "Pesan terkirim dengan lancar."}
									</h3>
									<p className="text-[var(--muted)] leading-relaxed max-w-md">
										{language === "en"
											? "Thanks for reaching out. We've received your note and will get back to you shortly."
											: "Terima kasih telah menghubungi kami. Kami telah menerima pesan Anda dan akan segera membalasnya."
										}
									</p>
									<button
										onClick={() => setSubmitted(false)}
										className="primary-button mt-6 text-sm py-2 px-5"
									>
										{language === "en" ? "Send another message" : "Kirim pesan lain"}
									</button>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-8">
									<div className="space-y-2">
										<label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
											{language === "en" ? "Your Name" : "Nama Anda"}
										</label>
										<input
											type="text"
											id="name"
											required
											value={name}
											onChange={(e) => setName(e.target.value)}
											placeholder="Jane Doe"
											className="w-full py-3 bg-transparent border-b border-[var(--line)] text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:border-[#195A00] outline-none transition duration-250 rounded-none"
										/>
									</div>

									<div className="space-y-2">
										<label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
											{language === "en" ? "Email Address" : "Alamat Email"}
										</label>
										<input
											type="email"
											id="email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="jane@example.com"
											className="w-full py-3 bg-transparent border-b border-[var(--line)] text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:border-[#195A00] outline-none transition duration-250 rounded-none"
										/>
									</div>

									<div className="space-y-2">
										<label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
											{language === "en" ? "What's on your mind?" : "Apa yang ingin Anda sampaikan?"}
										</label>
										<textarea
											id="message"
											required
											rows={4}
											value={message}
											onChange={(e) => setMessage(e.target.value)}
											placeholder={language === "en" ? "Tell us what's happening..." : "Beri tahu kami apa yang Anda pikirkan..."}
											className="w-full py-3 bg-transparent border-b border-[var(--line)] text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:border-[#195A00] outline-none transition duration-250 resize-y rounded-none"
										/>
									</div>

									<button
										type="submit"
										className="primary-button justify-center gap-2 text-sm"
									>
										{language === "en" ? "Send Message" : "Kirim Pesan"} <ArrowRight size={16} />
									</button>
								</form>
							)}
						</div>

					</div>
				</div>
			</section>
		</div>
	);
}

