import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import Blogs from "@/components/Blogs";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";

const AppPage = () => {
	return (
		<>
			<Hero />
			<InfiniteScroll />
			<Grid />
			<Projects />
		</>
	);
};

export default AppPage;
