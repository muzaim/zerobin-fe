"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { blogPosts, getBlogPost, BlogPost } from "@/lib/blog-data";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = use(params);
	const post = getBlogPost(slug);
	const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
	const { language, startLoading, stopLoading } = useLanguageStore();
	const tBlog = translations[language].innerBlog;
	const lenis = useLenis();

	const postLocal = post ? post[language] : null;
	const [isPageLoading, setIsPageLoading] = useState(true);

	// Simulate API fetching progress bar on mount/slug change
	useEffect(() => {
		setIsPageLoading(true);
		startLoading();
		const timer = setTimeout(() => {
			stopLoading();
			setIsPageLoading(false);
		}, 700);
		return () => clearTimeout(timer);
	}, [slug, startLoading, stopLoading]);

	// Handle scroll to top, dynamic title, and client-side random articles
	useEffect(() => {
		if (lenis) {
			lenis.scrollTo(0, { immediate: true });
		} else if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "auto" });
			document.documentElement.scrollTo({ top: 0, behavior: "auto" });
			document.body.scrollTo({ top: 0, behavior: "auto" });
		}

		if (postLocal) {
			document.title = `${postLocal.title} — ZeroBin`;
		}

		const filtered = blogPosts.filter((p) => p.slug !== slug);
		const shuffled = [...filtered]
			.sort(() => 0.5 - Math.random())
			.slice(0, 3);
		setTimeout(() => {
			setRelatedPosts(shuffled);
		}, 0);
	}, [slug, postLocal, lenis]);

	if (!post || !postLocal) {
		return (
			<div className="min-h-screen bg-[var(--background)] pt-32 pb-24 flex items-center justify-center">
				<div className="site-shell text-center max-w-md">
					<h1 className="font-[var(--font-display)] text-3xl font-bold text-[var(--foreground)]">
						{tBlog.notFoundTitle}
					</h1>
					<p className="mt-4 text-[var(--muted)] leading-relaxed text-sm">
						{tBlog.notFoundDesc}
					</p>
					<Link
						href="/blog"
						className="primary-button inline-flex mt-8 gap-2"
					>
						<ArrowLeft size={16} /> {tBlog.btnBack}
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[var(--background)] pt-32 pb-24">
			<div className="site-shell">
				{isPageLoading ? (
					<SkeletonDetailPage tBlog={tBlog} />
				) : (
					<>
						{/* Back Button */}
						<div className="mb-10">
							<Link
								href="/blog"
								className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--brand)] transition-colors duration-200"
							>
								<ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
								{tBlog.btnBack}
							</Link>
						</div>

						{/* Header Section */}
						<article className="max-w-3xl mx-auto">
							<header className="mb-10">
								<div className="flex flex-wrap items-center gap-3 mb-5">
									<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--brand-soft)] text-[var(--brand-dark)] text-xs font-semibold tracking-wider uppercase font-mono">
										<Tag size={12} />
										{postLocal.category}
									</span>
									<span className="text-[var(--line)]">|</span>
									<span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)]">
										<Clock size={12} />
										{postLocal.readTime} {tBlog.readTime}
									</span>
								</div>

								<h1 className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight tracking-tight">
									{postLocal.title}
								</h1>

								<div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--line)] text-sm text-[var(--muted)]">
									<div className="h-8 w-8 rounded-full bg-[var(--brand-soft)] flex items-center justify-center text-[var(--brand-dark)] font-bold font-mono">
										C
									</div>
									<div>
										<span className="font-semibold text-[var(--foreground)]">{post.author}</span>
										<span className="mx-2">·</span>
										<span>{postLocal.date}</span>
									</div>
								</div>
							</header>

							{/* Cover Image */}
							<div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-[var(--line)] shadow-sm bg-[var(--surface-soft)] mb-12">
								<Image
									src={post.coverImage}
									alt={postLocal.title}
									fill
									priority
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 800px"
								/>
							</div>

							{/* Article Body */}
							<div className="prose max-w-none text-[var(--foreground)] leading-relaxed text-[16px] sm:text-[18px]">
								{parseMarkdown(postLocal.content)}
							</div>
						</article>

						{/* Related Articles Section */}
						{relatedPosts.length > 0 && (
							<section className="max-w-4xl mx-auto mt-20 pt-12 border-t border-[var(--line)]">
								<h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--foreground)] mb-8">
									{tBlog.relatedTitle}
								</h3>
								<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
									{relatedPosts.map((p) => {
										const pLocal = p[language];
										return (
											<Link
												key={p.slug}
												href={`/blog/${p.slug}`}
												className="group block border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)] hover:border-[var(--brand)] transition-colors duration-200"
											>
												<div className="relative aspect-[16/9] overflow-hidden">
													<Image
														src={p.coverImage}
														alt={pLocal.title}
														fill
														className="object-cover group-hover:scale-105 transition-transform duration-500"
														sizes="(max-width: 640px) 100vw, 380px"
													/>
												</div>
												<div className="p-5">
													<span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--brand)] block mb-2">
														{pLocal.category}
													</span>
													<h4 className="font-[var(--font-display)] text-base font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--brand)] transition-colors line-clamp-2">
														{pLocal.title}
													</h4>
												</div>
											</Link>
										);
									})}
								</div>
							</section>
						)}
					</>
				)}
			</div>
		</div>
	);
}

