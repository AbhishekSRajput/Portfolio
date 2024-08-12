"use client";
import React from "react";
import { PinContainer } from "@/components/3DPin";

export default function Blogs() {
	return (
		<section id='blogs' className=''>
			<h2 className='p-7 text-4xl lg:text-5xl text-center'>Blogs</h2>
			<div className='flex justify-center flex-wrap mb-20'>
				<div className='h-full py-9 flex items-center justify-center '>
					<PinContainer
						title='/dev.to/abhisheksrajput'
						href='https://dev.to/abhisheksrajput/setup-nextjs-with-typescript-eslint-prettier-and-husky-49lb'
					>
						<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
							<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
								Setup NextJS with typescript, EsLint, prettier
								and husky
							</h3>
							<div className='text-base !m-0 !p-0 font-normal'>
								<span className='text-slate-500 '>
									Customizable EsLint and NextJS.
								</span>
							</div>
							<div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
						</div>
					</PinContainer>
				</div>
				<div className='h-full py-9 flex items-center justify-center '>
					<PinContainer
						title='/dev.to/abhisheksrajput'
						href='https://dev.to/abhisheksrajput/can-you-solve-these-javascript-mind-twister-puzzles-by-chatgpt-58cf'
					>
						<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
							<h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
								Can you solve these Javascript Mind Twister
								Puzzles by ChatGPT?
							</h3>
							<div className='text-base !m-0 !p-0 font-normal'>
								<span className='text-slate-500 '>
									Solve these puzzles and improve your problem
									solving skills.
								</span>
							</div>
							<div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
						</div>
					</PinContainer>
				</div>
			</div>
		</section>
	);
}
