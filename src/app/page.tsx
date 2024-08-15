import Hero from "@/components/Hero";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blogs2 from "@/components/Blogs2";

const AppPage = () => {
	return (
		<>
			<Hero />
			<InfiniteScroll />
			<Grid />
			<Experience />
			<Projects />
			<Blogs2 />
		</>
	);
};

export default AppPage;
