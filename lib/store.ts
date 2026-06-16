import { create } from "zustand";
import { useSearchParams } from "next/navigation";

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
	try {
		const searchParams = useSearchParams();
		const langParam = searchParams ? searchParams.get("lang") : null;
		if (langParam === "en" || langParam === "id") {
			return langParam;
		}
	} catch (e) {
		// Ignore error if useSearchParams is called outside of context
	}
	return storeLanguage;
}
