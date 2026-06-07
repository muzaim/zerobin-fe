"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function CookieConsent() {
	const [isVisible, setIsVisible] = useState(false);
	const { language } = useLanguageStore();
	const t = translations[language].cookie;

	useEffect(() => {
		// Check if consent has already been given
		const consent = localStorage.getItem("cellar-cookie-consent");
		if (!consent) {
			// Small delay before displaying for a premium feel
			const timer = setTimeout(() => {
				setIsVisible(true);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleConsent = (choice: "accepted" | "essential") => {
		localStorage.setItem("cellar-cookie-consent", choice);
		setIsVisible(false);
	};

	if (!isVisible) {
		// Keep it mounted but hidden to handle exit transitions nicely
		// or conditionally render if not mounted yet
	}

	return (
		<div
			className={`
				fixed
				bottom-6
				left-6
				z-50
				w-[calc(100%-32px)]
				max-w-[420px]
				p-6
				rounded-[var(--radius-md)]
				border
				border-[var(--line)]
				bg-[var(--surface)]/95
				backdrop-blur-md
				shadow-[0_16px_40px_rgba(31,36,22,0.12)]
				transition-all
				duration-500
				ease-out
				${isVisible 
					? "translate-y-0 opacity-100 scale-100" 
					: "translate-y-12 opacity-0 scale-95 pointer-events-none"
				}
			`}
			role="dialog"
			aria-labelledby="cookie-title"
			aria-describedby="cookie-desc"
		>
			<div className="flex gap-4">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
					<Cookie size={20} />
				</div>
				<div>
					<h3
						id="cookie-title"
						className="font-[var(--font-display)] text-lg font-bold italic text-[var(--foreground)]"
					>
						{t.title}
					</h3>
					<p
						id="cookie-desc"
						className="mt-2 text-sm text-[var(--muted)] leading-relaxed"
					>
						{t.body}
					</p>

					<div className="mt-5 flex items-center justify-end gap-3">
						<button
							onClick={() => handleConsent("essential")}
							className="secondary-button !min-h-0 !py-2 !px-4 text-xs font-semibold"
						>
							{t.essential}
						</button>
						<button
							onClick={() => handleConsent("accepted")}
							className="primary-button !min-h-0 !py-2 !px-4 text-xs font-bold"
						>
							{t.accept}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

