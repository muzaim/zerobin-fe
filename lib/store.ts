import { create } from "zustand";

type Language = "en" | "id";

type LanguageState = {
	language: Language;
	setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
	language: "en",
	setLanguage: (language) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("cellar-language", language);
		}
		set({ language });
	},
}));
