export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I emphasize client collaboration, ensuring clear and open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Highly adaptable to time zones for communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "I am always striving for improvement.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Avid technologist driven by a love for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "grid.svg",
    spareImg: "b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Salon Booking App",
    description: "Behind the Scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    des: "A personal portfolio website built with Next.js and Tailwind CSS.",
    img: "projects/portfolio.png",
    iconLists: ["re.svg", "tail.svg", "ts.svg", "three.svg", "fm.svg"],
    link: "",
  },
  {
    id: 2,
    title: "Thakur's Salon",
    des: "A salon booking app built with NextJS, NestJS, MySQL, and TailwindCSS. Still in development",
    img: "projects/thakur.png",
    iconLists: ["next.svg", "tail.svg", "ts.svg", "techIcons/nestjs.svg", "re.svg"],
    link: "",
  }
];

export const blogs = [
  {
    id: 1,
    author: "Abhishek Singh",
    title: "dev.to/abhisheksrajput",
    des: "Can you solve these Javascript Mind Twister Puzzles by ChatGPT? 🤯",
    img: "/blogs/devto.png",
    iconLists: ["techIcons/js.svg"],
    link: "https://dev.to/abhisheksrajput/can-you-solve-these-javascript-mind-twister-puzzles-by-chatgpt-58cf",
  },
  {
    id: 2,
    author: "Abhishek Singh",
    title: "dev.to/abhisheksrajput",
    des: "Setup NextJS with typescript, EsLint, prettier and husky",
    img: "/blogs/devto.png",
    iconLists: ["next.svg", "ts.svg"],
    link: "https://dev.to/abhisheksrajput/can-you-solve-these-javascript-mind-twister-puzzles-by-chatgpt-58cf ",
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Punde Software",
    title: "JR Software Engineer",
    from: '2021',
    to: '2022',
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "experience/punde.png",
  },
  {
    id: 2,
    company: "INFILON Technologies",
    title: "Software Engineer",
    from: '2022',
    to: 'Present',
    desc: "Full stack developer at INFILON Technologies, developing web applications using React and NodeJS.",
    className: "md:col-span-2",
    thumbnail: "experience/infilon-light.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
