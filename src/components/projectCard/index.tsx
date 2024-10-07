import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Link } from "@mui/material";
import {
	ObjectType,
	ProjectsProps,
	ProjectTechnologiesProps,
} from "../../types";
import {
	actionButonsSectionStyle,
	projectCardStyle,
	projectInformationSectionStyle,
} from "./styles";
import { v4 as uuidv4 } from "uuid";

const ProjectCard: React.FC<{ repo: ProjectsProps }> = ({ repo }) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);

	const theme = themes[themeState];
	return (
		<Fade direction='down' duration={2000} triggerOnce>
			<Box sx={projectCardStyle(theme)} key={uuidv4()}>
				<Box className='repo-name-div'>
					<p className='repo-name' style={{ color: theme.text }}>
						{repo.name}
					</p>
				</Box>
				<p className='repo-description' style={{ color: theme.text }}>
					{repo.description}
				</p>
				<Box sx={projectInformationSectionStyle(theme)}>
					<Box className='repo-details'>
						Technologies:
						<ul className='dev-icons-languages'>
							{repo.technologies.map((logo: ProjectTechnologiesProps) => (
								<li key={uuidv4()} title={logo.name}>
									{logo.icon}
								</li>
							))}
						</ul>
					</Box>
					<Box sx={actionButonsSectionStyle}>
						<Link href={repo.links.github} target='_blank'>
							<Button
								variant='contained'
								sx={{ backgroundColor: theme.bikeColor }}
							>
								Github
							</Button>
						</Link>
						<Link href={repo.links.live} target='_blank'>
							<Button
								variant='contained'
								sx={{ backgroundColor: theme.darkNumberColor }}
							>
								Live
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Fade>
	);
};

export default ProjectCard;
