import About from "@/components/about";
import DownloadApp from "@/components/download";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howItWorks";
import Impact from "@/components/impact";
import StorySection from "@/components/story";

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
