import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import React from "react";

const AppPage = () => {
	return (
		<>
			<Hero />
			<div className='pt-16' id='about' style={{ height: "1000px" }}>
				about
			</div>
			<div className='pt-16' id='contact' style={{ height: "1000px" }}>
				contact
			</div>
		</>
	);
};

export default AppPage;
