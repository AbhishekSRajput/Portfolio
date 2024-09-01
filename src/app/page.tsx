import Hero from "@/components/Hero";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Review from "@/components/Review";
import { Experience2 } from "@/components/Experience2";

const AppPage = () => {
	return (
		<>
			<Hero />
			<InfiniteScroll />
			<Grid />
			<Experience2 />
			<Projects />
			<Blogs />
			<Review />
		</>
	);
};

export default AppPage;
