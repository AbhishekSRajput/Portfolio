"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { blogs } from "@/data";
import { TextGenerateEffect } from "../TextGenerateEffect";

export default function Blogs() {
	return (
		<section id='blogs' className='py-12 px-1 '>
			<TextGenerateEffect
				words='Blogs'
				className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
			/>
			<div className='flex justify-center flex-wrap'>
				{blogs.map((blog, i) => (
					<a
						href={blog.link}
						target='_blank'
						rel='noopener noreferrer'
						key={i}
						className='max-w-xs p-2 w-full group/card'
					>
						<div
							className={cn(
								" cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
								"bg-[url(/blogs/blog-bg.jpg)] bg-cover"
							)}
						>
							<div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
							<div className='flex flex-row items-center space-x-4 z-10'>
								<img
									alt={blog.img}
									src={blog.img}
									className='h-10 w-10 rounded-full border-2 object-cover'
								/>
								<div className='flex flex-col'>
									<p className='font-normal text-base text-gray-50 relative z-10'>
										{blog.author}
									</p>
									<p className='text-sm text-gray-400'>
										2 min read
									</p>
								</div>
							</div>
							<div className='text content'>
								<h1 className='font-bold text-xl md:text-2xl text-gray-50 relative z-10'>
									{blog.title}
								</h1>
								<p className='font-normal text-sm text-gray-50 relative z-10 my-4'>
									{blog.des}
								</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
