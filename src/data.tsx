import React from 'react'
import {
	CertificationProps,
	ContactPageDataProps,
	DegreeProps,
	EducationProps,
	ExperienceProps,
	HomePageProps,
	ProjectsHeaderProps,
	ProjectsProps,
	SkillsProps,
	SocialMediaLinksProps,
} from "./types";
import {
	CapgeminiLogoImg,
	IKLogoImg,
	INGLogoImg,
	MicrosoftLogoImg,
	OpoleUniversityImg,
} from "./assets/svg/logos";
import {
	ReactIcon,
	NodejsIcon,
	NPMIcon,
	MongoIcon,
	WordpressIcon,
	GITIcon,
	CSSIcon,
	HTMLIcon,
	JavaScriptIcon,
} from "./assets/svg/icons";
import { BackEndImg, FrontEndImg } from "./assets/svg/images";

export const homePage: HomePageProps = {
	title: "Hello 👋",
	footer_information: "Pawel Galkowski",
	logo_name: "DevProfession",
	nickname: "Pawel",
	full_name: "Pawel Galkowski",
	subTitle:
		"Full-Stack Developer, Javascript Enthusiast 🔥. Always open to new things.",
	resumeLink: "https://devprofession.pl/Resume-Pawel-Galkowski-A.pdf",
	mail: "mailto:mail@devprofession.pl",
};

export const socialMediaLinks: SocialMediaLinksProps = {
	github: "https://github.com/Pawel-Galkowski",
	linkedin: "https://linkedin.com/in/pawel-galkowski",
	gmail: "mail@devprofession.pl",
};

export const skills: SkillsProps[] = [
	{
		title: "Front-End Development",
		image: <FrontEndImg />,
		descriptions: [
			"Develop highly interactive Front-end Interfaces for your web and mobile applications",
			"Building responsive website using JavaScript or TypeScript",
			"Developing mobile applications using React Native",
		],
		softwareSkills: [
			{
				skillName: "HTML5",
				image: <HTMLIcon />,
			},
			{
				skillName: "CSS3",
				image: <CSSIcon />,
			},
			{
				skillName: "JavaScript",
				image: <JavaScriptIcon />,
			},
			{
				skillName: "ReactJS",
				image: <ReactIcon />,
			},
			{
				skillName: "Wordpress",
				image: <WordpressIcon />,
			},
		],
	},
	{
		title: "Back-End Development",
		image: <BackEndImg />,
		descriptions: [
			"Creating application backend in Node, Express, Nest or Next",
			"Integration of third party services such as Firebase/ AWS / Digital Ocean",
		],
		softwareSkills: [
			{
				skillName: "NodeJS",
				image: <NodejsIcon />,
			},
			{
				skillName: "NPM",
				image: <NPMIcon />,
			},
			{
				skillName: "MongoDB",
				image: <MongoIcon />,
			},
			{
				skillName: "Git",
				image: <GITIcon />,
			},
		],
	},
];

export const degrees: DegreeProps[] = [
	{
		title: "Opole University of Technology",
		subtitle: "Bachelor in Computer Science",
		logo: <OpoleUniversityImg />,
		alt_name: "OUoT",
		duration: "2016 - 2020",
		descriptions: [
			"I studied core subjects such as machine learning, computer vision and advanced web development.",
			"I've implemented several projects based on what I've learnt during my computer engineering studies.",
			"I learned how to create UI-based designs in Photoshop and how to use them in my day-to-day work to create eye-catching pages and applications.",
		],
		website_link: "https://po.edu.pl/?lang=en",
	},
];

export const certifications: CertificationProps[] = [
	{
		title: "AZ-900",
		subtitle: "Microsoft Certified",
		logo: <MicrosoftLogoImg />,
		certificate_link: "",
	},
];

