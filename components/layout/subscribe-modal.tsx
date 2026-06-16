"use client";

import { useEffect, useState } from "react";
import { X, Mail, CheckCircle2 } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function SubscribeModal() {
	const { language } = useLanguageStore();
	const t = translations[language].subscribeModal;

	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		// Check if user has already dismissed or subscribed
		if (typeof window !== "undefined") {
			const hasSubscribedOrDismissed = localStorage.getItem("zerobin-newsletter-dismissed");
			if (hasSubscribedOrDismissed) {
				return;
			}
		}

		// Trigger 1: Show after 10 seconds delay
		const delayTimer = setTimeout(() => {
			if (typeof window !== "undefined") {
				const hasSubscribedOrDismissed = localStorage.getItem("zerobin-newsletter-dismissed");
				if (hasSubscribedOrDismissed) return;
			}
			setIsOpen(true);
		}, 10000);

		// Trigger 2: Exit intent (mouse leaves screen)
		const handleMouseLeave = (e: MouseEvent) => {
			if (typeof window !== "undefined") {
				const hasSubscribedOrDismissed = localStorage.getItem("zerobin-newsletter-dismissed");
				if (hasSubscribedOrDismissed) return;
			}
			if (e.clientY < 20) {
				setIsOpen(true);
			}
		};

		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			clearTimeout(delayTimer);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	const handleClose = () => {
		setIsOpen(false);
		if (typeof window !== "undefined") {
			localStorage.setItem("zerobin-newsletter-dismissed", "true");
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		setIsSubmitting(true);
		// Simulate network request
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			if (typeof window !== "undefined") {
				localStorage.setItem("zerobin-newsletter-dismissed", "true");
			}
			// Close after 3 seconds on success
			setTimeout(() => {
				setIsOpen(false);
			}, 3000);
		}, 1000);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
			{/* Backdrop blur overlay */}
			<div
				className="absolute inset-0 bg-[#1b1b16]/40 backdrop-blur-sm transition-opacity duration-300"
				onClick={handleClose}
			/>

			{/* Modal Container */}
			<div className="relative w-full max-w-[460px] bg-[var(--surface)] border border-[var(--line)] rounded-[24px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(31,36,22,0.15)] transform transition-all duration-300 scale-100 z-10 animate-in fade-in zoom-in-95 duration-200">
				
				{/* Close button */}
				<button
					onClick={handleClose}
					className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--foreground)] transition cursor-pointer"
					aria-label="Close modal"
				>
					<X size={20} />
				</button>

				{!isSubmitted ? (
					<div className="space-y-6">
						{/* Icon wrapper */}
						<div className="w-12 h-12 rounded-full bg-[var(--brand-soft)] flex items-center justify-center text-[var(--brand)]">
							<Mail size={22} />
						</div>

						{/* Headers */}
						<div className="space-y-2">
							<h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--foreground)] leading-tight">
								{t.title}
							</h3>
							<p className="text-sm text-[var(--muted)] leading-relaxed">
								{t.desc}
							</p>
						</div>

						{/* Form */}
						<form onSubmit={handleSubmit} className="space-y-3">
							<input
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={t.placeholder}
								className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--line)] rounded-xl text-sm placeholder-[var(--muted)]/60 focus:outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)] transition duration-200"
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="primary-button w-full flex items-center justify-center gap-2 cursor-pointer"
							>
								{isSubmitting ? t.btnSubmitting : t.btnSubmit}
							</button>
						</form>

						{/* Dismiss Link */}
						<div className="text-center">
							<button
								onClick={handleClose}
								className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] font-medium underline transition cursor-pointer"
							>
								{t.btnDismiss}
							</button>
						</div>
					</div>
				) : (
					<div className="py-6 text-center space-y-4">
						{/* Success Icon */}
						<div className="w-16 h-16 rounded-full bg-[var(--brand-soft)] flex items-center justify-center text-[var(--brand)] mx-auto animate-bounce">
							<CheckCircle2 size={32} />
						</div>

						{/* Success Headers */}
						<div className="space-y-2">
							<h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--foreground)]">
								{t.successTitle}
							</h3>
							<p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs mx-auto">
								{t.successDesc}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
