import { Github, Linkedin, SendHorizontal } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { TextGenerateEffect } from "../TextGenerateEffect";

const Hero = () => {
	return (
		<section className='container mx-auto py-32 max-w-3xl' id='home'>
			<div className=' p-8 rounded-lg shadow-lg'>
				<div>
					<p className='uppercase tracking-widest text-xs text-center dark:text-blue-100'>
						Crafting Interactive Web Experiences with ReactJS
					</p>
					<TextGenerateEffect
						words='Turning Ideas into Flawless Digital Experiences'
						className='text-center'
					/>
					<p className='text-center md:tracking-wider mt-2 mb-4 text-sm md:text-lg lg:text-2xl'>
						Hi! I&apos;m Abhishek, Software Developer. based in
						India.
					</p>
					<div className='mt-12 call-to-action flex justify-center items-center flex-col space-y-4 mb-8 sm:flex-row sm:space-x-4 sm:space-y-0'>
						<Button size='lg' variant='default'>
							<a
								href='/path/to/your/resume.pdf'
								className='py-2 px-2 text-lg '
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
			</div>
		</section>
	);
};

export default Hero;
