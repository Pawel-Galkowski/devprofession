import React from "react";
import { ExperienceProjectsDataProps, ObjectType } from "../../types";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { v4 as uuidv4 } from "uuid";
import { experienceCardDuration } from "./styles";

export const ExperienceProjects: React.FC<{
	project: ExperienceProjectsDataProps;
}> = ({ project }) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Box className='experience-card-body-div' key={uuidv4()}>
			<Box className='experience-card-inside-header-div'>
				<Box className='experience-card-heading-left'>
					<h3
						className='experience-card-inside-title'
						style={{ color: theme.text }}
					>
						{project.role}
					</h3>
				</Box>
				<Box className='experience-card-heading-right'>
					<p
						className='experience-card-duration'
						style={{
							...experienceCardDuration(theme),
						}}
					>
						{project.duration}
					</p>
				</Box>
			</Box>
			<ul
				className='experience-card-description-list'
				style={{ color: theme.text }}
			>
				{project.description.map((item: string) => (
					<li key={uuidv4()}>{item}</li>
				))}
			</ul>
			<Box className='technologies-section-styles'>
				Technologies & Frameworks: {project.technologies}
			</Box>
		</Box>
	);
};
