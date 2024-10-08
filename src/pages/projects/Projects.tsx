import React from "react";
import ProjectCard from "../../components/projectCard";
import { Fade } from "react-awesome-reveal";
import { projectsHeader, projects, socialMediaLinks } from "../../data";
import { ProjectsImg } from "../../assests/svg/images";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Link, Typography } from "@mui/material";
import { ObjectType, ProjectsProps } from "../../types";
import { v4 as uuidv4 } from "uuid";
import {
	buttonStyles,
	projectsDescriptionStyles,
	projectsHeaderDetailTextStyles,
	projectsHeadingImgStyles,
	projectsHeadingStyles,
	projectsHeadingTextSectionStyles,
	projectsHeadingTextStyles,
	projectsPageStyles,
	projectsRepositoryCardStyles,
} from "./styles";

const Projects: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={projectsPageStyles}>
			<Box sx={projectsHeadingStyles}>
				<Fade duration={2000} direction='left' cascade triggerOnce>
					<Box sx={projectsHeadingImgStyles}>
						<ProjectsImg />
					</Box>
				</Fade>
				<Fade duration={2000} direction='right' cascade triggerOnce>
					<Box sx={projectsHeadingTextSectionStyles}>
						<Typography variant='h2' sx={projectsHeadingTextStyles(theme)}>
							{projectsHeader.title}
						</Typography>
						<Typography variant='h6' sx={projectsHeaderDetailTextStyles(theme)}>
							{projectsHeader.description}
						</Typography>
					</Box>
				</Fade>
			</Box>
			<Box sx={projectsDescriptionStyles}>
				<Box sx={projectsRepositoryCardStyles}>
					{projects.map((repo: ProjectsProps) => (
						<ProjectCard repo={repo} key={uuidv4()} />
					))}
				</Box>
				<Link href={socialMediaLinks.github} target='_blank'>
					<Button variant='contained' sx={buttonStyles(theme)}>
						More Projects (Github)
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Projects;
