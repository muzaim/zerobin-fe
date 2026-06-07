export type TranslationDict = {
	navbar: {
		about: string;
		aboutUs: string;
		ourStory: string;
		ourImpact: string;
		howItWorks: string;
		forDonors: string;
		forRecipients: string;
		communityGuidelines: string;
		impact: string;
		foodWasteFacts: string;
		successStories: string;
		sustainabilityGoals: string;
		faq: string;
		generalQuestions: string;
		contactSupport: string;
		blog: string;
		downloadApp: string;
	};
	footer: {
		tagline: string;
		headlinePrefix: string;
		headlineItalic: string;
		desc: string;
		brandDesc: string;
		stayUpdated: string;
		newsletterDesc: string;
		emailPlaceholder: string;
		noSpam: string;
		rightsText: string;
		about: string;
		howItWorks: string;
		impact: string;
		support: string;
		rights: string;
	};
	cookie: {
		title: string;
		body: string;
		essential: string;
		accept: string;
	};
	hero: {
		titlePrefix: string;
		titleHighlight: string;
		desc: string;
		btnShare: string;
		btnHow: string;
		statsShared: string;
		statsReached: string;
		statsSaved: string;
		polaroidCaption: string;
		badgeActive: string;
		badgeSarah: string;
		badgeSarahDetails: string;
		badgeJames: string;
		badgeJamesDetails: string;
	};
	about: {
		eyebrow: string;
		title: string;
		desc1: string;
		desc2: string;
		btnImpact: string;
		btnWatch: string;
	};
	howItWorks: {
		eyebrow: string;
		title: string;
		desc: string;
		steps: {
			step: string;
			title: string;
			desc: string;
		}[];
	};
	story: {
		eyebrow: string;
		title: string;
		desc: string;
		btnStart: string;
	};
	impact: {
		eyebrow: string;
		title: string;
		desc: string;
		stat1Value: string;
		stat1Label: string;
		stat1Desc: string;
		stat2Value: string;
		stat2Label: string;
		stat2Desc: string;
	};
	faq: {
		eyebrow: string;
		title: string;
		desc: string;
		deciding: string;
		items: {
			question: string;
			answer: string;
		}[];
	};
	download: {
		eyebrow: string;
		titlePrefix: string;
		titleHighlight: string;
		desc: string;
		check1: string;
		check2: string;
		check3: string;
		steps: {
			step: string;
			title: string;
			body: string;
		}[];
	};
	innerAbout: {
		eyebrow: string;
		titlePrefix: string;
		titleHighlight: string;
		desc: string;
		bannerAlt: string;
		missionEyebrow: string;
		missionTitle: string;
		missionDesc: string;
		visionEyebrow: string;
		visionTitle: string;
		visionDesc: string;
		storyEyebrow: string;
		storyTitle: string;
		storyDesc1: string;
		storyDesc2: string;
		storyImgAlt: string;
		valuesEyebrow: string;
		valuesTitle: string;
		valuesDesc: string;
		value1Title: string;
		value1Desc: string;
		value2Title: string;
		value2Desc: string;
		value3Title: string;
		value3Desc: string;
		footerText: string;
		footerShare: string;
		footerApp: string;
	};
	innerAboutStory: {
		eyebrow: string;
		titlePrefix: string;
		titleHighlight: string;
		desc: string;
		narrativeTitle: string;
		narrativeDesc1: string;
		narrativeDesc2: string;
		narrativeDesc3: string;
		timelineEyebrow: string;
		timelineTitle: string;
		timelineItems: {
			year: string;
			title: string;
			desc: string;
		}[];
	};
	innerAboutImpact: {
		eyebrow: string;
		titlePrefix: string;
		titleHighlight: string;
		desc: string;
		metricsTitle: string;
		metrics: {
			value: string;
			label: string;
			desc: string;
		}[];
		pillarsTitle: string;
		pillarsDesc: string;
		pillars: {
			title: string;
			desc: string;
		}[];
	};
	innerHowItWorks: {
		donors: {
			eyebrow: string;
			titlePrefix: string;
			titleHighlight: string;
			desc: string;
			guideTitle: string;
			guideDesc: string;
			steps: {
				num: string;
				title: string;
				desc: string;
			}[];
			footerTitle: string;
			footerDesc: string;
			footerBtn: string;
		};
		recipients: {
			eyebrow: string;
			titlePrefix: string;
			titleHighlight: string;
			desc: string;
			guideTitle: string;
			guideDesc: string;
			steps: {
				num: string;
				title: string;
				desc: string;
			}[];
			footerTitle: string;
			footerDesc: string;
			footerBtn: string;
		};
		guidelines: {
			eyebrow: string;
			titlePrefix: string;
			titleHighlight: string;
			desc: string;
			photoAlt: string;
			guideTitle: string;
			guideDesc: string;
			items: {
				title: string;
				desc: string;
			}[];
		};
	};
	innerImpact: {
		statistics: {
			eyebrow: string;
			titlePrefix: string;
			titleHighlight: string;
			desc: string;
			factsTitle: string;
			factsDesc: string;
			facts: {
				title: string;
				desc: string;
			}[];
		};
		goals: {
			eyebrow: string;
			titlePrefix: string;
			titleHighlight: string;
			desc: string;
			goalsTitle: string;
			goalsDesc: string;
			goals: {
				title: string;
				desc: string;
			}[];
		};
		stories: {
			eyebrow: string;
			titlePrefix: string;
			titleHighlight: string;
			desc: string;
			storiesTitle: string;
			storiesDesc: string;
		};
	};
	innerContact: {
		eyebrow: string;
		title: string;
		desc: string;
		titleForm: string;
		labelName: string;
		labelEmail: string;
		labelTopic: string;
		topicPlaceholder: string;
		labelMessage: string;
		messagePlaceholder: string;
		btnSubmit: string;
		btnSubmitting: string;
		successMessage: string;
		infoTitle: string;
		infoEmail: string;
		infoHourTitle: string;
		infoHours: string;
		infoHoursWeekend: string;
	};
	innerFaq: {
		eyebrow: string;
		title: string;
		desc: string;
		sidebarTitle: string;
		sidebarDesc: string;
		sidebarContact: string;
	};
	innerBlog: {
		eyebrow: string;
		title: string;
		desc: string;
		readMore: string;
		readTime: string;
		notFoundTitle: string;
		notFoundDesc: string;
		btnBack: string;
		relatedTitle: string;
	};
	subscribeModal: {
		title: string;
		desc: string;
		placeholder: string;
		btnSubmit: string;
		btnSubmitting: string;
		btnDismiss: string;
		successTitle: string;
		successDesc: string;
	};
};

