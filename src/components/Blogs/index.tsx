"use client";

// import { FaLocationArrow } from "react-icons/fa6";
import { Send } from "lucide-react";
import { blogs } from "@/data";
import { PinContainer } from "@/components/3DPin";
import { TextGenerateEffect } from "../TextGenerateEffect";
import { cn } from "@/lib/utils";

const Blogs = () => {
	return (
		<div id='blogs' className='py-16'>
			<TextGenerateEffect
				words='My Blogs'
				className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
			/>
			<div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
				{blogs.map((item) => (
					<div
						className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
						key={item.id}
					>
						<PinContainer title={item.title}>
							<div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
								
							</div>

							<p
								className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 dark:text-white text-black'
								style={{
									margin: "1vh 0",
								}}
							>
								{item.des}
							</p>

							<div className='flex items-center justify-between mt-7 mb-3'>
								<div className='flex items-center'>
									{item.iconLists.map((icon, index) => (
										<div
											key={index}
											className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
											style={{
												transform: `translateX(-${
													5 * index + 2
												}px)`,
											}}
										>
											<img
												src={icon}
												alt='icon5'
												className='p-2'
											/>
										</div>
									))}
								</div>

								<a
									className={cn(
										item.link
											? ""
											: "pointer-events-none opacity-20",
										"flex justify-center items-center"
									)}
									href=''
								>
									<div className='flex justify-center items-center'>
										<p className='flex lg:text-xl md:text-xs text-sm text-purple'>
											Check Live Site
										</p>
										<Send className='ms-3' />
									</div>
								</a>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blogs;
