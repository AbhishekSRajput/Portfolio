import React from "react";
import Image from "next/image";
import vaccinationCenter from "../../../public/projects/vaccinationCenter.png";
import html5 from "../../../public/techIcons/html5.svg";
import css3 from "../../../public/techIcons/css3.svg";
import javascript from "../../../public/techIcons/js.svg";
import nextjs from "../../../public/techIcons/nextjs2.svg";
import tailwind from "../../../public/techIcons/tailwindcss.svg";
import github from "../../../public/techIcons/github.svg";
import nestjs from "../../../public/techIcons/nestjs.svg";
import mysql from "../../../public/techIcons/mysql.svg";
import thakur from "../../../public/projects/thakur.png";
import { Button } from "../ui/button";

const AgencyLandingPage = () => {
	return (
		<section id='projects' className='mt-7 min-h-screen border pt-16'>
			<h2 className='p-4 text-4xl lg:text-5xl text-center'>Projects</h2>
			<div className='container p-7 border mx-auto flex flex-col lg:flex-row justify-center items-center'>
				<div className='lg:w-1/2 p-7 lg:mb-0'>
					<h1 className='text-xl md:text-2xl lg:text-3xl mb-4'>
						Vaccination Center Finder.
					</h1>
					<p className='text-gray-300 text-base md:text-sm lg:text-sm mb-6'>
						Vaccination Center Finder is a web application that
						helps users to find the nearest vaccination center.
					</p>
					<div className='flex space-x-4 mb-6'>
						<span className='p-2'>
							<Image
								src={tailwind}
								alt='redux'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={html5}
								alt='html5'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={css3}
								alt='css3'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={javascript}
								alt='javascript'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={nextjs}
								alt='nextjs'
								width={34}
								height={34}
							/>
						</span>
					</div>
					<Button className='space-x-2'>
						<Image
							src={github}
							height={14}
							width={14}
							alt='github'
						/>
						<span>View Live Project</span>
					</Button>
				</div>
				<div className='lg:w-1/2 p-7 h-full'>
					<Image src={vaccinationCenter} alt='vaccine' />
				</div>
			</div>
			<div className='container p-7 border mx-auto flex flex-col lg:flex-row justify-center items-center'>
				<div className='lg:w-1/2 p-7 lg:mb-0'>
					<h1 className='text-xl md:text-2xl lg:text-3xl mb-4'>
						Thakur
					</h1>
					<p className='text-gray-300 text-base md:text-sm lg:text-sm mb-6'>
						Project On Going Where I am working on the project
						Thakur releasing soon.
					</p>
					<div className='flex space-x-4 mb-6'>
						<span className='p-2'>
							<Image
								src={tailwind}
								alt='redux'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={html5}
								alt='html5'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={css3}
								alt='css3'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={javascript}
								alt='javascript'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={nextjs}
								alt='nextjs'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={nestjs}
								alt='nestjs'
								width={34}
								height={34}
							/>
						</span>
						<span className='p-2'>
							<Image
								src={mysql}
								alt='mysql'
								width={34}
								height={34}
							/>
						</span>
					</div>
					<Button disabled={true} className='space-x-2'>
						<Image
							src={github}
							height={14}
							width={14}
							alt='github'
						/>
						<span>View Live Project</span>
					</Button>
				</div>
				<div className='lg:w-1/2 p-7 h-full'>
					<Image src={thakur} alt='vaccine' />
				</div>
			</div>
		</section>
	);
};

export default AgencyLandingPage;
