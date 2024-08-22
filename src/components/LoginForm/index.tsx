import React from "react";
import { GitCommit } from "lucide-react";
import { doLogOut, doSocialLogin } from "@/app/actions";
import { auth } from "@/auth";
import BottomGradient from "../ButtonGradient";
import { ReviewModal } from "../Review/ReviewModal";
import { useQuery } from "@tanstack/react-query";

export const LoginForm = async () => {
	const session = await auth();

	return (
		<section className='flex justify-around items-center flex-wrap my-7 p-5 max-w-xl w-full mx-auto rounded-md shadow-input bg-white dark:bg-black'>
			<div>
				<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
					{session?.user?.name
						? `Welcome ${session?.user?.name}`
						: "Welcome to my portfolio."}
				</h2>
				<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
					{session?.user ? "" : "Login to leave a comment."}
				</p>
			</div>
			<div>
				{session?.user ? (
					<form action={doLogOut} className='my-8'>
						<div className='flex flex-col space-y-4'>
							<button
								className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
								type='submit'
							>
								<GitCommit className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
								<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
									Sign Out
								</span>
								<BottomGradient />
							</button>
						</div>
					</form>
				) : (
					<form action={doSocialLogin} className='my-8'>
						<div className='flex flex-col space-y-4'>
							<button
								className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
								type='submit'
								name='action'
								value='google'
							>
								<GitCommit className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
								<span className='text-neutral-700 dark:text-neutral-300 text-sm'>
									Google Sign In
								</span>
								<BottomGradient />
							</button>
						</div>
					</form>
				)}
				{session?.user && <ReviewModal session={session} />}
			</div>
		</section>
	);
};

export default LoginForm;
