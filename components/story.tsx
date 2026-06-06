import Image from "next/image";

export default function StorySection() {
	return (
		<section className="relative overflow-hidden  bg-[#195A00] py-20">
			{/* Bubble */}
			<Image
				src="/assets/lettuce.png"
				alt=""
				width={1400}
				height={1400}
				className="
					pointer-events-none
					absolute

					left-1/2
					top-1/2

					w-[1420px]

					-translate-x-1/2
					-translate-y-1/2

					rotate-[-12deg]

					opacity-[0.07]

					select-none
				"
			/>

			<div
				className="
            absolute
            -left-16
            -top-16
      
            h-40
            w-40
      
            rounded-full
      
            bg-white/[0.04]
          "
			/>

			<div
				className="
            absolute
            -right-20
            -bottom-20
      
            h-56
            w-56
      
            rounded-full
      
            bg-white/[0.04]
          "
			/>

			<div className="mx-auto max-w-4xl px-8 text-center">
				<span
					className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-green-200
            "
				>
					A Small Action. A Big Difference.
				</span>

				<h2
					className="
              mt-5
      
              text-4xl
              font-bold
      
              leading-tight
      
              text-white
      
              lg:text-5xl
            "
				>
					Every meal has a story.
				</h2>

				<p
					className="
              mx-auto
              mt-4
      
              max-w-2xl
      
              text-lg
              leading-8
      
              text-green-100/80
            "
				>
					Don't let it end in a trash bin. Good food can still feed
					someone, help a family, and reduce waste.
				</p>

				<button
					className="
              mt-8
      
              rounded-full
      
              bg-white
      
              px-7
              py-3
      
              font-medium
      
              text-[#195A00]
      
              transition-all
              duration-300
      
              hover:-translate-y-1
            "
				>
					Start Sharing
				</button>
			</div>
		</section>
	);
}
