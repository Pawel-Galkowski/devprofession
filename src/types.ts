// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjectType = Record<string, any>;

export interface CertificationProps {
	title: string;
	subtitle: string;
	logo: JSX.Element;
	certificate_link: string;
}

export interface DegreeProps {
	title: string;
	subtitle: string;
	logo: JSX.Element;
	descriptions: string[];
	alt_name: string;
	duration: string;
	website_link: string;
}

export interface SkillProps {
	skillName: string;
	image: JSX.Element;
}

export interface SkillsProps {
	title: string;
	image: JSX.Element;
	descriptions: string[];
	softwareSkills: SkillProps[];
}

export interface SocialMediaLinksProps {
	github: string;
	linkedin: string;
	gmail: string;
}

export interface HomePageProps {
	title: string;
	footer_information: string;
	logo_name: string;
	nickname: string;
	full_name: string;
	subTitle: string;
	resumeLink: string;
	mail: string;
}

export interface ExperienceProjectsDataProps {
	descriptions: string[];
	duration: string;
	role: string;
	technologies: string;
}

interface ExperienceDataWithProjects {
	title: string;
	company: string;
	company_url: string;
	logo: JSX.Element;
	duration: string;
	location: string;
	projects: ExperienceProjectsDataProps[];
}

interface ExperienceDataWithoutProjects {
	title: string;
	company: string;
	company_url: string;
	logo: JSX.Element;
	duration: string;
	location: string;
	descriptions: string[];
	technologies: string;
}

export type ExperienceDataProps =
	| ExperienceDataWithProjects
	| ExperienceDataWithoutProjects;

export interface ExperienceProps {
	title: string;
	subtitle: string;
	description: string;
	header_image_path: string;
	data: ExperienceDataProps[];
}

export interface ProjectsHeaderProps {
	title: string;
	description: string;
	avatar_image_path: string;
}

export interface ContactPageDataProps {
	title: string;
	description: string;
}

export interface ProjectTechnologiesProps {
	name: string;
	icon: JSX.Element;
}

export interface ProjectsLinksProps {
	github: string;
	live: string;
}

export interface ProjectsProps {
	name: string;
	url: string;
	description: string;
	technologies: ProjectTechnologiesProps[];
	links: ProjectsLinksProps;
}
