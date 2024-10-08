import React from "react";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Link, Typography } from "@mui/material";
import {
	ExperienceDataProps,
	ExperienceProjectsDataProps,
	ObjectType,
} from "../../types";
import { v4 as uuidv4 } from "uuid";
import { ExperienceProjects } from "./ExperienceProjects";
import {
	experienceCardStyles,
	experienceCardBodyStyles,
	experienceCardCompanyStyles,
	experienceCardDescriptionStyles,
	experienceCardHeaderStyles,
	experienceCardHeadingLeftStyles,
	experienceCardHeadingRightStyles,
	experienceCardLocationStyles,
	experienceLogStyles,
	experienceCardTitleStyles,
	technologiesSectionStyles,
} from "./styles";
import CustomItemList from "../customItemList";

const ExperienceCard: React.FC<{ children: ExperienceDataProps }> = ({
	children,
}) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={experienceCardStyles(theme)}>
			<Box sx={experienceLogStyles}>{children.logo}</Box>
			<Box sx={experienceCardBodyStyles}>
				<Box sx={experienceCardHeaderStyles}>
					<Box sx={experienceCardHeadingLeftStyles}>
						<Typography variant='h4' sx={experienceCardTitleStyles(theme)}>
							{children.title}
						</Typography>
						<Typography variant='body1' sx={experienceCardCompanyStyles(theme)}>
							<Link
								href={children.company_url}
								target='_blank'
								rel='noopener noreferrer'
							>
								{children.company}
							</Link>
						</Typography>
					</Box>
					<Box sx={experienceCardHeadingRightStyles}>
						<Typography
							variant='body1'
							sx={experienceCardLocationStyles(theme)}
							className='experience-card-location'
						>
							{children.location}
						</Typography>
					</Box>
				</Box>
				<Box sx={experienceCardDescriptionStyles(theme)}>
					{"projects" in children ? (
						children.projects.map((item: ExperienceProjectsDataProps) => (
							<ExperienceProjects project={item} key={uuidv4()} />
						))
					) : (
						<>
							<CustomItemList item={children} />
							<Box sx={technologiesSectionStyles}>
								<Typography variant='body2'>
									Technologies & Frameworks: {children.technologies}
								</Typography>
							</Box>
						</>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default ExperienceCard;
