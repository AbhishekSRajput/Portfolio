import Image from "next/image";

export const techIcons = [
	"aws",
	"babel",
	"bootstrap5",
	"chakraui",
	"copilotgithub",
	"css3",
	"docker",
	"deno",
	"electron",
	"figma",
	"framer",
	"gatsby",
	"github",
	"gitlab",
	"graphql",
	"html5",
	"jest",
	"js",
	"kubernetes",
	"markdown",
	"materialui",
	"mongodb",
	"mysql",
	"nestjs",
	"nextjs2",
	"npm2",
	"openai",
	"postgresql",
	"postman",
	"remix",
	"sass",
	"tailwindcss",
	"webpack",
];

export const TechIcons = () => {
	return (
		<div>
			{techIcons.map((icon) => (
				<Image
					key={icon}
					src={`/public/techIcons/${icon}.svg`}
					alt={icon}
					width={50}
					height={50}
				/>
			))}
		</div>
	);
};
