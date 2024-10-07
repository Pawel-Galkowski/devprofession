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
	experienceCard,
	experienceCardBodyDiv,
	experienceCardCompany,
	experienceCardDescription,
	experienceCardHeaderDiv,
	experienceCardHeadingLeft,
	experienceCardHeadingRight,
	experienceCardLocation,
	experienceCardLogoDiv,
	experienceCardTitle,
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
		<Box sx={experienceCard(theme)}>
			<Box sx={experienceCardLogoDiv}>{children.logo}</Box>
			<Box sx={experienceCardBodyDiv}>
				<Box sx={experienceCardHeaderDiv}>
					<Box sx={experienceCardHeadingLeft}>
						<Typography variant='h4' sx={experienceCardTitle(theme)}>
							{children.title}
						</Typography>
						<Typography variant='body1' sx={experienceCardCompany(theme)}>
							<Link
								href={children.company_url}
								target='_blank'
								rel='noopener noreferrer'
							>
								{children.company}
							</Link>
						</Typography>
					</Box>
					<Box sx={experienceCardHeadingRight}>
						<Typography
							variant='body1'
							sx={experienceCardLocation(theme)}
							className='experience-card-location'
						>
							{children.location}
						</Typography>
					</Box>
				</Box>
				<Box sx={experienceCardDescription} style={{ color: theme.text }}>
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
