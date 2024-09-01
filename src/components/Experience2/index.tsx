import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/Timeline";

export function Experience2() {
	const data = [
		{
			title: "Mar 2022-Present",
			content: (
				<div>
					<Image
						src='/experience/infilonLight.png'
						alt='infilon company'
						width={170}
						height={170}
					/>
					<p className='text-lg'>Software Engineer</p>
					<ul className='list-disc p-3 space-y-2 pl-5 text-gray-400 text-sm font-light dark:text-gray-300'>
						<li>
							<strong>
								Developed Responsive Web Applications:
							</strong>{" "}
							Built and maintained responsive applications using
							HTML, CSS, and JavaScript, React.js, ensuring
							compatibility across devices and browsers.
						</li>
						<li>
							<strong>TypeScript Integration:</strong> Improved
							code quality and maintainability by integrating
							TypeScript into JavaScript projects, reducing
							runtime errors.
						</li>
						<li>
							<strong>Cross-Browser Compatibility:</strong>{" "}
							Ensured consistent user experiences by addressing
							cross-browser compatibility issues with CSS and
							JavaScript.
						</li>
						<li>
							<strong>Performance Optimization:</strong> Enhanced
							web performance through browser developer tools,
							lazy loading, and code-splitting techniques.
						</li>
						<li>
							<strong>Node.js & Express.js Development:</strong>{" "}
							Designed and developed RESTful APIs using Node.js
							and Express.js, ensuring secure and scalable
							back-end services.
						</li>
						<li>
							<strong>Database Management:</strong> Optimized data
							storage and retrieval by managing databases with
							MongoDB and SQL (MS SQL, MySQL).
						</li>
						<li>
							<strong>Authentication & Authorization:</strong>{" "}
							Implemented secure user authentication and
							authorization with OAuth and JWT.
						</li>
						<li>
							<strong>API Design & Development:</strong> Designed
							and implemented efficient GraphQL APIs, allowing
							clients to request only the necessary data.
						</li>
						<li>
							<strong>Real-Time Communication:</strong> Integrated
							WebSockets to enable real-time data exchange,
							enhancing user interaction.
						</li>
						<li>
							<strong>CI/CD Pipeline:</strong> Established CI/CD
							pipelines with GitHub Actions, streamlining
							deployment processes.
						</li>
						<li>
							<strong>Caching Strategies:</strong> Implemented
							Redis caching to optimize API response times and
							reduce server load.
						</li>
						<li>
							<strong>Logging and Monitoring:</strong>{" "}
							Orchestrated the integration of logging and
							monitoring tools across three different services,
							ensuring seamless performance tracking that is now
							utilized by over 15 engineers, resulting in smoother
							deployment cycles.
						</li>
						<li>
							<strong>Azure DevOps:</strong> Utilized Azure DevOps
							for project management, version control, and
							continuous integration/continuous deployment (CI/CD)
							pipelines.
						</li>
						<li>
							<strong>Scrum Master:</strong> Facilitated Agile
							Scrum processes, managed sprints, and coordinated
							team activities to ensure effective delivery and
							adherence to project timelines.
						</li>
					</ul>
				</div>
			),
		},
		{
			title: "Sep 2021 - Mar 2022",
			content: (
				<div>
					<Image
						src='/experience/punde.png'
						alt='punde company'
						width={170}
						height={170}
						className='rounded-sm'
					/>
					<p className='text-lg'>Jr. Software Engineer</p>
					<ul className='list-disc p-3 space-y-2 pl-5 text-gray-400 text-sm font-light dark:text-gray-300'>
						<li>
							<strong>Crafted Innovative Shopify Themes:</strong>{" "}
							Developed themes for diverse industries, focusing on
							maximizing user experience and implementing
							responsive design features for optimal performance
							across all devices.
						</li>
						<li>
							<strong>Liquid:</strong> Utilized Liquid,
							Shopify&apos;s templating language, to create
							dynamic and interactive e-commerce sites.
						</li>
						<li>
							<strong>Responsive Design Implementation:</strong>{" "}
							Ensured that Shopify themes were fully responsive
							and optimized for all devices, improving customer
							engagement and sales.
						</li>
						<li>
							<strong>Cross-Browser Compatibility:</strong>{" "}
							Addressed cross-browser issues to ensure consistent
							performance across different web browsers.
						</li>
						<li>
							<strong>Performance Optimization:</strong> Optimized
							Shopify stores for faster load times and better
							performance, resulting in improved SEO and user
							retention.
						</li>
						<li>
							<strong>Client Collaboration:</strong> Worked
							closely with clients to understand their
							requirements and deliver solutions.
						</li>
						<li>
							<strong>Payment Gateway Integration:</strong>{" "}
							Integrated and configured payment gateways (e.g.,
							PayPal, Stripe) to handle secure transactions.
						</li>
						<li>
							<strong>Internationalization:</strong> Configured
							multi-currency support, multilingual stores, and
							international shipping options.
						</li>
						<li>
							<strong>Customized Checkout Process:</strong> Added
							custom fields and integrated with third-party
							services.
						</li>
						<li>
							<strong>Custom Features and Plugins:</strong>{" "}
							Integrated custom features and plugins into Shopify
							stores, tailoring solutions to meet specific client
							needs.
						</li>
						<li>
							<strong>Custom JavaScript and Liquid Code:</strong>{" "}
							Wrote custom JavaScript and Liquid code for
							additional functionality, like custom shipping
							rates.
						</li>
					</ul>
				</div>
			),
		},
	];
	return (
		<div className='w-full'>
			<Timeline data={data} />
		</div>
	);
}
