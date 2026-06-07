import { create } from "zustand";

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
			localStorage.setItem("cellar-language", language);
		}
		// Simulate transition delay for satisfies visual feedback
		set({ isNavigating: true });
		setTimeout(() => {
			set({ language, isNavigating: false });
		}, 300);
	},
}));
