import { Github, Linkedin, SendHorizontal } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
	return (
		<section className='container mx-auto py-20 max-w-3xl' id='home'>
			<div className=' p-8 rounded-lg shadow-lg'>
				<div>
					<h1 className='text-4xl font-bold mb-4'>
						<small className='block text-lg font-light'>
							Hi I&apos;m
						</small>
						Abhishek Singh
					</h1>
					<p className='mb-8'>
						<span>
							Versatile Software Engineer specializing in frontend
							and backend development with Node.js.
						</span>
						<span>
							I create efficient web applications using HTML, CSS,
							JavaScript, and modern frameworks. Passionate about
							building scalable solutions and continuously
							learning new technologies.
						</span>
					</p>
					<div className='call-to-action flex flex-col space-y-4 mb-8 sm:flex-row sm:space-x-4 sm:space-y-0'>
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
					<div className='social-links flex space-x-4'>
						<a
							href='https://github.com/yourusername'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button variant='outline'>
								<Github />
							</Button>
						</a>
						<a
							href='https://www.linkedin.com/in/yourprofile'
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
