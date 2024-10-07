import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Link, List, ListItem, Typography } from "@mui/material";
import {
	ObjectType,
	ProjectsProps,
	ProjectTechnologiesProps,
} from "../../types";
import {
	actionButonsSectionStyle,
	languagesIconsStyle,
	projectCardStyle,
	projectInformationSectionStyle,
	repositoryDescriptionStyle,
	repositoryDetailsStyle,
	repositoryNameStyle,
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
					<Typography variant='h4' sx={repositoryNameStyle(theme)}>
						{repo.name}
					</Typography>
				</Box>
				<Typography variant='body2' sx={repositoryDescriptionStyle(theme)}>
					{repo.description}
				</Typography>
				<Box sx={projectInformationSectionStyle(theme)}>
					<Box sx={repositoryDetailsStyle}>
						Technologies:
						<List sx={languagesIconsStyle}>
							{repo.technologies.map((logo: ProjectTechnologiesProps) => (
								<ListItem key={uuidv4()} title={logo.name} disablePadding>
									{logo.icon}
								</ListItem>
							))}
						</List>
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
