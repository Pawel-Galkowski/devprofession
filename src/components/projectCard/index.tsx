import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import {
	ObjectType,
	ProjectsProps,
	ProjectTechnologiesProps,
} from "../../types";
import {
	actionButonsSectionStyles,
	languagesIconsStyles,
	projectCardStyles,
	projectInformationSectionStyles,
	repositoryDescriptionStyles,
	repositoryDetailsStyles,
	repositoryNameStyles,
} from "./styles";
import { v4 as uuidv4 } from "uuid";

export const projectCardTestId = "projectCard-testId";

const ProjectCard: React.FC<{ repo: ProjectsProps }> = ({ repo }) => {
	const themeState: ThemeEnum = useSelector((state: ObjectType) => state.value);

	const theme = themes[themeState];
	return (
		<Fade direction='down' duration={2000} triggerOnce>
			<Box
				sx={projectCardStyles(theme)}
				key={uuidv4()}
				data-testid={projectCardTestId}
			>
				<Typography variant='h4' sx={repositoryNameStyles(theme)}>
					{repo.name}
				</Typography>
				<Typography variant='body2' sx={repositoryDescriptionStyles(theme)}>
					{repo.description}
				</Typography>
				<Box sx={projectInformationSectionStyles(theme)}>
					<Box sx={repositoryDetailsStyles}>
						Technologies:
						<List sx={languagesIconsStyles}>
							{repo.technologies.map((logo: ProjectTechnologiesProps) => (
								<ListItem key={uuidv4()} title={logo.name} disablePadding>
									{logo.icon}
								</ListItem>
							))}
						</List>
					</Box>
					<Box sx={actionButonsSectionStyles}>
						<Button
							variant='contained'
							sx={{ backgroundColor: theme.bikeColor }}
							href={repo.links.github}
							target='_blank'
						>
							Github
						</Button>
						<Button
							variant='contained'
							sx={{ backgroundColor: theme.darkNumberColor }}
							href={repo.links.live}
							target='_blank'
						>
							Live
						</Button>
					</Box>
				</Box>
			</Box>
		</Fade>
	);
};

export default ProjectCard;
