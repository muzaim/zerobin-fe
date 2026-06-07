"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguageStore } from "@/lib/store";

const reviews = [
	{
		id: 1,
		en: {
			title: "The Backyard Mango Harvest",
			text: "I couldn't eat twenty kilos of mangoes myself, and my neighbors were thrilled. One of them even brought back a jar of homemade mango jam. Truly closes the loop!",
			role: "South Jakarta • Backyard Crop Share",
		},
		id_locale: {
			title: "Panen Mangga Halaman Belakang",
			text: "Saya tidak mungkin menghabiskan 20 kilo mangga sendirian, dan tetangga saya sangat senang menerimanya. Salah satu dari mereka bahkan membawakan saya toples selai mangga buatan sendiri. Benar-benar melengkapi lingkaran kebaikan!",
			role: "Jakarta Selatan • Berbagi Hasil Kebun",
		},
		name: "Reyhan",
		stars: 5,
		image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&h=600&q=80",
	},
	{
		id: 2,
		en: {
			title: "The Sunday Bakery Rescue",
			text: "Throwing away fresh bread feels like a crime. Now, a couple of university students who live nearby drop by to pick up our leftovers. They get free breakfast, we get a clean display case.",
			role: "Toko Roti Sore • Bakery Assistant",
		},
		id_locale: {
			title: "Penyelamatan Roti Hari Minggu",
			text: "Membuang roti segar rasanya seperti berbuat dosa. Sekarang, beberapa mahasiswa yang tinggal di dekat sini mampir untuk mengambil sisa roti kami. Mereka mendapat sarapan gratis, dan etalase kami bersih.",
			role: "Toko Roti Sore • Asisten Toko Roti",
		},
		name: "Keisha",
		stars: 5,
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=80",
	},
	{
		id: 3,
		en: {
			title: "The Birthday Catering Save",
			text: "We had so much catering food left after my daughter's birthday dinner. It felt terrible to throw it away, but within 20 minutes of listing, a family from the next street came and picked it up.",
			role: "Kemang • Household Donor",
		},
		id_locale: {
			title: "Sisa Katering Ulang Tahun",
			text: "Kami memiliki banyak sisa makanan katering setelah makan malam ulang tahun putri saya. Rasanya sayang sekali untuk dibuang, tetapi dalam waktu 20 menit setelah diunggah, sebuah keluarga dari jalan sebelah datang mengambilnya.",
			role: "Kemang • Donor Rumah Tangga",
		},
		name: "Nadine",
		stars: 5,
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80",
	},
	{
		id: 4,
		en: {
			title: "The Chili Harvest",
			text: "My chili plants went wild this season! I posted a bag of fresh red chilies on Cellar and a neighbor used them to make sambal for her family dinner. Simple and human.",
			role: "Cilandak • Urban Gardener",
		},
		id_locale: {
			title: "Panen Cabai Melimpah",
			text: "Tanaman cabai saya sedang berbuah lebat musim ini! Saya mengunggah sekantong cabai merah segar di Cellar dan seorang tetangga menggunakannya untuk membuat sambal makan malam keluarganya. Sederhana dan manusiawi.",
			role: "Cilandak • Pekebun Kota",
		},
		name: "Bintang",
		stars: 5,
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=600&q=80",
	},
	{
		id: 5,
		en: {
			title: "The End-of-Shift Pastries",
			text: "We often have surplus milk or day-old pastries at the end of the shift. Instead of tossing them, we share them here. The gratitude from our neighbors is the best reward.",
			role: "Tebet • Café Barista",
		},
		id_locale: {
			title: "Kue Sisa Shift Kafe",
			text: "Kami sering memiliki sisa susu atau kue-kue di akhir jam kerja kafe. Daripada dibuang begitu saja, kami membagikannya di sini. Rasa terima kasih dari para tetangga adalah hadiah terbaik.",
			role: "Tebet • Barista Kafe",
		},
		name: "Aurelia",
		stars: 5,
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&h=600&q=80",
	},
];

