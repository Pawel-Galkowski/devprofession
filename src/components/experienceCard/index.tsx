import React from "react";
import "./ExperienceCard.css";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Link } from "@mui/material";
import {
	ExperienceDataProps,
	ExperienceProjectsDataProps,
	ObjectType,
} from "../../types";
import { v4 as uuidv4 } from "uuid";
import { ExperienceProjects } from "./ExperienceProjects";
import { experienceCardLocation } from "./styles";

const ExperienceCard: React.FC<{ children: ExperienceDataProps }> = ({
	children,
}) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box
			className='experience-card'
			style={{
				border: `1px solid ${theme.accentBright}`,
				backgroundColor: theme.avatarMisc,
			}}
		>
			<Box className='experience-card-logo-div'>{children.logo}</Box>
			<Box className='experience-card-body-div'>
				<Box className='experience-card-header-div'>
					<Box className='experience-card-heading-left'>
						<h3 className='experience-card-title' style={{ color: theme.text }}>
							{children.title}
						</h3>
						<p
							className='experience-card-company'
							style={{ color: theme.secondaryText }}
						>
							<Link
								href={children.company_url}
								target='_blank'
								rel='noopener noreferrer'
							>
								{children.company}
							</Link>
						</p>
					</Box>
					<Box className='experience-card-heading-right'>
						<p
							className='experience-card-location'
							style={{
								...experienceCardLocation(theme),
							}}
						>
							{children.location}
						</p>
					</Box>
				</Box>
				<Box
					className='experience-card-description'
					style={{ color: theme.text }}
				>
					{"projects" in children ? (
						children.projects.map((item: ExperienceProjectsDataProps) => (
							<ExperienceProjects project={item} key={uuidv4()} />
						))
					) : (
						<>
							<ul className='experience-card-description-simple-list'>
								{children.description.map((item: string) => (
									<li key={uuidv4()}>{item}</li>
								))}
							</ul>
							<Box className='technologies-section-styles'>
								Technologies & Frameworks: {children.technologies}
							</Box>
						</>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default ExperienceCard;