export const translations: { en: TranslationDict; id: TranslationDict } = {
	en: {
		navbar: {
			about: "About",
			aboutUs: "About Us",
			ourStory: "Our Story",
			ourImpact: "Our Impact",
			howItWorks: "How It Works",
			forDonors: "For Donors",
			forRecipients: "For Recipients",
			communityGuidelines: "Community Guidelines",
			impact: "Impact",
			foodWasteFacts: "Food Waste Facts",
			successStories: "Success Stories",
			sustainabilityGoals: "Sustainability Goals",
			faq: "FAQ",
			generalQuestions: "General Questions",
			contactSupport: "Contact Support",
			blog: "Blog",
			downloadApp: "Download App",
		},
		footer: {
			tagline: "Cellar · Food sharing platform",
			headlinePrefix: "One extra portion. ",
			headlineItalic: "Someone's dinner.",
			desc: "Cellar is free, local, and built for the ordinary moment when you have more than you need. Pass it on before it ends in the bin.",
			brandDesc: "A quieter way to share surplus food with someone nearby — before it goes to waste.",
			stayUpdated: "Stay updated",
			newsletterDesc: "Community stories and product notes, occasionally — nothing more.",
			emailPlaceholder: "Your email",
			noSpam: "No spam. Unsubscribe any time.",
			rightsText: "© 2026 Cellar. Built with care, not scale.",
			about: "Platform",
			howItWorks: "Resources",
			impact: "Our Impact",
			support: "Support & FAQ",
			rights: "© 2026 Cellar. Pass it on.",
		},
		cookie: {
			title: "Keeping things fresh.",
			body: "Like a well-kept cellar, we only store what's truly useful. We use tiny digital crumbs (cookies) to remember your preferences and keep our community running smoothly. No corporate trackers, just neighbors sharing surplus.",
			essential: "Only essential",
			accept: "Accept crumbs",
		},
		hero: {
			titlePrefix: "Every meal deserve a plate, ",
			titleHighlight: "not a bin.",
			desc: "Cellar helps people list extra meals, coordinate simple pickups, and pass food to someone nearby while it is still at its best.",
			btnShare: "Share surplus food",
			btnHow: "See how it works",
			statsShared: "meals shared",
			statsReached: "neighbors reached",
			statsSaved: "food kept useful",
			polaroidCaption: "Sunday Neighborhood Table",
			badgeActive: "Active Now",
			badgeSarah: "Sarah's Sourdough",
			badgeSarahDetails: "200m away • 2 portions",
			badgeJames: "James's Plums",
			badgeJamesDetails: "400m away • 1 bag left",
		},
		about: {
			eyebrow: "About Cellar",
			title: "A calmer way to share what would be wasted.",
			desc1: "Cellar is built around the ordinary moments where good food needs a second route: a cafe closing early, a family cooking too much, a community group with extra portions after an event.",
			desc2: "The goal is not to turn meals into a marketplace. It is to make sharing clear, local, and respectful.",
			btnImpact: "Read the impact",
			btnWatch: "Watch story",
		},
		howItWorks: {
			eyebrow: "How it works",
			title: "Three steps, with room for real life.",
			desc: "Sharing food only works when the details are clear. Cellar keeps the flow short, but leaves space for notes that matter.",
			steps: [
				{
					step: "01",
					title: "List it honestly",
					desc: "Add a photo, quantity, ingredients, pickup window, and any safety notes people should know.",
				},
				{
					step: "02",
					title: "Choose the handoff",
					desc: "Neighbors can request a pickup, then both sides confirm the place and timing that feels right.",
				},
				{
					step: "03",
					title: "Close the loop",
					desc: "Mark it shared, keep a small impact record, and make tomorrow's surplus easier to route.",
				},
			],
		},
		story: {
			eyebrow: "A small action can still feel human.",
			title: "Every meal has a little more story left in it.",
			desc: "Do not let it end in a bin by default. Good food can still feed someone, save resources, and connect people nearby.",
			btnStart: "Start sharing",
		},
		impact: {
			eyebrow: "Our Impact",
			title: "Good food belongs on tables, not in bins.",
			desc: "Cellar is built for the hands that actually move food: home cooks sharing an extra batch of soup, local cafes listing pastries before closing, and neighbors picking up garden surplus. We keep it personal, simple, and entirely local.",
			stat1Value: "25 Tons",
			stat1Label: "Surplus food saved & shared",
			stat1Desc: "Redirected from local landfills straight to neighboring dinner plates.",
			stat2Value: "4.8 / 5",
			stat2Label: "Average pickup rating",
			stat2Desc: "Built on trust, safety, and friendly hand-offs between neighbors.",
		},
		faq: {
			eyebrow: "Questions before sharing",
			title: "The basics should be clear.",
			desc: "Food sharing works best when people understand the expectations before the first pickup.",
			deciding: "Still deciding?",
			items: [
				{
					question: "Can I share homemade meals?",
					answer: "Yes. Homemade meals are welcome when they are fresh, clearly described, and shared with ingredient or allergen notes.",
				},
				{
					question: "What happens if nobody claims my food?",
					answer: "You can adjust the pickup window, update the listing, or remove it. Cellar keeps the listing under your control.",
				},
				{
					question: "Is Cellar free to use?",
					answer: "Yes. Cellar is centered on reducing waste and helping nearby people, not selling leftover food.",
				},
				{
					question: "Can restaurants and cafes join?",
					answer: "Yes. Local food businesses can share surplus items, set pickup rules, and keep recurring handoffs easy to manage.",
				},
				{
					question: "Do I have to meet someone at my home?",
					answer: "No. You can choose a public pickup point or another arrangement that feels comfortable for both sides.",
				},
			],
		},
		download: {
			eyebrow: "Get the App",
			titlePrefix: "Good food, still warm. ",
			titleHighlight: "Ready to share.",
			desc: "Cellar is a free, local app for passing surplus food to a neighbor before it goes to waste. No fee, no marketplace — just a quieter way to let something good keep going.",
			check1: "✓ Free to download & use",
			check2: "✓ Works anywhere in your city",
			check3: "✓ Community-verified listings",
			steps: [
				{
					step: "01 / Share",
					title: "Post what you have",
					body: "Snap a quick photo, set a pickup window, and add any notes your neighbor should know. Takes about a minute.",
				},
				{
					step: "02 / Discover",
					title: "Find what's nearby",
					body: "Browse the local feed to see surplus meals, garden harvests, and café leftovers being offered a few blocks away.",
				},
				{
					step: "03 / Connect",
					title: "A simple handoff",
					body: "Coordinate by chat, agree on a spot, and close the loop. No marketplace. Just two neighbors.",
				},
			],
		},
		innerAbout: {
			eyebrow: "About Us",
			titlePrefix: "We believe good food belongs on ",
			titleHighlight: "plates",
			desc: "Cellar is a community-driven initiative born out of a simple observation: we have an abundance of food, yet so much of it goes to waste simply because we lack a clear, local way to share it.",
			bannerAlt: "A happy group of community volunteers and neighbors working together",
			missionEyebrow: "Our Mission",
			missionTitle: "Making food sharing completely routine.",
			missionDesc: "No grand tech promises or complicated rules. We are building the local, friendly pathway that makes sending extra food to a neighbor feel as normal and simple as putting it in your fridge.",
			visionEyebrow: "Our Vision",
			visionTitle: "A neighborhood built on trust.",
			visionDesc: "We imagine a street where surplus food is shared by default. Where communities are connected by trust and dinner tables, and where sending good, edible food to a landfill becomes a behavior of the past.",
			storyEyebrow: "How It Started",
			storyTitle: "Connecting neighborhoods through shared meals",
			storyDesc1: "Cellar began in a small kitchen when we realized how much fresh bread, backyard garden surplus, and perfectly good meals were being discarded simply due to a lack of communication. We wanted to create a platform that feels warm, personal, and completely local—a digital cellar where neighbors could invite others to share in their excess.",
			storyDesc2: "Today, we are proud to connect thousands of individuals, local bakeries, and community groups, fostering relationships built on trust, respect, and a shared commitment to a zero-waste lifestyle.",
			storyImgAlt: "Volunteers and neighbors smiling, sharing fresh bread and meals together",
			valuesEyebrow: "Our Foundation",
			valuesTitle: "Values that guide Cellar",
			valuesDesc: "These principles shape every feature we build, every guideline we write, and every interaction we support.",
			value1Title: "Community Centered",
			value1Desc: "We believe local connections make us stronger. Cellar is designed to foster friendly interactions and real relationships between neighbors.",
			value2Title: "Safety & Respect",
			value2Desc: "We treat both food and people with the utmost dignity. Our platform implements clear safety guidelines so everyone can share with peace of mind.",
			value3Title: "Mindful Consumption",
			value3Desc: "Every resource represents water, soil, energy, and labor. We respect these resources by keeping surplus food out of the waste stream.",
			footerText: "Cellar · Built for the ordinary moment.",
			footerShare: "How to share →",
			footerApp: "Get the app →",
		},
		innerAboutStory: {
			eyebrow: "Our Story",
			titlePrefix: "A quiet path to a ",
			titleHighlight: "connected street.",
			desc: "Cellar wasn't created by a big tech company. It started around a single kitchen counter, out of a desire to make neighborly sharing simple and natural.",
			narrativeTitle: "A simple realization in a small kitchen",
			narrativeDesc1: "One evening, our founders looked at a surplus of home-cooked meals and a half-loaf of fresh artisanal bread. Throwing it away felt deeply uncomfortable, yet there was no easy way to check if someone just a few doors down could use it. Walking down the street knocking on doors felt intrusive, and posting on general social media was too wide.",
			narrativeDesc2: "We realized that the barrier to reducing food waste isn't a lack of goodwill—it is a lack of localized channels. We designed Cellar to act as that quiet bridge.",
			narrativeDesc3: "Since then, we have grown from a handful of neighboring houses to active blocks of families, local bakers, and garden growers, all choosing to share instead of discard.",
			timelineEyebrow: "Our Journey",
			timelineTitle: "Small steps over the years",
			timelineItems: [
				{ year: "2023", title: "The First Handoff", desc: "A simple batch of fresh sourdough bread was shared between two houses on the same street." },
				{ year: "2024", title: "Local Bakeries Join", desc: "Small bakeries and cafes joined to pass on day-end loaves to nearby students and households." },
				{ year: "2025", title: "Growing the Blocks", desc: "Expanded across local districts, helping neighbors share backyard harvests and home-cooked surpluses." },
				{ year: "2026", title: "Building the Future", desc: "Expanding our tools to make local sharing a daily, automatic routine for everyone." },
			],
		},
		innerAboutImpact: {
			eyebrow: "Our Impact",
			titlePrefix: "Real change, measured in ",
			titleHighlight: "neighborhoods.",
			desc: "Every single listing on Cellar is a small decision to protect resources. Together, these small handoffs add up to a significant ecological and social impact.",
			metricsTitle: "Our numbers, kept simple",
			metrics: [
				{ value: "25T", label: "Food saved", desc: "Tons of edible food redirected from landfills straight to neighborhood tables." },
				{ value: "12K+", label: "Portions shared", desc: "Individual surplus meals, loaves of bread, and garden harvests passed on." },
				{ value: "5K+", label: "Neighbors connected", desc: "Unique local households coordinating handoffs and building trust." },
			],
			pillarsTitle: "The three pillars of our impact",
			pillarsDesc: "We measure our success not by commercial growth, but by the strength of our local community and the resources we protect.",
			pillars: [
				{
					title: "Ecological Relief",
					desc: "By keeping surplus food out of landfills, we directly prevent it from decomposing anaerobically and releasing methane. We also respect the water, soil nutrients, and energy used to grow and transport that food.",
				},
				{
					title: "Social Connection",
					desc: "Food has always been a human connector. Handing off bread or extra portions on a porch bridges generations and builds a sense of shared responsibility and care on our streets.",
				},
				{
					title: "Resource Appreciation",
					desc: "We help shift the community mindset from disposable consumption to thoughtful appreciation. When a neighbor knows the effort behind a home harvest or a baked loaf, they value it much more.",
				},
			],
		},
		innerHowItWorks: {
			donors: {
				eyebrow: "For Donors",
				titlePrefix: "Pass on your surplus with ",
				titleHighlight: "complete peace of mind.",
				desc: "Sharing your extra food takes less than a minute. You decide what to list, when people can collect it, and how the handoff happens.",
				guideTitle: "How to share your food",
				guideDesc: "Keep it simple and honest. Here is how a standard listing works.",
				steps: [
					{ num: "01", title: "Snap a quick photo", desc: "Take a picture of the food on your kitchen table or counter. Natural light is perfect—honesty is key." },
					{ num: "02", title: "Add description & ingredients", desc: "Briefly note what it is. Make sure to list common allergens (nuts, dairy, gluten) so neighbors can request safely." },
					{ num: "03", title: "Set your pickup window", desc: "Specify a timeframe and spot. Many donors prefer leaving items in a bag on their porch or gate for contact-free pickup." },
				],
				footerTitle: "Ready to share?",
				footerDesc: "Take a minute to look at your kitchen or garden. There might be something perfect to list today.",
				footerBtn: "Back to Home",
			},
			recipients: {
				eyebrow: "For Recipients",
				titlePrefix: "Find fresh food and support your ",
				titleHighlight: "neighborhood.",
				desc: "Browse listings from neighbors, cafes, and backyard growers. Everything shared on Cellar is 100% free.",
				guideTitle: "How to receive food",
				guideDesc: "Coordinate respectfully and close the loop. Here is how it works.",
				steps: [
					{ num: "01", title: "Browse local listings", desc: "Open the feed to see active offers within a few blocks of your location. Listings show ingredients and quantity." },
					{ num: "02", title: "Request a pickup", desc: "Send a request specifying when you can collect it. Wait for the donor to accept and confirm the details." },
					{ num: "03", title: "Show up on time", desc: "Respect the donor's schedule. If plans change, send a quick message in the chat immediately so they aren't left waiting." },
				],
				footerTitle: "Looking for fresh food?",
				footerDesc: "See what neighbors are sharing nearby. Let's make sure good food doesn't go to waste.",
				footerBtn: "Back to Home",
			},
			guidelines: {
				eyebrow: "The Golden Rules",
				titlePrefix: "How to not be a ",
				titleHighlight: "weird neighbor.",
				desc: "Cellar runs entirely on trust and mutual respect. We are not a delivery service or a store—just neighbors helping neighbors. Here is how we keep it comfortable for everyone.",
				photoAlt: "A neighbor happily donating a box of fresh food to another neighbor",
				guideTitle: "Keep it friendly, keep it respectful.",
				guideDesc: "Cellar is not a store, a commercial delivery network, or an anonymous food drive. It is a local pathway built on neighbor-to-neighbor trust. Because we share directly from our own kitchens and gardens, a few simple boundaries keep things comfortable, safe, and welcoming for everyone.",
				items: [
					{ title: "Only share what is good", desc: "The gold standard is simple: only list food you would happily eat yourself. Fresh garden vegetables, home-baked bread, unopened pantry staples, or leftover portions from a family event are perfect. Moldy, expired, or half-eaten food belongs in the compost, not in a neighbor’s hands." },
					{ title: "Show up when you say you will", desc: "Neighbors coordinate their days to list and hand off food. If you agree on a 5:30 PM pickup, show up at 5:30 PM. If plans change, send a quick note in the app chat immediately so nobody is left waiting." },
					{ title: "Keep transactions completely out of it", desc: "Everything shared here is 100% free. Offering cash, requesting tips, bartering, or pitching local business offers is strictly forbidden. A friendly smile and a warm thank-you are the only exchanges we support." },
				],
			},
		},
		innerImpact: {
			statistics: {
				eyebrow: "Food Waste Facts",
				titlePrefix: "Understanding the true cost of ",
				titleHighlight: "wasted food.",
				desc: "Food waste is one of the largest contributors to climate change and resource depletion. Understanding the facts helps us make mindful daily choices.",
				factsTitle: "The ecological weight of waste",
				factsDesc: "When food goes to a landfill, we lose all the labor, water, and fuel used to bring it to our tables.",
				facts: [
					{ title: "One-Third is Wasted", desc: "Approximately 33% of all food produced globally is discarded, while millions of households experience food insecurity." },
					{ title: "A Massive Water Drain", desc: "Agriculture accounts for 70% of global water use. Wasting a single burger wastes as much water as a 90-minute shower." },
					{ title: "Landfill Emissions", desc: "Food rotting in landfills releases methane, a greenhouse gas far more potent than carbon dioxide at trapping heat." },
				],
			},
			goals: {
				eyebrow: "Sustainability Goals",
				titlePrefix: "Small commitments for a ",
				titleHighlight: "zero-waste street.",
				desc: "We aren't trying to change the world overnight. We are focused on helping local districts reach achievable zero-waste milestones.",
				goalsTitle: "Our community milestones",
				goalsDesc: "We design our features to support local sustainability targets, step by step.",
				goals: [
					{ title: "Zero Landfill Days", desc: "Helping local neighborhoods achieve days where zero edible food from households goes to waste." },
					{ title: "Supporting Local Growers", desc: "Fostering community crop swaps so backyard surpluses are shared before they spoil." },
					{ title: "Café Waste Reduction", desc: "Partnering with small bakeries and cafes to establish end-of-day food rescue routines." },
				],
			},
			stories: {
				eyebrow: "Success Stories",
				titlePrefix: "Real food, real people, ",
				titleHighlight: "real stories.",
				desc: "We aren't a massive charity, and we don't have corporate spokespeople. Cellar is just neighbors helping neighbors. Here are a few small stories from around our blocks.",
				storiesTitle: "Shared moments from our blocks",
				storiesDesc: "A listing takes less than a minute, but the connections and resources saved linger much longer. Here is how sharing looks in daily life.",
			},
		},
		innerContact: {
			eyebrow: "Contact Us",
			title: "Reach out to the Cellar team",
			desc: "Have a question about how the app works, a feature suggestion, or want to partner with us in your neighborhood? Drop us a line below.",
			titleForm: "Send us a message",
			labelName: "Your Name",
			labelEmail: "Email Address",
			labelTopic: "What is this about?",
			topicPlaceholder: "Select a topic...",
			labelMessage: "Your Message",
			messagePlaceholder: "Write your message here...",
			btnSubmit: "Send Message",
			btnSubmitting: "Sending...",
			successMessage: "Thank you! Your message has been sent. We'll get back to you shortly.",
			infoTitle: "Direct Contact",
			infoEmail: "hello@cellar.id",
			infoHourTitle: "Hours",
			infoHours: "Monday — Friday: 9 AM to 5 PM",
			infoHoursWeekend: "Saturday — Sunday: Closed (We're offline sharing food!)",
		},
		innerFaq: {
			eyebrow: "FAQ",
			title: "Frequently Asked Questions",
			desc: "Everything you need to know about sharing, safety, and community guidelines on Cellar.",
			sidebarTitle: "Still have questions?",
			sidebarDesc: "Can't find the answer you're looking for? Reach out directly and our small community team will get back to you.",
			sidebarContact: "Contact Support",
		},
		innerBlog: {
			eyebrow: "Blog",
			title: "Stories from the kitchen and front yard.",
			desc: "Guides, real stories, and light reading about food sharing — from the Cellar community.",
			readMore: "Read more",
			readTime: "read",
			notFoundTitle: "Article not found",
			notFoundDesc: "Sorry, the article you are looking for could not be found or has been deleted.",
			btnBack: "Back to Blog",
			relatedTitle: "Related Articles",
		},
		subscribeModal: {
			title: "Stay in the loop",
			desc: "Join our small group of neighbors. We share stories, surplus recipes, and stats from the block — once a month, no spam.",
			placeholder: "Enter your email address",
			btnSubmit: "Subscribe",
			btnSubmitting: "Subscribing...",
			btnDismiss: "No thanks, I'll browse first",
			successTitle: "You're in!",
			successDesc: "Thanks for joining us. We'll send you our next neighborhood dispatch soon.",
		},
	},
	id: {
		navbar: {
			about: "Tentang",
			aboutUs: "Tentang Kami",
			ourStory: "Kisah Kami",
			ourImpact: "Dampak Sosial",
			howItWorks: "Cara Kerja",
			forDonors: "Berbagi Makanan",
			forRecipients: "Menerima Makanan",
			communityGuidelines: "Panduan Warga",
			impact: "Jejak Kebaikan",
			foodWasteFacts: "Fakta Sampah Makanan",
			successStories: "Kisah Berbagi",
			sustainabilityGoals: "Misi Keberlanjutan",
			faq: "Tanya Jawab",
			generalQuestions: "Pertanyaan Umum",
			contactSupport: "Hubungi Kami",
			blog: "Blog",
			downloadApp: "Unduh Aplikasi",
		},
		footer: {
			tagline: "Cellar · Ruang berbagi makanan antartetangga",
			headlinePrefix: "Satu porsi berlebih bagi Anda. ",
			headlineItalic: "Sepiring kehangatan bagi sesama.",
			desc: "Cellar sepenuhnya gratis, bergerak di lingkungan sekitar, dan dirancang khusus untuk membagikan kelebihan makanan Anda. Mari salurkan sebelum terbuang sia-sia.",
			brandDesc: "Cara sederhana dan hangat untuk membagikan kelebihan makanan kepada tetangga sekitar—agar tak berakhir di tempat sampah.",
			stayUpdated: "Ikuti Kabar Kami",
			newsletterDesc: "Cerita dari lingkungan sekitar dan kabar berkala—bebas spam.",
			emailPlaceholder: "Alamat email Anda",
			noSpam: "Bebas spam. Batal berlangganan kapan saja.",
			rightsText: "© 2026 Cellar. Dibuat dengan rasa peduli sesama, bukan tujuan komersial.",
			about: "Platform",
			howItWorks: "Sumber Daya",
			impact: "Jejak Kebaikan",
			support: "Bantuan & FAQ",
			rights: "© 2026 Cellar. Mari saling berbagi.",
		},
		cookie: {
			title: "Pilih yang segar saja.",
			body: "Seperti ruang penyimpanan (cellar) yang tertata rapi, kami hanya menyimpan hal-hal yang benar-benar bermanfaat. Kami menggunakan remahan digital kecil (cookie) untuk mengingat preferensi Anda dan menjaga komunitas ini tetap berjalan lancar. Tanpa pelacak korporasi, murni dari tetangga untuk tetangga.",
			essential: "Hanya yang penting",
			accept: "Terima remahan",
		},
		hero: {
			titlePrefix: "Setiap makanan layak di piring, ",
			titleHighlight: "bukan sampah.",
			desc: "Salurkan kelebihan makanan Anda, atur jemputan sederhana, dan bagikan ke tetangga terdekat selagi segar.",
			btnShare: "Bagikan kelebihan makanan",
			btnHow: "Lihat cara kerjanya",
			statsShared: "hidangan dibagikan",
			statsReached: "tetangga terhubung",
			statsSaved: "makanan terselamatkan",
			polaroidCaption: "Meja Makan Tetangga Hari Minggu",
			badgeActive: "Aktif Sekarang",
			badgeSarah: "Sourdough Sarah",
			badgeSarahDetails: "200m dari sini • 2 porsi",
			badgeJames: "Buah Plum James",
			badgeJamesDetails: "400m dari sini • sisa 1 kantong",
		},
		about: {
			eyebrow: "Tentang Cellar",
			title: "Cara sederhana berbagi apa yang tersisa.",
			desc1: "Cellar hadir untuk menjembatani momen sehari-hari saat makanan baik membutuhkan 'piring kedua'—baik itu dari toko roti yang tutup sore hari, sisa masakan rumah yang berlebih, atau hidangan pasca-acara warga.",
			desc2: "Kami tidak sedang membuat pasar komersial. Kami hanya ingin menghidupkan kembali kebiasaan berbagi yang tulus, bersahabat, dan saling menghargai antartetangga.",
			btnImpact: "Lihat jejak kebaikan",
			btnWatch: "Dengar kisah warga",
		},
		howItWorks: {
			eyebrow: "Cara Kerja",
			title: "Tiga langkah mudah, fleksibel untuk keseharian.",
			desc: "Saling berbagi akan terasa ringan jika caranya jelas dan mudah. Cellar memangkas proses yang rumit, namun tetap menjaga catatan penting seperti alergen dan waktu jemput.",
			steps: [
				{
					step: "01",
					title: "Tulis jujur apa adanya",
					desc: "Cukup foto makananmu, sebutkan bahan-bahannya, tentukan waktu pengambilan, serta tambahkan catatan kecil yang perlu diketahui tetangga.",
				},
				{
					step: "02",
					title: "Sepakati pengambilan",
					desc: "Tetangga sekitar yang tertarik bisa mengirim pesan, lalu kalian tinggal menyepakati lokasi dan waktu penjemputan yang paling nyaman.",
				},
				{
					step: "03",
					title: "Mulai berbagi kebaikan",
					desc: "Tandai kiriman sebagai selesai, lihat kontribusi kecilmu bagi lingkungan, dan mari bersiap untuk saling berbagi lagi esok hari.",
				},
			],
		},
		story: {
			eyebrow: "Langkah kecil yang memanusiakan.",
			title: "Setiap makanan selalu menyimpan cerita hangat.",
			desc: "Sebutir roti atau seporsi sup ekstra bukan sekadar makanan—ia adalah awal dari obrolan hangat di teras rumah. Mari selamatkan makanan baik agar tidak berakhir di tempat sampah.",
			btnStart: "Mulai berbagi",
		},
		impact: {
			eyebrow: "Jejak Kebaikan",
			title: "Makanan baik selayaknya di meja makan, bukan di tong sampah.",
			desc: "Cellar dirancang untuk orang-orang biasa yang ingin berbuat baik: masakan rumah yang kelebihan sup, kafe lokal yang membagikan kue sebelum tutup, atau tetangga yang memetik buah berlebih dari kebunnya. Kami menjaga semuanya tetap personal, sederhana, dan sepenuhnya lokal.",
			stat1Value: "25 Ton",
			stat1Label: "Makanan baik terselamatkan",
			stat1Desc: "Dialihkan langsung dari pembuangan sampah ke piring makan tetangga di sekitar kita.",
			stat2Value: "4.8 / 5",
			stat2Label: "Kepuasan berbagi",
			stat2Desc: "Cerminan rasa percaya, keamanan, dan sapaan ramah saat serah-terima antartetangga.",
		},
		faq: {
			eyebrow: "Tanya Jawab",
			title: "Mari pahami hal-hal mendasar.",
			desc: "Aktivitas berbagi akan berjalan indah jika kita semua memahami aturan main dan harapan komunitas sejak awal.",
			deciding: "Masih ragu?",
			items: [
				{
					question: "Apakah saya bisa membagikan masakan rumah?",
					answer: "Tentu saja! Masakan rumah sangat kami harapkan. Pastikan kondisinya masih segar, jelaskan apa adanya, dan sebutkan bahan-bahannya agar aman dikonsumsi tetangga.",
				},
				{
					question: "Bagaimana jika tidak ada yang mengambil makanan saya?",
					answer: "Jangan khawatir. Anda bisa mengubah waktu pengambilan, memperbarui deskripsi, atau membatalkannya kapan saja. Semua kendali sepenuhnya ada di tangan Anda.",
				},
				{
					question: "Apakah penggunaan Cellar gratis?",
					answer: "100% gratis. Cellar murni bertujuan mengurangi sampah makanan dan mempererat kebersamaan warga. Tidak ada unsur jual-beli di sini.",
				},
				{
					question: "Apakah restoran dan kafe boleh bergabung?",
					answer: "Sangat boleh. Usaha kuliner lokal bisa membagikan sisa roti atau kue harian mereka, menetapkan jam penjemputan mandiri, dan membantu warga sekitar.",
				},
				{
					question: "Apakah saya harus bertemu penerima di rumah saya?",
					answer: "Sama sekali tidak harus. Banyak pembagi yang memilih titik temu di tempat umum atau sekadar meletakkan makanan di dalam tas kain di pagar rumah.",
				},
			],
		},
		download: {
			eyebrow: "Unduh Aplikasi",
			titlePrefix: "Makanan lezat, masih hangat. ",
			titleHighlight: "Siap dibagikan.",
			desc: "Cellar adalah aplikasi gratis untuk berbagi makanan berlebih dengan warga sekitar. Tanpa biaya, tanpa iklan—murni ketulusan antartetangga.",
			check1: "✓ Gratis diunduh & digunakan",
			check2: "✓ Aktif di lingkungan sekitar Anda",
			check3: "✓ Saling menjaga keamanan makanan",
			steps: [
				{
					step: "01 / Bagikan",
					title: "Foto & unggah makananmu",
					body: "Cukup foto makananmu, tentukan jam pengambilannya, dan sebutkan catatan pentingnya. Selesai kurang dari satu menit.",
				},
				{
					step: "02 / Temukan",
					title: "Temukan di sekitarmu",
					body: "Buka peta atau feed untuk melihat masakan rumah, buah segar petikan kebun, atau sisa roti kafe yang ditawarkan hanya beberapa blok dari tempatmu.",
				},
				{
					step: "03 / Terhubung",
					title: "Jemput & sapa tetangga",
					body: "Kirim pesan lewat chat, sepakati titik temu, dan jemput makanannya. Tanpa perantara, murni kebaikan antartetangga.",
				},
			],
		},
		innerAbout: {
			eyebrow: "Tentang Kami",
			titlePrefix: "Kami percaya makanan baik selayaknya di ",
			titleHighlight: "piring makan",
			desc: "Cellar adalah gerakan berbasis komunitas yang lahir dari keprihatinan sederhana: kita memiliki banyak sekali makanan berlebih, namun begitu banyak yang terbuang sia-sia hanya karena tidak ada cara mudah untuk saling membagikannya dengan tetangga.",
			bannerAlt: "Sekelompok warga dan relawan saling membantu merapikan paket makanan dengan senyuman",
			missionEyebrow: "Misi Kami",
			missionTitle: "Menjadikan aktivitas berbagi makanan sebagai hal yang lumrah.",
			missionDesc: "Kami tidak menjanjikan teknologi yang muluk-muluk. Kami hanya ingin membangun jembatan antarwarga yang hangat, agar memberikan kelebihan sup atau roti ke tetangga terasa semudah menaruhnya di kulkas sendiri.",
			visionEyebrow: "Visi Kami",
			visionTitle: "Lingkungan yang saling terhubung erat.",
			visionDesc: "Kami memimpikan hari-hari di mana tidak ada makanan layak konsumsi yang masuk ke tong sampah. Di mana warga saling terhubung lewat meja makan, rasa percaya, dan komitmen bersama untuk saling menjaga.",
			storyEyebrow: "Awal Perjalanan",
			storyTitle: "Menghubungkan warga lewat sepiring hidangan",
			storyDesc1: "Semuanya dimulai dari dapur kecil kami, saat kami menyadari betapa banyaknya buah matang di pohon halaman rumah, roti segar hari ini, dan sisa masakan rumah yang berakhir di tempat sampah begitu saja hanya karena kita tidak saling menyapa. Kami ingin membuat wadah digital yang terasa hangat dan bersahabat—sebuah tempat di mana tetangga bisa mengetuk pintu virtual untuk saling berbagi kelebihan pangan.",
			storyDesc2: "Kini, kami bangga bisa menghubungkan ribuan keluarga, toko roti lokal, dan komunitas relawan. Semuanya bergerak atas dasar rasa percaya, saling menghargai, dan tekad bersama untuk bebas sampah makanan.",
			storyImgAlt: "Para warga berkumpul dengan akrab berbagi roti dan hidangan hangat",
			valuesEyebrow: "Nilai Dasar",
			valuesTitle: "Prinsip yang menggerakkan Cellar",
			valuesDesc: "Nilai-nilai ini menjadi panduan kami dalam merancang fitur, menulis aturan main, dan menjaga kehangatan interaksi di dalam komunitas.",
			value1Title: "Guyub & Rukun",
			value1Desc: "Kami percaya kekuatan lingkungan dimulai dari hubungan yang baik. Cellar dirancang untuk memicu obrolan hangat dan pertemanan nyata antarwarga sekitar.",
			value2Title: "Keamanan & Saling Menghormati",
			value2Desc: "Kami memperlakukan makanan dan sesama warga dengan rasa hormat yang tinggi. Kami menerapkan panduan berbagi yang jelas agar semua orang merasa aman dan nyaman.",
			value3Title: "Menghargai Jerih Payah",
			value3Desc: "Setiap makanan adalah hasil keringat petani, siraman air, dan energi bumi. Kami menghormati proses tersebut dengan memastikan tidak ada makanan layak konsumsi yang terbuang sia-sia.",
			footerText: "Cellar · Ruang berbagi sederhana untuk lingkungan yang lebih hangat.",
			footerShare: "Cara berbagi →",
			footerApp: "Unduh aplikasi →",
		},
		innerAboutStory: {
			eyebrow: "Kisah Kami",
			titlePrefix: "Langkah sederhana menuju lingkungan yang ",
			titleHighlight: "saling peduli.",
			desc: "Cellar tidak lahir dari ruang rapat korporasi teknologi. Kami dirintis dari meja dapur biasa, dari keinginan sederhana agar tetangga bisa saling berbagi kelebihan makanan dengan mudah.",
			narrativeTitle: "Kesadaran di sekeliling meja makan",
			narrativeDesc1: "Suatu malam, kami melihat panci berisi kelebihan sup hangat dan beberapa potong kue yang tak habis termakan. Membuangnya terasa sangat berat di hati, namun kami bingung harus memberikannya kepada siapa. Mengetuk pintu tetangga satu per satu terasa kurang sopan, dan mempostingnya di media sosial umum rasanya terlalu berlebihan.",
			narrativeDesc2: "Kami pun tersadar: masalah utamanya bukan karena tidak ada warga yang mau berbagi, melainkan tidak adanya media yang menghubungkan kita secara lokal. Kami merancang Cellar untuk menjadi solusi sunyi atas masalah tersebut.",
			narrativeDesc3: "Dari beberapa rumah di satu gang, kini gerakan ini telah tumbuh ke berbagai blok perumahan. Menghubungkan dapur-dapur keluarga, toko kue lokal, hingga petani rumahan yang sepakat untuk membagikan kelebihan mereka daripada membuangnya.",
			timelineEyebrow: "Milestone",
			timelineTitle: "Jejak langkah kebersamaan kita",
			timelineItems: [
				{ year: "2023", title: "Serah-terima pertama", desc: "Sepotong roti sourdough hangat berpindah tangan antartetangga di jalan yang sama." },
				{ year: "2024", title: "Toko kue lokal bergabung", desc: "Toko roti dan kedai kopi mulai menyalurkan kue sisa harian mereka untuk mahasiswa dan keluarga sekitar." },
				{ year: "2025", title: "Meluas antarblok", desc: "Gerakan merambah ke berbagai wilayah, menghubungkan warga yang kelebihan hasil panen kebun dan masakan rumah." },
				{ year: "2026", title: "Menjaga kebiasaan baik", desc: "Terus menyempurnakan platform agar aktivitas berbagi makanan menjadi bagian alami dari keseharian kita semua." },
			],
		},
		innerAboutImpact: {
			eyebrow: "Dampak Sosial",
			titlePrefix: "Perubahan nyata, dimulai langsung dari ",
			titleHighlight: "pekarangan kita.",
			desc: "Setiap makanan yang dibagikan di Cellar adalah aksi nyata menjaga kelestarian bumi. Perlahan tapi pasti, serah-terima kecil di teras rumah ini menumpuk menjadi dampak yang besar.",
			metricsTitle: "Jejak kontribusi bersama",
			metrics: [
				{ value: "25 Ton", label: "Makanan terselamatkan", desc: "Ton makanan layak konsumsi yang berhasil dialihkan langsung ke piring tetangga, bukan ke tempat pembuangan akhir." },
				{ value: "12Ribu+", label: "Porsi tersalurkan", desc: "Aneka lauk pauk, roti segar, dan buah-buahan kebun yang berhasil dibagikan." },
				{ value: "5Ribu+", label: "Warga terhubung", desc: "Keluarga lokal yang aktif saling berkirim pesan dan merapikan penjemputan makanan." },
			],
			pillarsTitle: "Tiga pilar dampak kami",
			pillarsDesc: "Kami mengukur keberhasilan bukan dari angka komersial, melainkan dari eratnya hubungan warga dan jumlah sumber daya alam yang berhasil kita jaga bersama.",
			pillars: [
				{
					title: "Menjaga Bumi Kita",
					desc: "Saat makanan membusuk di tempat pembuangan sampah, ia melepaskan gas metana berbahaya. Dengan membagikannya, kita tidak hanya mencegah hal itu, tapi juga menghargai air, energi, dan kerja keras yang digunakan untuk menanam makanan tersebut.",
				},
				{
					title: "Merajut Kebersamaan",
					desc: "Makanan adalah bahasa kasih universal. Bertegur sapa di pagar rumah saat menyerahkan buah kebun atau kue sisa acara meruntuhkan sekat antarwarga dan membangun rasa saling percaya di lingkungan tempat kita tinggal.",
				},
				{
					title: "Menghargai Makanan",
					desc: "Kami mengajak warga mengubah cara pandang: dari konsumsi instan menjadi rasa syukur yang tulus. Ketika kita mengetahui jerih payah di balik sepotong roti atau hasil kebun tetangga, kita akan lebih menghargainya.",
				},
			],
		},
		innerHowItWorks: {
			donors: {
				eyebrow: "Bagi Pembagi",
				titlePrefix: "Bagikan kelebihan makanan Anda dengan ",
				titleHighlight: "nyaman.",
				desc: "Membagikan makanan ekstra di dapur Anda hanya butuh satu menit. Anda bebas mengatur apa yang ingin dibagikan, menentukan kapan tetangga boleh menjemput, dan memilih cara serah-terima yang paling nyaman.",
				guideTitle: "Panduan berbagi",
				guideDesc: "Kunci utamanya adalah jujur dan sederhana. Berikut langkah mudah untuk mengunggah makanan.",
				steps: [
					{ num: "01", title: "Ambil foto apa adanya", desc: "Cukup foto makanan di atas meja dapur Anda dengan cahaya alami. Kejujuran visual adalah hal yang paling dihargai tetangga." },
					{ num: "02", title: "Tulis bahan & alergen", desc: "Beri deskripsi singkat mengenai makanannya. Wajib sebutkan bahan pemicu alergi seperti kacang, susu, atau gluten agar tetangga bisa memilih dengan aman." },
					{ num: "03", title: "Tentukan titik temu", desc: "Tentukan waktu dan lokasi penjemputan. Banyak pembagi lebih suka menaruh makanan dalam kantong di teras atau pagar agar bisa diambil tanpa kontak langsung." },
				],
				footerTitle: "Siap untuk berbagi hari ini?",
				footerDesc: "Tengoklah kulkas atau kebun Anda sejenak. Pasti ada makanan baik yang lebih bermanfaat jika dibagikan kepada tetangga sekitar.",
				footerBtn: "Kembali ke Beranda",
			},
			recipients: {
				eyebrow: "Bagi Penerima",
				titlePrefix: "Dapatkan makanan segar sekaligus dukung ",
				titleHighlight: "warga sekitar.",
				desc: "Temukan masakan rumah, buah kebun, hingga roti segar dari tetangga dan pelaku usaha lokal di sekitar Anda. Semua makanan di Cellar 100% gratis.",
				guideTitle: "Panduan menerima",
				guideDesc: "Hormati pembagi, tepati janji, dan sambung tali silaturahmi. Berikut cara kerjanya.",
				steps: [
					{ num: "01", title: "Telusuri kiriman terdekat", desc: "Buka peta atau daftar feed untuk melihat makanan yang ditawarkan dalam jarak beberapa blok dari rumah Anda. Periksa bahan makanan dan porsi yang tersedia." },
					{ num: "02", title: "Kirim pesan penjemputan", desc: "Kirim permintaan penjemputan dan sebutkan perkiraan jam kedatangan Anda. Tunggu sampai pembagi menyetujui dan memberikan alamat lengkap." },
					{ num: "03", title: "Tepati waktu jemput", desc: "Hargai waktu luang pembagi. Jika Anda terpaksa terlambat atau batal mengambil, segera kabari lewat chat agar mereka tidak menunggu sia-sia." },
				],
				footerTitle: "Mencari bahan makanan segar?",
				footerDesc: "Lihat apa saja yang sedang dibagikan tetangga di sekitar Anda saat ini. Mari bersama kita pastikan tidak ada makanan baik yang terbuang.",
				footerBtn: "Kembali ke Beranda",
			},
			guidelines: {
				eyebrow: "Aturan Emas",
				titlePrefix: "Bagaimana cara menjadi tetangga yang ",
				titleHighlight: "baik.",
				desc: "Cellar hidup dari rasa percaya dan saling menghargai. Kita bukan jasa pesan-antar makanan, melainkan komunitas tetangga yang saling membantu. Berikut panduan menjaga keharmonisan bersama.",
				photoAlt: "Seorang warga tersenyum ramah menyerahkan kantong belanja berisi makanan segar ke tetangganya",
				guideTitle: "Jaga kehangatan, utamakan rasa saling menghormati.",
				guideDesc: "Cellar bukan pasar swalayan, layanan komersial, atau tempat pembuangan sampah. Ini adalah jembatan sosial antartetangga yang dibangun atas dasar rasa percaya. Karena kita berbagi langsung dari dapur dan pekarangan kita sendiri, mari ikuti panduan sederhana ini agar semua warga merasa aman dan dihargai.",
				items: [
					{ title: "Hanya bagikan makanan layak konsumsi", desc: "Aturannya sangat mudah: bagikan makanan yang Anda sendiri pun masih mau memakannya. Sayuran segar kebun, roti hangat buatan sendiri, atau sisa masakan syukuran yang bersih sangatlah cocok. Jika makanan sudah layu, berjamur, kedaluwarsa, atau sisa porsi piring Anda, tolong jadikan pupuk kompos saja—jangan diberikan kepada tetangga." },
					{ title: "Tepati waktu dan janji penjemputan", desc: "Para tetangga meluangkan waktu di sela kesibukan mereka untuk menyiapkan makanan dan menunggu Anda. Jika Anda berjanji menjemput jam 5 sore, datanglah tepat waktu. Jika ada halangan mendadak, kabari segera lewat chat agar mereka tidak menunggu di depan pintu dengan sia-sia." },
					{ title: "Jauhkan dari uang dan transaksi komersial", desc: "Semua kiriman di Cellar wajib 100% gratis. Dilarang keras menawarkan uang, meminta imbalan, barter barang bernilai, atau mempromosikan bisnis. Sapaan ramah, senyuman hangat, dan ucapan terima kasih yang tulus adalah satu-satunya 'alat tukar' yang kita harapkan." },
				],
			},
		},
		innerImpact: {
			statistics: {
				eyebrow: "Fakta Sampah Makanan",
				titlePrefix: "Melihat kenyataan pahit dari ",
				titleHighlight: "makanan yang terbuang.",
				desc: "Sampah makanan adalah salah satu pemicu utama kerusakan lingkungan dan pemborosan energi bumi. Mari pahami faktanya agar kita bisa lebih bijak mengelola makanan setiap hari.",
				factsTitle: "Beban alam akibat makanan sisa",
				factsDesc: "Saat kita membuang makanan, kita juga membuang seluruh air, lahan, bahan bakar, dan keringat para petani yang bekerja keras menghadirkannya di meja kita.",
				facts: [
					{ title: "Satu Sepertiga Terbuang Percuma", desc: "Sekitar 33% dari seluruh makanan yang diproduksi di bumi terbuang begitu saja, padahal di saat bersamaan masih banyak keluarga yang kekurangan pangan." },
					{ title: "Pemborosan Air Bersih yang Dahsyat", desc: "Sektor pertanian menyerap 70% air bersih dunia. Membuang satu buah burger sama saja dengan membuang-buang air bersih yang setara dengan mandi selama 90 menit." },
					{ title: "Pelepasan Gas Rumah Kaca", desc: "Makanan yang membusuk di TPA tanpa oksigen melepaskan gas metana—gas rumah kaca yang jauh lebih kuat dalam memerangkap panas bumi dibanding karbon dioksida." },
				],
			},
			goals: {
				eyebrow: "Misi Keberlanjutan",
				titlePrefix: "Komitmen nyata untuk lingkungan yang ",
				titleHighlight: "bebas sampah makanan.",
				desc: "Kami tidak mencoba memecahkan masalah dunia dalam satu malam. Fokus kami adalah membantu setiap RT dan perumahan mengurangi sampah makanan secara bertahap lewat kebiasaan harian.",
				goalsTitle: "Target bersama lingkungan kita",
				goalsDesc: "Kami merancang fitur Cellar agar selaras dengan target pelestarian alam lokal secara bertahap.",
				goals: [
					{ title: "Hari Bebas Sampah di Perumahan", desc: "Mengajak warga satu blok perumahan untuk aktif berbagi agar tidak ada satu pun makanan layak konsumsi yang masuk tempat sampah." },
					{ title: "Mendukung Kebun Warga", desc: "Memfasilitasi penyaluran hasil kebun rumahan yang melimpah agar terdistribusi dengan baik sebelum layu dan rusak." },
					{ title: "Kemitraan Kedai & Toko Roti", desc: "Bekerja sama dengan pelaku usaha makanan lokal untuk membiasakan penyelamatan sisa roti atau kue layak makan setiap sore." },
				],
			},
			stories: {
				eyebrow: "Kisah Berbagi",
				titlePrefix: "Makanan yang dibagikan, orang yang terbantu, ",
				titleHighlight: "cerita yang menginspirasi.",
				desc: "Kami bukan lembaga amal besar, melainkan hanya wadah bertemunya sesama warga. Berikut adalah cerita-cerita kecil yang menghangatkan hati dari lingkungan sekitar kita.",
				storiesTitle: "Momen kebersamaan antartetangga",
				storiesDesc: "Mengunggah makanan hanya butuh satu menit, namun kebaikan dan hubungan akrab yang terjalin bisa bertahan selamanya. Berikut cuplikan keseharian warga Cellar.",
			},
		},
		innerContact: {
			eyebrow: "Hubungi Kami",
			title: "Sapa tim pengembang Cellar",
			desc: "Punya pertanyaan seputar cara penggunaan aplikasi, ide kerja sama, atau ingin mengajak warga di lingkungan Anda bergabung? Kirimkan pesan singkat kepada kami.",
			titleForm: "Kirim pesan kepada kami",
			labelName: "Nama Lengkap",
			labelEmail: "Alamat Email",
			labelTopic: "Pilih Topik Pesan",
			topicPlaceholder: "Pilih topik...",
			labelMessage: "Pesan Anda",
			messagePlaceholder: "Tuliskan apa yang ingin Anda sampaikan di sini...",
			btnSubmit: "Kirim Pesan",
			btnSubmitting: "Mengirim...",
			successMessage: "Terima kasih! Pesan Anda telah kami terima. Kami akan segera membalasnya.",
			infoTitle: "Hubungan Langsung",
			infoEmail: "hello@cellar.id",
			infoHourTitle: "Jam Operasional",
			infoHours: "Senin — Jumat: 09.00 sampai 17.00 WIB",
			infoHoursWeekend: "Sabtu — Minggu: Offline (Kami sedang menikmati akhir pekan bersama keluarga dan berbagi makanan!)",
		},
		innerFaq: {
			eyebrow: "Tanya Jawab",
			title: "Pertanyaan yang Sering Diajukan",
			desc: "Temukan segala jawaban seputar cara berbagi, keamanan pangan, dan etika bertetangga di komunitas Cellar.",
			sidebarTitle: "Masih penasaran?",
			sidebarDesc: "Tidak menemukan jawaban yang dicari? Silakan kirim pesan langsung, tim komunitas kami yang ramah akan dengan senang hati membantu Anda.",
			sidebarContact: "Hubungi Kami",
		},
		innerBlog: {
			eyebrow: "Blog",
			title: "Kisah hangat dari dapur dan teras rumah.",
			desc: "Tips mengelola dapur, cerita warga, dan wawasan ringan seputar cara mengurangi sampah makanan secara menyenangkan.",
			readMore: "Baca selengkapnya",
			readTime: "baca",
			notFoundTitle: "Artikel tidak ditemukan",
			notFoundDesc: "Maaf, artikel yang Anda cari tidak dapat ditemukan atau sudah dihapus.",
			btnBack: "Kembali ke Blog",
			relatedTitle: "Artikel Menarik Lainnya",
		},
		subscribeModal: {
			title: "Tetap Terhubung",
			desc: "Bergabunglah dengan warga sekitar. Kami membagikan kisah inspiratif, tips mengolah kelebihan pangan, dan info menarik lainnya—cukup sekali sebulan, bebas spam.",
			placeholder: "Masukkan alamat email Anda",
			btnSubmit: "Ikuti Kabar",
			btnSubmitting: "Mengirim...",
			btnDismiss: "Tidak, terima kasih. Saya ingin melihat-lihat dulu",
			successTitle: "Berhasil Terhubung!",
			successDesc: "Terima kasih telah bergabung. Kami akan segera mengirimkan kabar lingkungan terbaru untuk Anda.",
		},
	},
};