export default function StoriesSlider() {
	const { language } = useLanguageStore();
	const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);


	return (
		<div className="w-full relative">
			{/* Swiper Container */}
			<Swiper
				onSwiper={setSwiperRef}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				modules={[Autoplay]}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				loop={true}
				className="w-full overflow-hidden"
				spaceBetween={30}
			>
				{reviews.map((review) => {
					const localReview = review[language === "en" ? "en" : "id_locale"];
					return (
						<SwiperSlide key={review.id} className="w-full select-none">
							<div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 items-center py-4">
								{/* Left: Polaroid Image */}
								<div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
									{/* Organic BG Blob */}
									<div
										className="absolute -inset-4 bg-[var(--brand-soft)]/50 -z-10"
										style={{ borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%" }}
									/>
									{/* Polaroid Frame */}
									<div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-3 shadow-[0_8px_20px_rgba(0,0,0,0.03)] rotate-[-1.5deg]">
										<div className="relative w-full h-full overflow-hidden rounded-xl">
											<Image
												src={review.image}
												alt={localReview.title}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, 300px"
											/>
										</div>
									</div>
								</div>

								{/* Right: Review Content */}
								<div className="space-y-4 text-left md:pl-2">
									{/* Star Rating */}
									<div className="flex items-center gap-1">
										{[...Array(review.stars)].map((_, i) => (
											<Star
												key={i}
												size={15}
												className="text-[var(--gold)] fill-[var(--gold)]"
											/>
										))}
									</div>

									{/* Story Title */}
									<h4 className="font-[var(--font-display)] text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
										{localReview.title}
									</h4>

									{/* Quote Content */}
									<div className="relative min-h-[72px]">
										<Quote
											size={28}
											className="absolute top-0 left-0 text-[var(--brand)]/8 -z-10 transform -translate-x-1"
										/>
										<p className="text-sm sm:text-[1.05rem] text-[var(--muted)] leading-relaxed italic relative z-10 pl-7 pr-2">
											&ldquo;{localReview.text}&rdquo;
										</p>
									</div>

									{/* Author Info */}
									<div className="pl-7">
										<p className="text-xs sm:text-sm font-bold text-[var(--foreground)]">
											{review.name}
										</p>
										<p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-mono text-[var(--muted)] mt-0.5">
											{localReview.role}
										</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

			{/* Custom Controls Bar */}
			<div className="mt-8 pt-6 border-t border-[var(--line)] flex items-center justify-between">
				{/* Pagination Dots */}
				<div className="flex gap-2">
					{reviews.map((_, index) => (
						<button
							key={index}
							onClick={() => swiperRef?.slideToLoop(index)}
							className={`
								h-1.5
								rounded-full
								transition-all
								duration-300
								ease-out
								cursor-pointer
								${index === activeIndex
									? "w-8 bg-[var(--brand)]"
									: "w-1.5 bg-[var(--line)] hover:bg-[var(--muted)]"
								}
							`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>

				{/* Navigation Buttons */}
				<div className="flex gap-2">
					<button
						onClick={() => swiperRef?.slidePrev()}
						className="
							w-9
							h-9
							rounded-full
							border
							border-[var(--line)]
							bg-[var(--surface)]
							text-[var(--foreground)]
							hover:bg-[var(--brand-soft)]
							hover:text-[var(--brand-dark)]
							hover:border-[var(--brand)]
							active:scale-95
							transition-all
							duration-200
							flex
							items-center
							justify-center
							cursor-pointer
						"
						aria-label="Previous slide"
					>
						<ChevronLeft size={16} />
					</button>
					<button
						onClick={() => swiperRef?.slideNext()}
						className="
							w-9
							h-9
							rounded-full
							border
							border-[var(--line)]
							bg-[var(--surface)]
							text-[var(--foreground)]
							hover:bg-[var(--brand-soft)]
							hover:text-[var(--brand-dark)]
							hover:border-[var(--brand)]
							active:scale-95
							transition-all
							duration-200
							flex
							items-center
							justify-center
							cursor-pointer
						"
						aria-label="Next slide"
					>
						<ChevronRight size={16} />
					</button>
				</div>
			</div>
		</div>
	);
}
