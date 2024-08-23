"use client";
import React, { useState } from "react";
import { MessageCircleCode, PlusCircle, SendHorizontal } from "lucide-react";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
	useModal,
} from "@/components/AnimatedModal";
import BottomGradient from "../ButtonGradient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "../Input";
import { addData } from "@/utils/api";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "../LoadingSpinner";

interface ReviewPayload {
	title: string;
	content: string;
	userEmail: string;
}

export function ReviewModal({ session }: { session: any }) {
	const queryClient = useQueryClient();
	const { setOpen } = useModal();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const [review, setReview] = useState("");
	const [reviewerRole, setReviewerRole] = useState("");

	const mutation = useMutation({
		mutationFn: async (payload: ReviewPayload) => {
			setLoading(true);
			const response = await addData("/api/reviews", payload);
			return response;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reviews"] });
			setReview("");
			setReviewerRole("");
			setOpen(false);
			setLoading(false);
			router.push("/");
		},
		onError: (error) => {
			setLoading(false);
		},
		onSettled: () => {
			setLoading(false);
		},
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const payload: ReviewPayload = {
			content: review,
			title: reviewerRole,
			userEmail: session.user.email,
		};

		mutation.mutate(payload);
	};
	console.log("loading", loading);

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
				<form onSubmit={handleSubmit}>
					<ModalBody>
						<ModalContent>
							<h4 className='flex space-x-2 text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
								<span className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200'>
									Review
								</span>
								<span>now!</span> <MessageCircleCode />
							</h4>
							<Input
								required={true}
								placeholder='Ex: Software Engineer'
								onChange={(e) =>
									setReviewerRole(e.target.value)
								}
								value={reviewerRole}
							/>
							<div className='flex justify-center items-center mt-2'>
								<textarea
									className='border border-gray-300 rounded-lg p-1 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-gray-500'
									placeholder='Enter your review here...'
									name='review'
									id='reviewId'
									maxLength={270}
									rows={7}
									required={true}
									onChange={(e) => setReview(e.target.value)}
									value={review}
								/>
							</div>
						</ModalContent>
						<ModalFooter className='gap-4'>
							<ModalTrigger>
								<button
									id='closeModal'
									className='relative group/btn flex items-center justify-start px-4 w-md text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
								>
									<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
										Cancel
									</span>
									<BottomGradient />
								</button>
							</ModalTrigger>
							<button
								className='relative space-x-2 group/btn flex items-center justify-start px-4 w-md rounded-md h-10 font-medium shadow-input bg-primary dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
								type='submit'
							>
								<span>
									{loading ? <LoadingSpinner /> : null}
								</span>
								<span className='text-white text-sm'>
									Submit
								</span>
								<SendHorizontal className='text-white' />
							</button>
						</ModalFooter>
					</ModalBody>
				</form>
			</Modal>
		</section>
	);
}