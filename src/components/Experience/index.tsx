import React from "react";

import { workExperience } from "@/data";
import { Button } from "@/components/MovingBorders";
import { TextGenerateEffect } from "../TextGenerateEffect";

const Experience = () => {
	return (
		<div className='pt-20 px-9 w-full'>
			<TextGenerateEffect
				words='Experience'
				className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
			/>
			<div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
				{workExperience.map((card) => (
					<Button
						key={card.id}
						//   random duration will be fun , I think , may be not
						duration={Math.floor(Math.random() * 10000) + 10000}
						borderRadius='1.75rem'
						// remove bg-white dark:bg-slate-900
						className='flex-1 border-neutral-200 dark:border-slate-800'
					>
						<div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
							<img
								src={card.thumbnail}
								alt={card.thumbnail}
								className='lg:w-32 md:w-20 w-16'
							/>
							<div className='lg:ms-5'>
								<h2 className='text-start text-black dark:text-white text-xl md:text-2xl font-bold'>
									{card.company}
								</h2>
								<h3 className='text-start text-gray-500 dark:text-gray-300 mt-3 font-semibold'>
									{card.title}
								</h3>
								<p className='text-start text-gray-500 dark:text-gray-300 mt-3 font-semibold'>
									From: {card.from} to {card.to}
								</p>
								<p className='text-start text-gray-500 dark:text-gray-300  mt-3 font-semibold'>
									{card.desc}
								</p>
							</div>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
};

export default Experience;
