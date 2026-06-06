import About from "@/components/about";
import DownloadApp from "@/components/download";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howItWorks";
import Impact from "@/components/impact";
import StorySection from "@/components/story";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<HowItWorks />
			<StorySection />
			<Impact />
			<Testimonials />
			<DownloadApp />
		</main>
	);
}
