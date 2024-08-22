"use client";
import React, { useEffect, useState } from "react";
import { MessageCircleCode, PlusCircle, SendHorizontal } from "lucide-react";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from "@/components/AnimatedModal";
import BottomGradient from "../ButtonGradient";
import { useQueryClient } from "@tanstack/react-query";

interface Review {
	id: number;
	content: string;
	email: string;
}

export function ReviewModal({ session }: { session: any }) {
	const queryClient = useQueryClient();
	const reviews = queryClient.getQueryData(["reviews"]);
	console.log("reviews--", reviews);
	const [review, setReview] = useState<string>("");
	console.log("session--------==================", session);
	const filterReviews = (reviews: Review) => {};

	return (
		<section>
			<Modal>
				<ModalTrigger>
					<button
						className='relative space-x-2 group/btn flex items-center justify-start px-4 w-md rounded-md h-10 font-medium shadow-input bg-primary dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
						type='button'
					>
						<span className='text-white text-sm'>Add Review</span>
						<PlusCircle className='text-white' />
					</button>
				</ModalTrigger>
				<ModalBody>
					<ModalContent>
						<h4 className='flex space-x-2 text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
							<span className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200'>
								Review
							</span>
							<span>now!</span> <MessageCircleCode />
						</h4>
						<div className='flex justify-center items-center'>
							<textarea
								className='border border-gray-300 rounded-lg p-1 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-gray-500'
								placeholder='Enter your review here...'
								name='review'
								id='reviewId'
								maxLength={270}
								rows={7}
							/>
						</div>
					</ModalContent>
					<ModalFooter className='gap-4'>
						<ModalTrigger>
							<button
								className=' relative group/btn flex items-center justify-start px-4 w-md text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
								type='button'
							>
								<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
									Cancel
								</span>
								<BottomGradient />
							</button>
						</ModalTrigger>
						<button
							className=' relative space-x-2 group/btn flex items-center justify-start px-4 w-md rounded-md h-10 font-medium shadow-input bg-primary dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
							type='submit'
						>
							<span className='text-white text-sm'>Submit</span>
							<SendHorizontal className='text-white' />
						</button>
					</ModalFooter>
				</ModalBody>
			</Modal>
		</section>
	);
}
