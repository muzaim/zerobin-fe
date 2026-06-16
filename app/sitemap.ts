import { MetadataRoute } from "next";
import { fetchBlogPosts } from "@/lib/blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://zerobin.id";
	const staticPages = [
		"",
		"/about",
		"/about/story",
		"/about/impact",
		"/how-it-works/donors",
		"/how-it-works/recipients",
		"/how-it-works/guidelines",
		"/impact/statistics",
		"/impact/goals",
		"/impact/stories",
		"/faq",
		"/contact",
		"/blog",
	];

	const staticSitemaps = staticPages.flatMap((page) => {
		const url = `${baseUrl}${page}`;
		return [
			{
				url: url,
				lastModified: new Date(),
				changeFrequency: "weekly" as const,
				priority: page === "" ? 1.0 : 0.8,
			},
			{
				url: `${url}?lang=en`,
				lastModified: new Date(),
				changeFrequency: "weekly" as const,
				priority: page === "" ? 0.9 : 0.7,
			},
			{
				url: `${url}?lang=id`,
				lastModified: new Date(),
				changeFrequency: "weekly" as const,
				priority: page === "" ? 0.9 : 0.7,
			},
		];
	});

	const posts = await fetchBlogPosts();

	const blogSitemaps = posts.flatMap((post) => {
		const url = `${baseUrl}/blog/${post.slug}`;
		return [
			{
				url: url,
				lastModified: new Date(post.en.date),
				changeFrequency: "monthly" as const,
				priority: 0.6,
			},
			{
				url: `${url}?lang=en`,
				lastModified: new Date(post.en.date),
				changeFrequency: "monthly" as const,
				priority: 0.5,
			},
			{
				url: `${url}?lang=id`,
				lastModified: new Date(post.en.date),
				changeFrequency: "monthly" as const,
				priority: 0.5,
			},
		];
	});

	return [...staticSitemaps, ...blogSitemaps];
}
