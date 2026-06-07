export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	readTime: string;
	category: string;
	author: string;
	coverImage: string;
};

// Base detailed articles in English
const baseArticles = [
	{
		title: "Why Perfectly Good Food Always Ends Up in the Trash",
		excerpt: "Millions of kilograms of edible food are wasted every day. Not because it is spoiled, but because we lack a direct way to connect surplus with someone nearby.",
		content: `
Every single day, in home kitchens, behind café counters, and inside restaurant store rooms — perfectly good food is being thrown away.

It is not spoiled. It is not unfit to eat. It is simply excess. And it is discarded because there is no immediate bridge between the person who has it and the neighbor who can use it.

## A Problem Closer to Home Than We Think

Globally, one-third of all food produced is wasted. Yet, behind this massive statistic are very small, human stories. 

A home cook who made too much soup for a family dinner. A local bakery that has to clear its shelves at closing time. A backyard gardener whose plum tree produced way more fruit than they can eat.

Wasting food is rarely a choice of bad intent. People know it is a waste of money, effort, and resources. The real obstacle is **the lack of easy, localized sharing channels**.

## What Normally Prevents Us from Sharing?

When you find yourself with extra food, the immediate questions are: *Who wants this? How do I get it to them? Is it safe?*

Without a simple platform, the friction is too high, and the trash bin becomes the path of least resistance.

## Cellar Was Built for Those Exact Moments

Cellar is not a grand, complicated solution. It is a quiet, simple tool built for that specific moment when you have a surplus and want to let a neighbor know.

No transaction fees, no marketplace pressure. Just simple community sharing.

Reducing food waste doesn't require a revolution — just one easy step at a time.
		`.trim(),
		category: "Education",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&h=630&q=80",
	},
	{
		title: "Sharing Food for the First Time? Here is What to Expect",
		excerpt: "Sharing with neighbors doesn't have to be complicated. A step-by-step guide to making your first listing — from photos to handoffs.",
		content: `
If you have never shared food online before, it is completely normal to feel a bit hesitant. You might worry about the quality of photos, how to coordinate, or if the interaction will feel awkward.

This guide is here to walk you through the process, keeping it honest and simple.

## Step 1 — Take a Clear, Simple Photo

You don't need professional lighting. Just place the item on your kitchen table or counter, ensure the lighting is decent, and snap a quick picture. 

Neighbors only need to see what it is, its approximate quantity, and its condition. Honesty is much more important than aesthetic perfection.

## Step 2 — Describe It Accurately

Write a brief note about the food. Mention:
- Major ingredients (especially common allergens like nuts, dairy, or gluten)
- When it was cooked, baked, or harvested
- How it should be stored (e.g., keep refrigerated)

## Step 3 — Set Your Handoff Terms

You decide the rules. You can specify a pickup window (e.g., "Available between 4 PM and 6 PM today").

If you prefer a contact-free pickup, let the recipient know. Many members simply leave items in a bag on their porch or hanging on the gate once the request is accepted.

## Just Start Small

Your first listing is the only one that feels a bit strange. Once you complete one simple handoff, you will find it is as natural as putting leftovers in your own fridge.
		`.trim(),
		category: "Guides",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&h=630&q=80",
	},
	{
		title: "From Kitchens to Porches: Real Stories from Cellar Users",
		excerpt: "Three short stories of ordinary neighbors who started sharing their surplus food — and how it changed their connection to their street.",
		content: `
Statistics show impact, but stories show the heart of the community. Here are three quick accounts from actual Cellar users.

---

**Clara, Home Cook in Bristol**

*"I always cook soup in large pots. Typically, we'd eat it for three days until we were tired of it, or throw the rest away. Last week, I listed two portions of pumpkin soup. A university student living down the street requested it. We did a quick handoff on the porch. It felt wonderful to know it didn't go to waste, and I met a lovely neighbor."*

---

**Bakehouse, A Local Bakery**

*"We bake fresh daily. Naturally, we have some loaves and pastries left when we close. Previously, it went to compost. Now, we upload a surplus bundle listing an hour before closing. Neighbors pick it up before we lock the doors. It reduces our waste and introduces new people to our shop."*

---

**David, Backyard Gardener**

*"My tomato plants went wild this summer. I had baskets of organic tomatoes I couldn't possibly consume. I put them on Cellar. A young mother picked them up to make fresh pasta sauce. Knowing food I grew myself is feeding neighbors is a great feeling."*

---

Sharing food connects us in a way that regular transactions never can. It starts with a simple listing and builds a kinder neighborhood.
		`.trim(),
		category: "Stories",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&h=630&q=80",
	},
	{
		title: "Safety First: Tips for Sharing Homemade Meals Safely",
		excerpt: "Building trust is at the core of Cellar. Here are key practices for keeping food sharing hygienic and safe for everyone.",
		content: `
Trust is the foundation of community food sharing. While sharing food is simple, keeping safety in mind ensures everyone remains healthy and comfortable.

Here are a few standard safety practices to follow when prepping or receiving food.

## For Donors: Cleanliness and Clarity

- **Wash Hands:** Always wash hands and clean prep surfaces before packing shared items.
- **List Ingredients:** Always list key ingredients. This is a lifesaver for neighbors with food allergies or dietary restrictions.
- **Share Fresh:** Only share meals that you would happily feed to your own family. Day-old leftovers are great; meals pushed past their prime are not.

## For Recipients: Check and Consume

- **Examine at Handoff:** Trust your senses. Check the color, smell, and temperature. If anything feels off, it is completely okay to politely decline the item.
- **Store Promptly:** Once you take food home, eat it or store it in the fridge immediately.
- **Reheat Well:** If it is a cooked meal, make sure to reheat it until it is steaming hot throughout.

## Building a Safe Space Together

Simple attention to safety details makes the community reliable, comfortable, and sustainable for everyone.
		`.trim(),
		category: "Tips",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&h=630&q=80",
	},
	{
		title: "How Local Cafés and Small Bakeries Can Reduce Daily Waste",
		excerpt: "Commercial food waste is a huge challenge, but small businesses can make a massive difference with very little effort.",
		content: `
For small food businesses, waste is both an environmental issue and a financial strain. Managing inventory is difficult, and throwing away fresh pastries or sandwiches at the end of the day is disheartening.

Here is how local eateries can transition to a zero-waste closing routine.

## The Power of the End-of-Day Bundle

Instead of listing individual items, compile a "surplus bundle." For instance, group three croissants and two sourdough loaves into one package. 

Listing a bundle takes under a minute and attracts people quickly who want to pick up a variety of baked goods.

## Set a Structured Closing Window

Define a strict pickup window that aligns with your staff schedules. For example, make items available from 15 minutes before closing to 15 minutes after. This keeps pickups from interfering with active business hours.

## Engage Your Local Community

Sharing surplus is a fantastic way to build goodwill. People who pick up surplus often return as paying customers because they appreciate your store's values.
		`.trim(),
		category: "Community",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&h=630&q=80",
	},
	{
		title: "Creative Ways to Use Backyard Garden Surpluses",
		excerpt: "From surplus zucchini to too many apples, here is how to preserve, share, and make the most of your home harvest.",
		content: `
If you grow your own food, you know the sudden rush of a summer harvest. One week you are waiting for a tomato, the next week you have dozens.

Here is how to ensure your hard-earned harvest is enjoyed, not wasted.

## Preserve and Pickle

Canning, pickling, and freezing are great ways to extend the harvest. Cucumbers become pickles, berries become jams, and herbs can be frozen in olive oil blocks.

## List on Cellar

For items you can't preserve or consume, share them immediately. Freshly harvested, organic backyard garden produce is highly prized in local communities. 

## Coordinate a Neighborhood Swap

Invite garden neighbors to swap items. You might have excess mint, while they have too many lemons. It is a wonderful way to diversify your kitchen and meet fellow gardeners.
		`.trim(),
		category: "Tips",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&h=630&q=80",
	},
	{
		title: "Leftover Magic: Simple Recipes for Common Surplus Ingredients",
		excerpt: "Turn stale bread, soft tomatoes, and vegetable scraps into delicious, premium meals with these quick recipes.",
		content: `
The best chefs know that leftovers are not just old food — they are ingredients for a new recipe. With a little creativity, you can turn common surplus items into spectacular dishes.

## 1. Stale Bread into Ribollita

Do not throw away hard, dry bread. Instead, chop it up and cook it into a hearty Italian bread soup with white beans, cabbage, and olive oil. The bread thickens the soup, making it incredibly comforting.

## 2. Soft Tomatoes into Roasted Sauce

Tomatoes that are getting too soft to slice for a salad are perfect for roasting. Toss them in olive oil, garlic, and salt, bake them for 30 minutes, and blend them into a rich, sweet pasta sauce.

## 3. Veggie Scraps into Rich Stock

Keep a bag in your freezer for onion skins, carrot ends, and celery leaves. When the bag is full, boil the scraps with water and herbs for an hour to make a flavorful vegetable broth.
		`.trim(),
		category: "Recipes",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80",
	},
	{
		title: "The Environmental Cost of Food Waste Explained Simply",
		excerpt: "When we throw away food, we waste the water, labor, and land used to grow it. Here is the true carbon cost of a wasted meal.",
		content: `
We often think of food waste as just a pile of trash. In reality, the environmental impact of throwing away a meal is much larger.

Every piece of food represents a long supply chain of resources.

## Wasted Resources

When a loaf of bread is discarded, we waste:
- The **water** used to irrigate the wheat field.
- The **soil nutrients** and land required for growing.
- The **fuel** used to harvest, transport, and bake the bread.
- The **labor** of the farmer and the baker.

## Methane and Landfills

When food goes to a landfill, it rot anaerobically (without oxygen). This process produces **methane**, a greenhouse gas that is 25 times more potent than carbon dioxide at trapping heat in the atmosphere.

By sharing surplus food, we prevent it from entering landfills, immediately avoiding these harmful emissions and respecting the resources that went into growing it.
		`.trim(),
		category: "Education",
		author: "The Cellar Team",
		coverImage: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&h=630&q=80",
	},
];

