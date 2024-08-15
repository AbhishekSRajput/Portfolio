import Hero from "@/components/Hero";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blogs from "@/components/Blogs";

const AppPage = () => {
	return (
		<>
			<Hero />
			<InfiniteScroll />
			<Grid />
			<Experience />
			<Projects />
			<Blogs />
		</>
	);
};

export default AppPage;
