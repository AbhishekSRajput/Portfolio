import React from "react";
import { GitCommit } from "lucide-react";
import { doLogOut, doSocialLogin } from "@/app/actions";
import { auth } from "@/auth";

export const LoginForm = async () => {
	const session = await auth();
	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
				Welcome to My Portfolio
			</h2>
			<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
				{session?.user ? "" : "Login to leave a comment."}
			</p>

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
		</div>
	);
};

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent' />
		</>
	);
};

export default LoginForm;
