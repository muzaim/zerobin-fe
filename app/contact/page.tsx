"use client";

import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function ContactSupport() {
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
								<span className="eyebrow">Contact Support</span>
								<h1 className="display-title mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.15]">
									We'd love to <span className="text-[#195A00]">hear from you.</span>
								</h1>
								<p className="section-copy mt-6 max-w-xl">
									We don't have an offshore call center or automated chat robots. When you write to us, it goes straight to the small group of neighbors managing Cellar. We'll do our best to reply within a few hours.
								</p>
							</div>

							<div className="space-y-8 pt-8 border-t border-[var(--line)]">
								<div className="space-y-2">
									<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
										Direct Email
									</span>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										Send us a message at <a href="mailto:hello@cellar.id" className="font-semibold text-[#195A00] hover:underline">hello@cellar.id</a> for general inquiries, feedback, or partnerships.
									</p>
								</div>

								<div className="space-y-2">
									<span className="font-mono text-xs uppercase tracking-widest text-[#195A00] block">
										In-App Support
									</span>
									<p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
										Open the Cellar app, head to settings, and tap "Help Chat" for quick support regarding active food listings, coordinates, or pickup safety.
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
										Message sent cleanly.
									</h3>
									<p className="text-[var(--muted)] leading-relaxed max-w-md">
										Thanks for reaching out. We've received your note and will get back to you shortly.
									</p>
									<button
										onClick={() => setSubmitted(false)}
										className="primary-button mt-6 text-sm py-2 px-5"
									>
										Send another message
									</button>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-8">
									<div className="space-y-2">
										<label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
											Your Name
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
											Email Address
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
											What's on your mind?
										</label>
										<textarea
											id="message"
											required
											rows={4}
											value={message}
											onChange={(e) => setMessage(e.target.value)}
											placeholder="Tell us what's happening..."
											className="w-full py-3 bg-transparent border-b border-[var(--line)] text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:border-[#195A00] outline-none transition duration-250 resize-y rounded-none"
										/>
									</div>

									<button
										type="submit"
										className="primary-button justify-center gap-2 text-sm"
									>
										Send Message <ArrowRight size={16} />
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
