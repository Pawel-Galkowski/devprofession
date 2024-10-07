import React from "react";
import { ExperienceProjectsDataProps, ObjectType } from "../../types";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import {
	experienceCardBodyDiv,
	experienceCardCompany,
	experienceCardDescription,
	experienceCardDuration,
	experienceCardHeadingLeft,
	experienceCardHeadingRight,
	experienceCardInsideHeaderDiv,
	technologiesSectionStyles,
} from "./styles";
import CustomItemList from "../customItemList";

export const ExperienceProjects: React.FC<{
	project: ExperienceProjectsDataProps;
}> = ({ project }) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Box sx={experienceCardBodyDiv}>
			<Box sx={experienceCardInsideHeaderDiv}>
				<Box sx={experienceCardHeadingLeft}>
					<Typography variant='h5' sx={experienceCardCompany(theme)}>
						{project.role}
					</Typography>
				</Box>
				<Box sx={experienceCardHeadingRight}>
					<Typography
						variant='body1'
						sx={[experienceCardDescription, experienceCardDuration(theme)]}
					>
						{project.duration}
					</Typography>
				</Box>
			</Box>
			<CustomItemList item={project} />
			<Box sx={technologiesSectionStyles}>
				<Typography variant='body2'>
					Technologies & Frameworks: {project.technologies}
				</Typography>
			</Box>
		</Box>
	);
};