// Premium Detailed Article Skeleton Component
function SkeletonDetailPage({ tBlog }: { tBlog: any }) {
	return (
		<div className="max-w-3xl mx-auto">
			{/* Back button placeholder */}
			<div className="h-4 w-24 animate-shimmer mb-10 rounded-md" />

			<header className="mb-10 space-y-4">
				{/* Tag & read time */}
				<div className="flex items-center gap-3">
					<div className="h-6 w-20 animate-shimmer rounded-full" />
					<span className="text-[var(--line)]">|</span>
					<div className="h-4 w-16 animate-shimmer rounded-md" />
				</div>

				{/* Title lines */}
				<div className="space-y-3 pt-2">
					<div className="h-10 w-11/12 animate-shimmer rounded-lg" />
					<div className="h-10 w-4/5 animate-shimmer rounded-lg" />
					<div className="h-10 w-2/3 animate-shimmer rounded-lg" />
				</div>

				{/* Author info */}
				<div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--line)]">
					<div className="h-8 w-8 rounded-full animate-shimmer" />
					<div className="space-y-1.5 flex-1">
						<div className="h-3.5 w-1/4 animate-shimmer rounded-md" />
					</div>
				</div>
			</header>

			{/* Cover image */}
			<div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden border border-[var(--line)] animate-shimmer mb-12" />

			{/* Prose content paragraphs */}
			<div className="space-y-8">
				<div className="space-y-3">
					<div className="h-4 w-full animate-shimmer rounded-md" />
					<div className="h-4 w-full animate-shimmer rounded-md" />
					<div className="h-4 w-11/12 animate-shimmer rounded-md" />
					<div className="h-4 w-4/5 animate-shimmer rounded-md" />
				</div>
				<div className="space-y-3">
					<div className="h-4 w-full animate-shimmer rounded-md" />
					<div className="h-4 w-full animate-shimmer rounded-md" />
					<div className="h-4 w-5/6 animate-shimmer rounded-md" />
				</div>
				<div className="space-y-3">
					<div className="h-4 w-full animate-shimmer rounded-md" />
					<div className="h-4 w-11/12 animate-shimmer rounded-md" />
					<div className="h-4 w-full animate-shimmer rounded-md" />
					<div className="h-4 w-3/4 animate-shimmer rounded-md" />
				</div>
			</div>
			
			{/* Related posts title */}
			<div className="mt-20 pt-12 border-t border-[var(--line)] space-y-6">
				<div className="h-7 w-48 animate-shimmer rounded-lg" />
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<div className="border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)]">
						<div className="aspect-[16/9] w-full animate-shimmer" />
						<div className="p-5 space-y-3">
							<div className="h-3 w-1/4 animate-shimmer rounded-full" />
							<div className="h-4 w-11/12 animate-shimmer rounded-md" />
							<div className="h-3.5 w-1/3 animate-shimmer rounded-full mt-2" />
						</div>
					</div>
					<div className="border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)]">
						<div className="aspect-[16/9] w-full animate-shimmer" />
						<div className="p-5 space-y-3">
							<div className="h-3 w-1/4 animate-shimmer rounded-full" />
							<div className="h-4 w-11/12 animate-shimmer rounded-md" />
							<div className="h-3.5 w-1/3 animate-shimmer rounded-full mt-2" />
						</div>
					</div>
					<div className="border border-[var(--line)] rounded-[16px] overflow-hidden bg-[var(--surface)]">
						<div className="aspect-[16/9] w-full animate-shimmer" />
						<div className="p-5 space-y-3">
							<div className="h-3 w-1/4 animate-shimmer rounded-full" />
							<div className="h-4 w-11/12 animate-shimmer rounded-md" />
							<div className="h-3.5 w-1/3 animate-shimmer rounded-full mt-2" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Markdown Parser Helper Function
