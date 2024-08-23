import React from "react";
import LoginForm from "../LoginForm";
import ReviewList from "./ReviewList";
import { ModalProvider } from "../AnimatedModal";

const Review = () => {
	return (
		<section>
			<ModalProvider>
				<LoginForm />
			</ModalProvider>
			<ReviewList />
		</section>
	);
};

export default Review;
