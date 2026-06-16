"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertCircle } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import {  useLanguageStore , useCurrentLanguage } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function BlogPage() {
	const { startLoading, stopLoading } = useLanguageStore();
	const language = useCurrentLanguage();
	const tBlog = translations[language].innerBlog;

	const [visibleCount, setVisibleCount] = useState(7); // initial visible grid count if not searching
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [isPageLoading, setIsPageLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");
	const loaderRef = useRef<HTMLDivElement | null>(null);

	// Category mapping
	const categories = {
		en: [
			{ id: "all", label: "All Topics" },
			{ id: "education", label: "Education" },
			{ id: "guides", label: "Guides" },
			{ id: "stories", label: "Stories" },
			{ id: "tips", label: "Tips" }
		],
		id: [
			{ id: "all", label: "Semua Topik" },
			{ id: "education", label: "Edukasi" },
			{ id: "guides", label: "Panduan" },
			{ id: "stories", label: "Kisah" },
			{ id: "tips", label: "Tips" }
		]
	};

	// Simulate API fetching progress bar on mount
	useEffect(() => {
		startLoading();
		const timer = setTimeout(() => {
			stopLoading();
			setIsPageLoading(false);
		}, 600);
		return () => clearTimeout(timer);
	}, [startLoading, stopLoading]);

	useEffect(() => {
		document.title = `${tBlog.eyebrow} — ZeroBin`;
	}, [tBlog.eyebrow]);

	// Filter posts based on active category and search query
	const filteredPosts = blogPosts.filter((post) => {
		const matchesCategory = 
			activeCategory === "all" || 
			post.en.category.toLowerCase() === activeCategory.toLowerCase();

		const postLocal = post[language];
		const query = searchQuery.toLowerCase().trim();
		const matchesSearch = 
			postLocal.title.toLowerCase().includes(query) ||
			postLocal.excerpt.toLowerCase().includes(query) ||
			postLocal.content.toLowerCase().includes(query) ||
			post.author.toLowerCase().includes(query);

		return matchesCategory && matchesSearch;
	});

	// Infinite scroll implementation (only active when not filtering/searching)
	const isFiltering = searchQuery !== "" || activeCategory !== "all";
	const hasMore = !isFiltering && visibleCount < blogPosts.length;

	useEffect(() => {
		if (isFiltering || isPageLoading) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first.isIntersecting && !isLoadingMore && visibleCount < blogPosts.length) {
					setIsLoadingMore(true);
					// Premium micro-delay to simulate loading natural data
					setTimeout(() => {
						setVisibleCount((prev) => Math.min(prev + 6, blogPosts.length));
						setIsLoadingMore(false);
					}, 800);
				}
			},
			{ threshold: 0.1 }
		);

		const currentLoader = loaderRef.current;
		if (currentLoader) {
			observer.observe(currentLoader);
		}

		return () => {
			if (currentLoader) {
				observer.unobserve(currentLoader);
			}
		};
	}, [isLoadingMore, visibleCount, isFiltering, isPageLoading]);

	// Layout separation: featured vs grid
	let featuredPost: typeof blogPosts[0] | null = null;
	let gridPosts: typeof blogPosts = [];

	if (isPageLoading) {
		// Just skeleton layout
	} else if (isFiltering) {
		// Grid layout for all matching items
		gridPosts = filteredPosts;
	} else {
		// Standard layout: 1 featured at top, rest in grid
		const [f, ...rest] = filteredPosts;
		featuredPost = f;
		gridPosts = rest.slice(0, visibleCount - 1);
	}

	const getLocalPost = (post: typeof blogPosts[0]) => {
		return post[language];
	};

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-24">
			<div className="site-shell">

				{/* Header */}
				<div className="max-w-2xl mb-12">
					<p className="eyebrow">{tBlog.eyebrow}</p>
					<h1 className="display-title mt-4 text-[clamp(2.4rem,7vw,3.8rem)]">
						{tBlog.title}
					</h1>
					<p className="section-copy mt-5">
						{tBlog.desc}
					</p>
				</div>

				{/* Category Filter bar */}
				<div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-[var(--line)]">
					{categories[language].map((cat) => (
						<button
							key={cat.id}
							onClick={() => {
								setActiveCategory(cat.id);
								setVisibleCount(7); // reset count
							}}
							className={`px-4 py-2 rounded-full text-xs font-semibold border transition duration-200 cursor-pointer ${
								activeCategory === cat.id
									? "bg-[var(--brand)] border-[var(--brand)] text-white"
									: "bg-white border-[var(--line)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--brand-dark)]"
							}`}
						>
							{cat.label}
						</button>
					))}
				</div>

				{/* Loading / Skeletons */}
				{isPageLoading ? (
					<div>
						<SkeletonFeaturedCard />
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
						</div>
					</div>
				) : (
					<>
						{/* Featured Post (only displayed when not filtering) */}
						{!isFiltering && featuredPost && (
							(() => {
								const featuredLocal = getLocalPost(featuredPost);
								return (
									<Link href={`/blog/${featuredPost.slug}`} className="group block mb-12">
										<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 lg:gap-8 border border-[var(--line)] rounded-[20px] overflow-hidden bg-[var(--surface)] hover:border-[var(--brand)] transition-colors duration-200">
											<div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:h-auto lg:min-h-full">
												<Image
													src={featuredPost.coverImage}
													alt={featuredLocal.title}
													fill
													className="object-cover"
													sizes="(max-width: 1024px) 100vw, 560px"
													priority
												/>
											</div>
											<div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
												<div className="flex items-center gap-3 mb-4">
													<span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--brand)]">
														{featuredLocal.category}
													</span>
													<span className="text-[var(--muted)] text-xs">·</span>
													<span className="text-[var(--muted)] text-xs">
														{featuredLocal.readTime} {tBlog.readTime}
													</span>
												</div>
												<h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--brand)] transition-colors">
													{featuredLocal.title}
												</h2>
												<p className="mt-3 text-[var(--muted)] leading-relaxed text-sm sm:text-base">
													{featuredLocal.excerpt}
												</p>
												<p className="mt-6 text-xs text-[var(--muted)]">
													{featuredLocal.date} · {featuredPost.author}
												</p>
											</div>
										</div>
									</Link>
								);
							})()
						)}

						{/* Grid Items */}
						{gridPosts.length > 0 ? (
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{gridPosts.map((post) => {
									const postLocal = getLocalPost(post);
									return (
										<Link
											key={post.slug}
											href={`/blog/${post.slug}`}
											className="group block border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)] hover:border-[var(--brand)] transition-colors duration-200"
										>
											<div className="relative aspect-[16/9]">
												<Image
													src={post.coverImage}
													alt={postLocal.title}
													fill
													className="object-cover group-hover:scale-102 transition-transform duration-300"
													sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
												/>
											</div>
											<div className="p-5 sm:p-6">
												<div className="flex items-center gap-3 mb-3">
													<span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--brand)]">
														{postLocal.category}
													</span>
													<span className="text-[var(--muted)] text-xs">·</span>
													<span className="text-[var(--muted)] text-xs">
														{postLocal.readTime} {tBlog.readTime}
													</span>
												</div>
												<h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--brand)] transition-colors line-clamp-2">
													{postLocal.title}
												</h3>
												<p className="mt-2 text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
													{postLocal.excerpt}
												</p>
												<p className="mt-4 text-xs text-[var(--muted)]">{postLocal.date}</p>
											</div>
										</Link>
									);
								})}

								{/* Infinite Scroll items loading */}
								{isLoadingMore && (
									<>
										<SkeletonCard />
										<SkeletonCard />
										<SkeletonCard />
									</>
								)}
							</div>
						) : (
							/* Empty Results State */
							<div className="py-16 text-center border border-dashed border-[var(--line)] rounded-[20px] bg-white/50">
								<AlertCircle size={36} className="mx-auto text-[var(--muted)] mb-3 animate-bounce" />
								<p className="text-[var(--foreground)] font-semibold text-sm">
									{language === "en" ? "No articles match your criteria." : "Tidak ada artikel yang cocok dengan kriteria Anda."}
								</p>
								<p className="text-xs text-[var(--muted)] mt-1">
									{language === "en" ? "Try checking your spelling or choosing another topic." : "Periksa kembali ejaan Anda atau pilih topik yang lain."}
								</p>
							</div>
						)}

						{/* Scroll Trigger Detector */}
						{hasMore && (
							<div
								ref={loaderRef}
								className="w-full flex items-center justify-center mt-12 py-6"
							>
								<div className="flex gap-2">
									<span className="h-2 w-2 rounded-full bg-[var(--brand)] animate-bounce" style={{ animationDelay: "0ms" }} />
									<span className="h-2 w-2 rounded-full bg-[var(--brand)] animate-bounce" style={{ animationDelay: "150ms" }} />
									<span className="h-2 w-2 rounded-full bg-[var(--brand)] animate-bounce" style={{ animationDelay: "300ms" }} />
								</div>
							</div>
						)}
					</>
				)}

			</div>
		</div>
	);
}

