// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"

// export const { handlers, signIn, signOut, auth } = NextAuth({
// 	providers: [Google],
// })

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GoogleProvider],
	callbacks: {
		async signIn({ user, account, profile }) {
			// Check if the user already exists in the database
			const existingUser = await prisma.user.findUnique({
				where: { email: user.email as string },
			});

			// If the user doesn't exist, create a new user
			if (!existingUser) {
				await prisma.user.create({
					data: {
						email: user.email as string,
						name: user.name as string,
						image: user.image as string,
					},
				});
			}

			return true; // Continue the sign-in process
		},
	},
	// Optionally, you can add more callbacks, events, etc., here
});
