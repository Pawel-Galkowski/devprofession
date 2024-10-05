import React from "react";
import ProjectCard from "../../components/projectCard";
import { Fade } from "react-awesome-reveal";
import { projectsHeader, projects, socialMediaLinks } from "../../data";
import "./Projects.css";
import { ProjectsImg } from "../../assests/svg/images";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Link } from "@mui/material";
import { ObjectType, ProjectsProps } from "../../types";
import { v4 as uuidv4 } from "uuid";

const Projects: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box className='projects-main'>
			<Fade duration={2000} direction='down'>
				<Box className='projects-heading-div'>
					<Box className='projects-heading-img-div'>
						<ProjectsImg />
					</Box>
					<Box className='projects-heading-text-div'>
						<h1 className='projects-heading-text' style={{ color: theme.text }}>
							{projectsHeader.title}
						</h1>
						<p
							className='projects-header-detail-text'
							style={{ color: theme.secondaryText }}
						>
							{projectsHeader.description}
						</p>
					</Box>
				</Box>
			</Fade>
			<Box className='projects-box-description'>
				<Box className='repo-cards-div-main'>
					{projects.map((repo: ProjectsProps) => (
						<ProjectCard repo={repo} key={uuidv4()} />
					))}
				</Box>
				<Link href={socialMediaLinks.github} target='_blank'>
					<Button
						variant='contained'
						sx={{ backgroundColor: theme.accentBright }}
					>
						More Projects (Github)
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Projects;