// Premium Skeleton Featured Card component
function SkeletonFeaturedCard() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 lg:gap-8 border border-[var(--line)] rounded-[20px] overflow-hidden bg-[var(--surface)] mb-12">
			<div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:h-auto lg:min-h-full animate-shimmer" />
			<div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4">
				<div className="flex items-center gap-3">
					<div className="h-3.5 w-1/4 rounded-full animate-shimmer" />
					<div className="h-3.5 w-1/6 rounded-full animate-shimmer" />
				</div>
				<div className="space-y-2.5">
					<div className="h-7 w-11/12 rounded-lg animate-shimmer" />
					<div className="h-7 w-3/4 rounded-lg animate-shimmer" />
				</div>
				<div className="space-y-2 mt-2">
					<div className="h-4 w-full rounded-md animate-shimmer" />
					<div className="h-4 w-full rounded-md animate-shimmer" />
					<div className="h-4 w-5/6 rounded-md animate-shimmer" />
				</div>
				<div className="h-3.5 w-1/4 rounded-full animate-shimmer mt-4" />
			</div>
		</div>
	);
}

// Premium Skeleton Card component
function SkeletonCard() {
	return (
		<div className="border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)]">
			<div className="aspect-[16/9] w-full animate-shimmer" />
			<div className="p-5 sm:p-6 space-y-3">
				<div className="flex gap-3">
					<div className="h-3.5 w-1/4 rounded-full animate-shimmer" />
					<div className="h-3.5 w-1/6 rounded-full animate-shimmer" />
				</div>
				<div className="h-6 w-11/12 rounded-lg mt-3 animate-shimmer" />
				<div className="space-y-2 mt-2">
					<div className="h-4 w-full rounded-md animate-shimmer" />
					<div className="h-4 w-2/3 rounded-md animate-shimmer" />
				</div>
				<div className="h-3.5 w-1/3 rounded-full mt-4 animate-shimmer" />
			</div>
		</div>
	);
}
