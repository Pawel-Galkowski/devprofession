import React from "react";
import { ExperienceProjectsDataProps, ObjectType } from "../../types";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import {
	experienceCardBodyStyles,
	experienceCardCompanyStyles,
	experienceCardDurationStyles,
	experienceCardHeadingLeftStyles,
	experienceCardHeadingRightStyles,
	experienceCardInsideHeaderStyles,
	technologiesSectionStyles,
} from "./styles";
import CustomItemList from "../customItemList";

export const ExperienceProjects: React.FC<{
	project: ExperienceProjectsDataProps;
}> = ({ project }) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);
	const theme = themes[themeState];
	return (
		<Box sx={experienceCardBodyStyles}>
			<Box sx={experienceCardInsideHeaderStyles}>
				<Box sx={experienceCardHeadingLeftStyles}>
					<Typography variant='h5' sx={experienceCardCompanyStyles(theme)}>
						{project.role}
					</Typography>
				</Box>
				<Box sx={experienceCardHeadingRightStyles}>
					<Typography
						variant='body1'
						sx={experienceCardDurationStyles(theme)}
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
