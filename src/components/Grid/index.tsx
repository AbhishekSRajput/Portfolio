"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { TextGenerateEffect } from "../TextGenerateEffect";

const Grid = () => {
	return (
		<section id='about' className='container pt-12'>
			<TextGenerateEffect
				words='About Me'
				className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
			/>
			<BentoGrid className='w-full py-20'>
				{gridItems.map((item, i) => (
					<BentoGridItem
						id={item.id}
						key={i}
						title={item.title}
						description={item.description}
						// remove icon prop
						// remove original classname condition
						className={item.className}
						img={item.img}
						imgClassName={item.imgClassName}
						titleClassName={item.titleClassName}
						spareImg={item.spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	);
};

export default Grid;
