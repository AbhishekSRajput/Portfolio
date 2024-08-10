import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import Skills from "@/components/Skills";
import Image from "next/image";
import js from "../../public/techIcons/js.svg";

const AppPage = () => {
	return (
		<>
			<Hero />
			<InfiniteScroll />
			<Skills />
			<div className='pt-16' id='contact' style={{ height: "1000px" }}>
				contact
			</div>
		</>
	);
};

export default AppPage;
