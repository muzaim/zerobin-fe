import About from "@/components/sections/about";
import DownloadApp from "@/components/sections/download";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howItWorks";
import Impact from "@/components/sections/impact";
import StorySection from "@/components/sections/story";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<HowItWorks />
			<StorySection />
			<Impact />
			<Faq />
			<DownloadApp />
		</>
	);
}
