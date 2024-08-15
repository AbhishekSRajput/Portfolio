"use client";

import { ModeToggle } from "../DarkThemeToggle";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Menu, Moon } from "lucide-react";

const DropDownNavMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<Menu className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Menu className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem>
					<a href='#home'>Home</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href='#about'>About</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href='#experience'>Experience</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href='#projects'>Projects</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href='#blogs'>Blogs</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const Navbar = () => {
	return (
		<>
			<header className='p-4 fixed z-30 w-full top-0 bg-background text-foreground shadow-sm'>
				<nav className='container mx-auto flex justify-between items-center'>
					<a href='#home' className=' space-x-1'>
						<span className='text-xl font-bold'>Portfolio</span>
						<span className='text-xs font-light'>V-0.7</span>
					</a>

					<div className='space-x-4 flex items-center'>
						<div className='nav-links h-full hidden md:flex space-x-4'>
							<a
								href='#home'
								className='hover:text-primary active:text-primary'
							>
								Home
							</a>
							<a
								href='#about'
								className='hover:text-primary active:text-primary'
							>
								About
							</a>
							<a
								href='#experience'
								className='hover:text-primary active:text-primary'
							>
								Experience
							</a>
							<a
								href='#projects'
								className='hover:text-primary active:text-primary'
							>
								projects
							</a>
							<a
								href='#blogs'
								className='hover:text-primary active:text-primary'
							>
								blogs
							</a>
						</div>
						<div className='nav-dropdown md:hidden'>
							<DropDownNavMenu />
						</div>
						<ModeToggle />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
