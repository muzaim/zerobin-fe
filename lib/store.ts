import { create } from "zustand";
import { useState, useEffect } from "react";

type Language = "en" | "id";

type LanguageState = {
	language: Language;
	isNavigating: boolean;
	startLoading: () => void;
	stopLoading: () => void;
	setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
	language: "en",
	isNavigating: false,
	startLoading: () => set({ isNavigating: true }),
	stopLoading: () => set({ isNavigating: false }),
	setLanguage: (language) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("zerobin-language", language);
		}
		// Simulate transition delay for satisfies visual feedback
		set({ isNavigating: true });
		setTimeout(() => {
			set({ language, isNavigating: false });
		}, 300);
	},
}));

export function useCurrentLanguage(): Language {
	const storeLanguage = useLanguageStore((state) => state.language);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Server-side and initial hydration rendering must match default
	if (!mounted) {
		return "en";
	}

	try {
		if (typeof window !== "undefined") {
			const searchParams = new URLSearchParams(window.location.search);
			const langParam = searchParams.get("lang");
			if (langParam === "en" || langParam === "id") {
				return langParam;
			}
			
			const saved = localStorage.getItem("zerobin-language") as Language;
			if (saved === "en" || saved === "id") {
				return saved;
			}
		}
	} catch (e) {
		// Ignore
	}

	return storeLanguage;
}