export const experience: ExperienceProps = {
	title: "Experience",
	subtitle: "Work information list",
	description:
		"As a Full-Stack Developer, I have worked with real projects for many years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
	data: [
		{
			title: "Software Engineer",
			company: "Capgemini SE",
			company_url: "https://www.capgemini.com/us-en/",
			logo: <CapgeminiLogoImg />,
			duration: "05/2022 - Present",
			location: "Remote",
			projects: [
				{
					role: "Software Engineer",
					descriptions: [
						"Maintain multilingual AI-based service with speech-to-write solution",
						"Work directly with Copilot Studio and automatic database solution system",
						"Integration with Artificial Intelligence systems",
					],
					technologies:
						"React, NestJS, Vue3, Typescript, Jest, Hasura GraphQL, Copilot Studio, Azure",
					duration: "01/2024 - Present",
				},
				{
					role: "Mobile Developer",
					descriptions: [
						"Developed end-to-end solutions for mobile healthcare applications",
						"Ongoing contact with clients to establish project requirements and provide updates",
						"Professional maintenance and troubleshooting",
					],
					duration: "08/2023 - 12/2023",
					technologies: "React Native, Typescript, Expo, Jest, Next, Azure",
				},
				{
					role: "FrontEnd Developer",
					descriptions: [
						"Development of an insurance sales application",
						"Implemented integration with multiple internal systems and custom component library",
						"Cooperation with external UX Team",
					],
					duration: "05/2022 - 07/2023",
					technologies:
						"React, NodeJS, Express.js, Typescript, Material-UI, Storybook, Jest, OpenShift 4, Azure",
				},
			],
		},
		{
			title: "JavaScript Developer",
			company: "ING Bank Śląski S.A.",
			company_url: "https://www.ing.pl/",
			logo: <INGLogoImg />,
			duration: "12/2020 - 05/2022",
			location: "Katowice, Poland / hybrid-work",
			descriptions: [
				"Maintained cross-platform banking system",
				"Development of a new JavaScript web component library on the basis of graphical designs",
				"Implemented a storybook with detailed information about the components to increase developer productivity",
			],
			technologies:
				"JavaScript, Mocha, Jest, Webcomponents, LitElement, Node, Express, Storybook, AdobeXD, Confluence, AWS",
		},
		{
			title: "Junior Full-Stack Developer",
			company: "Instal-Konsorcjum Sp. z o.o.",
			company_url: "https://ik.pl/",
			logo: <IKLogoImg />,
			duration: "07/2018 - 12/2020",
			location: "Wroclaw, Poland",
			descriptions: [
				"Implemented a dashboard for client tickets, resulti ng in a 40% reduction in calls",
				"Created responsive websites for clients using WordPress and Joomla which replaced nonresponsive pages and resulted in at least 18% faster load time",
				"Implemented Google tools to generate 10% to 20% more visitors per page with changes based on statistics (Google Analytics, Search Console, Google Trends, Google Tag Manager)",
			],
			technologies:
				"JavaScript, JQuery, Node, Vue2, HTML, CSS, PHP, MySql, C# .NET, Figma, Mongoose, MongoDB",
		},
	],
};

export const projectsHeader: ProjectsHeaderProps = {
	title: "Projects",
	description:
		"My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
	avatar_image_path: "projects_image.svg",
};

export const educationData: EducationProps = {
	title: "Education",
	description:
		"I actively participate in technical events and learning sessions. Below are some of my certifications.",
	subtitle: "Basic Qualification and Certifications",
};

export const contactPageData: ContactPageDataProps = {
	title: "Contact Me",
	description:
		"You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
};

export const projects: ProjectsProps[] = [
	{
		name: "Recruitment Platform",
		url: "https://github.com/Pawel-Galkowski/Recruitment-Platform--OLD-Version",
		description:
			"Bachelor degree project completely created by me. Includes roles of client, recruiter and admin. Have posibility to publish new offer, edit information and view it from client side. You can add information about yourself, edit it and everything (public) can be maintained by admin (remove/add users, post and other information).",
		technologies: [
			{
				name: "HTML5",
				icon: <HTMLIcon />,
			},
			{
				name: "CSS3",
				icon: <CSSIcon />,
			},
			{
				name: "NodeJs",
				icon: <NodejsIcon />,
			},
			{
				name: "React",
				icon: <ReactIcon />,
			},
			{
				name: "Mongo",
				icon: <MongoIcon />,
			},
		],
		links: {
			github:
				"https://github.com/Pawel-Galkowski/Recruitment-Platform--OLD-Version",
			live: "https://joinjobs.herokuapp.com/",
		},
	},
];
