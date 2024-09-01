"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/InfiniteMovingCard";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/utils/api";

const InfiniteMovingCardsDemo = () => {
	const getReviews = async () => {
		const response = await fetchData("/api/reviews");
		return response;
	};

	const { data, isLoading, isError } = useQuery({
		queryFn: async () => await getReviews(),
		queryKey: ["reviews"],
	});

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>Error...</div>;

	return (
		<div className='rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
			<InfiniteMovingCards
				items={data?.data ?? []}
				direction='right'
				speed='fast'
			/>
		</div>
	);
};

export default InfiniteMovingCardsDemo;
