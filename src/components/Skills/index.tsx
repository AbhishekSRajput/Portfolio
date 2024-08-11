import Image from "next/image";
import AnimatedBackground from "../AnimatedBackground";

// Tech Icons front-end
import js from "../../../public/techIcons/js.svg";
import css from "../../../public/techIcons/css3.svg";
import nextjs from "../../../public/techIcons/nextjs2.svg";
import html from "../../../public/techIcons/html5.svg";
import tailwind from "../../../public/techIcons/tailwindcss.svg";
import redux from "../../../public/techIcons/redux.svg";

// Tech Icons back-end
import nodejs from "../../../public/techIcons/nodejs.svg";
import nestjs from "../../../public/techIcons/nestjs.svg";
import docker from "../../../public/techIcons/docker.svg";
import mongodb from "../../../public/techIcons/mongodb.svg";
import postgresql from "../../../public/techIcons/postgresql.svg";
import github from "../../../public/techIcons/github.svg";
import { FileBadge, Settings } from "lucide-react";

const Skills = () => {
	return (
		<section
			className='mt-44 border flex justify-center items-center '
			id='skills'
		>
			<div className='container'>
				<div className='flex justify-center flex-wrap'>
					<div className='p-7 border backdrop-blur-sm'>
						<h3 className='flex justify-center space-x-2 mb-7 text-3xl lg:text-4xl'>
							<Settings />
							<span>Skills</span>
						</h3>
						<ul className='text-base md:text-md lg:text-lg font-light max-w-lg mx-auto list-disc'>
							<li>
								Versatile Software Engineer specializing in
								frontend ReactJS and backend development with
								Node.js.
							</li>
							<li>
								I create efficient web applications using HTML,
								CSS, JavaScript, and modern frameworks.
							</li>
							<li>
								Passionate about building scalable solutions and
								continuously learning new technologies.
							</li>
						</ul>
					</div>
					<div className='p-7 border backdrop-blur-sm'>
						<h3 className='flex justify-center space-x-2 mb-7 text-3xl lg:text-4xl'>
							<FileBadge />
							<span>Achievements</span>
						</h3>
						<ul className='text-base md:text-md lg:text-lg font-light max-w-lg mx-auto list-disc'>
							<li>
								Refactored multiple files containing thousands
								of lines of code.
							</li>
							<li>
								Improved the performance of existing code by
								reducing complex large calculations.
							</li>
							<li>
								Implemented virtualization to enhance page
								performance.
							</li>
							<li>
								Enhanced front-end filters by handling filter
								actions on the back end.
							</li>
						</ul>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='flex flex-wrap'>
						<span className='p-2'>
							<Image
								src={js}
								alt='card'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={css}
								alt='css'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={html}
								alt='html'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={nextjs}
								alt='nextjs'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={tailwind}
								alt='tailwind'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={redux}
								alt='redux'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={nodejs}
								alt='nodejs'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={nestjs}
								alt='nestjs'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={docker}
								alt='docker'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={mongodb}
								alt='mongodb'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={postgresql}
								alt='postgresql'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
						<span className='p-2'>
							<Image
								src={github}
								alt='github'
								width={37}
								height={37}
								className='rounded-xl'
							/>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
