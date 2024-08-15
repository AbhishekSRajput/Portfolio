import React from "react";
import { TextGenerateEffect } from "../TextGenerateEffect";

const Footer = () => {
	return (
		<TextGenerateEffect
			words='CopyRight &copy; 2024 Abhishek Singh'
			className='text-center text-lg sm:text-xl md:text-xl lg:text-1xl xl:text-2xl'
		/>
	);
};

export default Footer;