function parseMarkdown(content: string) {
	const lines = content.split("\n");
	return lines.map((line, index) => {
		const trimmed = line.trim();
		if (!trimmed) return <div key={index} className="h-4" />;

		// Headings
		if (trimmed.startsWith("## ")) {
			return (
				<h2
					key={index}
					className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mt-10 mb-4 tracking-tight leading-snug"
				>
					{trimmed.slice(3)}
				</h2>
			);
		}
		if (trimmed.startsWith("### ")) {
			return (
				<h3
					key={index}
					className="font-[var(--font-display)] text-xl sm:text-2xl font-bold text-[var(--foreground)] mt-8 mb-3 tracking-tight"
				>
					{trimmed.slice(4)}
				</h3>
			);
		}

		// Horizontal Rule
		if (trimmed === "---") {
			return <hr key={index} className="my-10 border-[var(--line)]" />;
		}

		// List Items
		if (trimmed.startsWith("- ")) {
			return (
				<li
					key={index}
					className="ml-6 list-disc text-[var(--ink-soft)] leading-relaxed mb-2 text-[15px] sm:text-[17px]"
				>
					{parseInlineMarkdown(trimmed.slice(2))}
				</li>
			);
		}

		// Numbered list items
		if (/^\d+\.\s/.test(trimmed) || trimmed.startsWith("Langkah ") || trimmed.startsWith("Step ")) {
			return (
				<div key={index} className="flex gap-3 mb-4 mt-6">
					<div className="flex-1">
						<p className="text-[var(--foreground)] leading-relaxed font-semibold text-[16px] sm:text-[18px]">
							{parseInlineMarkdown(trimmed)}
						</p>
					</div>
				</div>
			);
		}

		// Blockquotes / Testimonials
		if (trimmed.startsWith('*"') && trimmed.endsWith('"*')) {
			return (
				<blockquote
					key={index}
					className="border-l-4 border-[var(--brand)] pl-5 italic my-8 text-[var(--foreground)] font-medium bg-[var(--surface-soft)] p-5 rounded-r-2xl leading-relaxed text-[15px] sm:text-[17px]"
				>
					{trimmed.slice(2, -2)}
				</blockquote>
			);
		}

		// Default Paragraph
		return (
			<p
				key={index}
				className="text-[var(--ink-soft)] leading-relaxed text-[16px] sm:text-[18px] mb-5"
			>
				{parseInlineMarkdown(trimmed)}
			</p>
		);
	});
}

// Inline markdown parser (bold and italic)
function parseInlineMarkdown(text: string) {
	const parts = text.split(/\*\*(.*?)\*\*/g);
	return parts.map((part, i) => {
		if (i % 2 === 1) {
			return (
				<strong key={i} className="font-bold text-[var(--foreground)]">
					{part}
				</strong>
			);
		}
		const italicParts = part.split(/\*(.*?)\*/g);
		return italicParts.map((subPart, j) => {
			if (j % 2 === 1) {
				return (
					<em key={j} className="italic text-[var(--foreground)]">
						{subPart}
					</em>
				);
			}
			return subPart;
		});
	});
}
