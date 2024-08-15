import { Github, Linkedin, SendHorizontal } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { TextGenerateEffect } from "../TextGenerateEffect";

const Hero = () => {
	return (
		<section className='container z-9999 py-32' id='home'>
			<div className='max-w-[89vw] mx-auto md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
				<p className='uppercase tracking-widest text-xs text-center max-w-80'>
					Crafting Interactive Web Experiences with ReactJS
				</p>
				<TextGenerateEffect
					words='Turning Ideas into Flawless Digital Experiences'
					className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
				/>
				<p className='text-center md:tracking-wider mt-2 mb-4 text-sm md:text-md lg:text-lg'>
					Hi! I&apos;m Abhishek, Software Developer. based in India.
				</p>
				<div className='mt-12 call-to-action flex justify-center items-center flex-col space-y-4 mb-8 sm:flex-row sm:space-x-4 sm:space-y-0'>
					<Button size='lg' variant='default'>
						<a
							href='Resume_Abhishek_Singh.pdf'
							className='py-2 px-2 text-lg '
							target='_blank'
							rel='noopener noreferrer'
						>
							View Resume
						</a>
					</Button>
					<Button size='lg' variant='outline'>
						<a
							href='mailto:abhisingh3@hotmail.com'
							className='py-2 px-2 text-lg flex items-center space-x-2'
						>
							<span>Contact Me</span> <SendHorizontal />
						</a>
					</Button>
				</div>
				<div className='social-links flex justify-center space-x-4'>
					<a
						href='https://github.com/AbhishekSRajput'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button variant='outline'>
							<Github />
						</Button>
					</a>
					<a
						href='https://www.linkedin.com/in/abhisheksrajput3/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button variant='outline'>
							<Linkedin />
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
