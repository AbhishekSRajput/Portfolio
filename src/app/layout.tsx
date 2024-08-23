import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import { ModalProvider } from "@/components/AnimatedModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Portfolio of Abhishek Singh",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReactQueryProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
					>
						<Layout>{children}</Layout>
					</ThemeProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