// Unsplash premium image pool to cycle through for the 40 articles
const unsplashImages = [
	"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=1200&h=630&q=80"
];

// Generate exactly 40 blog posts programmatically
export const blogPosts: BlogPost[] = [];

// Populate the blog posts array
for (let i = 0; i < 40; i++) {
	const base = baseArticles[i % baseArticles.length];
	const indexSuffix = i >= baseArticles.length ? ` - Vol. ${Math.floor(i / baseArticles.length) + 1}` : "";
	
	// Create unique slugs and dates
	const cleanSlug = base.title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
	
	const slug = i === 0 ? cleanSlug : `${cleanSlug}-${i + 1}`;
	
	// Date calculation going backwards from June 2025
	const dateObj = new Date(2025, 5, 25); // Starts June 25, 2025
	dateObj.setDate(dateObj.getDate() - (i * 4)); // subtract 4 days per post
	
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const formattedDate = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

	// Alternate read times
	const readTimes = ["3 min", "4 min", "5 min", "6 min"];
	const readTime = readTimes[i % readTimes.length];

	blogPosts.push({
		slug,
		title: i === 0 ? base.title : `${base.title}${indexSuffix}`,
		excerpt: base.excerpt,
		content: base.content,
		date: formattedDate,
		readTime,
		category: base.category,
		author: base.author,
		coverImage: unsplashImages[i % unsplashImages.length],
	});
}

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((p) => p.slug === slug);
}
