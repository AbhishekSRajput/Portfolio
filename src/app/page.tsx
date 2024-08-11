import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";

const AppPage = () => {
	return (
		<>
			<Hero />
			<InfiniteScroll />
			<Skills />
			<Projects />
			<Blogs />
		</>
	);
};

export default AppPage;
