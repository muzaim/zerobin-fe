"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function BlogPage() {
	const { language, startLoading, stopLoading } = useLanguageStore();
	const tBlog = translations[language].innerBlog;

	const [featured, ...rest] = blogPosts;
	const [visibleCount, setVisibleCount] = useState(7); // 1 featured + 6 initial grid items
	const [isLoading, setIsLoading] = useState(false);
	const loaderRef = useRef<HTMLDivElement | null>(null);

	// Simulate API fetching progress bar on mount
	useEffect(() => {
		startLoading();
		const timer = setTimeout(() => {
			stopLoading();
		}, 600);
		return () => clearTimeout(timer);
	}, [startLoading, stopLoading]);

	useEffect(() => {
		document.title = `${tBlog.eyebrow} — Cellar`;
	}, [tBlog.eyebrow]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first.isIntersecting && !isLoading && visibleCount < blogPosts.length) {
					setIsLoading(true);
					// Premium micro-delay to simulate loading natural data
					setTimeout(() => {
						setVisibleCount((prev) => Math.min(prev + 6, blogPosts.length));
						setIsLoading(false);
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
	}, [isLoading, visibleCount]);

	// Grid posts to display
	const displayedGridPosts = rest.slice(0, visibleCount - 1);
	const hasMore = visibleCount < blogPosts.length;

	// Extract local data helper
	const getLocalPost = (post: typeof featured) => {
		return post[language];
	};

	const featuredLocal = featured ? getLocalPost(featured) : null;

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-24">
			<div className="site-shell">

				{/* Header */}
				<div className="max-w-2xl mb-16">
					<p className="eyebrow">{tBlog.eyebrow}</p>
					<h1 className="display-title mt-4 text-[clamp(2.4rem,7vw,3.8rem)]">
						{tBlog.title}
					</h1>
					<p className="section-copy mt-5">
						{tBlog.desc}
					</p>
				</div>

				{/* Featured Article */}
				{featured && featuredLocal && (
					<Link href={`/blog/${featured.slug}`} className="group block mb-12">
						<div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 border border-[var(--line)] rounded-[20px] overflow-hidden bg-[var(--surface)] hover:border-[var(--brand)] transition-colors duration-200">
							<div className="relative aspect-[16/9] lg:aspect-auto min-h-[260px]">
								<Image
									src={featured.coverImage}
									alt={featuredLocal.title}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 560px"
									priority
								/>
							</div>
							<div className="p-7 sm:p-10 flex flex-col justify-center">
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
								<div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
									{tBlog.readMore} <ArrowRight size={15} />
								</div>
								<p className="mt-4 text-xs text-[var(--muted)]">
									{featuredLocal.date} · {featured.author}
								</p>
							</div>
						</div>
					</Link>
				)}

				{/* Article Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{displayedGridPosts.map((post) => {
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

					{/* Skeletons while loading */}
					{isLoading && (
						<>
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
						</>
					)}
				</div>

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

			</div>
		</div>
	);
}

// Premium Skeleton Card component
function SkeletonCard() {
	return (
		<div className="border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)] animate-pulse">
			<div className="aspect-[16/9] bg-[var(--surface-soft)] w-full" />
			<div className="p-5 sm:p-6 space-y-3">
				<div className="flex gap-3">
					<div className="h-3.5 bg-[var(--surface-soft)] w-1/4 rounded-full" />
					<div className="h-3.5 bg-[var(--surface-soft)] w-1/6 rounded-full" />
				</div>
				<div className="h-6 bg-[var(--surface-soft)] w-11/12 rounded-lg mt-3" />
				<div className="h-4 bg-[var(--surface-soft)] w-full rounded-md mt-2" />
				<div className="h-4 bg-[var(--surface-soft)] w-2/3 rounded-md" />
				<div className="h-3.5 bg-[var(--surface-soft)] w-1/3 rounded-full mt-4" />
			</div>
		</div>
	);
}
