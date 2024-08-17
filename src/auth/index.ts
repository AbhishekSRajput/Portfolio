import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GoogleProvider],
	callbacks: {
		async signIn({ user, account, profile }) {
			try {
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
			} catch (error) {
				console.error("Error during sign-in:", error);
				return false; // Stop the sign-in process
			}
		},
	},
	// Optionally, you can add more callbacks, events, etc., here
});