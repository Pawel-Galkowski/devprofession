import React from "react";
import ProjectCard from "../../components/projectCard";
import { projectsHeader, projects, socialMediaLinks } from "../../data";
import { ProjectsImg } from "../../assets/svg/images";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Link } from "@mui/material";
import { ObjectType, ProjectsProps } from "../../types";
import { v4 as uuidv4 } from "uuid";
import {
	buttonStyles,
	projectsDescriptionStyles,
	projectsPageStyles,
} from "./styles";
import TopPageSection from "../../components/topPageSection";

const Projects: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={projectsPageStyles}>
			<TopPageSection
				title={projectsHeader.title}
				bodyText={projectsHeader.description}
				image={<ProjectsImg />}
			/>
			<Box sx={projectsDescriptionStyles}>
				{projects.map((repo: ProjectsProps) => (
					<ProjectCard repo={repo} key={uuidv4()} />
				))}
				<Link href={socialMediaLinks.github} target='_blank'>
					<Button variant='contained' sx={buttonStyles(theme)} size="large">
						More Projects (Github)
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Projects;
