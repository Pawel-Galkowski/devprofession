import React from "react";
import ExperienceAccordion from "../../containers/experienceAccordion";
import { experience } from "../../data";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Typography } from "@mui/material";
import { ObjectType } from "../../types";
import { ExperienceImg } from "../../assests/svg/images";
import {
	experienceHeaderDetailTextStyles,
	experienceHeaderStyles,
	experienceHeadingImgStyles,
	experienceHeadingSubTextStyles,
	experienceHeadingStyles,
	experienceHeadingTextStyles,
	experienceMainStyles,
} from "./styles";

const Experience: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={experienceMainStyles}>
			<Box sx={experienceHeaderStyles}>
				<Fade duration={2000} direction='left' cascade triggerOnce>
					<Box sx={experienceHeadingImgStyles}>
						<ExperienceImg />
					</Box>
				</Fade>
				<Fade duration={2000} direction='right' cascade triggerOnce>
					<Box sx={experienceHeadingStyles}>
						<Typography variant='h2' sx={experienceHeadingTextStyles(theme)}>
							{experience.title}
						</Typography>
						<Typography variant='h6' sx={experienceHeadingSubTextStyles(theme)}>
							{experience.subtitle}
						</Typography>
						<Typography
							variant='body1'
							sx={experienceHeaderDetailTextStyles(theme)}
						>
							{experience.description}
						</Typography>
					</Box>
				</Fade>
			</Box>
			<ExperienceAccordion>{experience.data}</ExperienceAccordion>
		</Box>
	);
};

export default Experience;
