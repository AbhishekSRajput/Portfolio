import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Grid from "@/components/Grid";

const AppPage = () => {
	// TODO: update blogs component
	{
		/* <Blogs /> */
	}
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
