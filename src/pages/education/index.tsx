import React from "react";
import Educations from "../../containers/education";
import Certifications from "../../containers/certifications";
import { EducationImg } from "../../assests/svg/images";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Typography } from "@mui/material";
import { ObjectType } from "../../types";
import {
	basicEducationStyles,
	educationHeaderDetailTextStyles,
	headingStyles,
	headingSubTextStyles,
	headingTextStyles,
} from "./styles";

const Education: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={basicEducationStyles}>
			<Box sx={headingStyles}>
				<Fade duration={2000} direction='left' triggerOnce>
					<EducationImg />
				</Fade>
				<Fade duration={2000} direction='right' triggerOnce>
					<>
						<Typography variant='h2' sx={headingTextStyles(theme)}>
							Education
						</Typography>
						<Typography variant='h6' sx={headingSubTextStyles(theme)}>
							Basic Qualification and Certifications
						</Typography>
						<Typography
							variant='body1'
							sx={educationHeaderDetailTextStyles(theme)}
						>
							I actively participate in technical events and learning sessions.
							Below are some of my certifications.
						</Typography>
					</>
				</Fade>
			</Box>
			<Educations />
			<Certifications />
		</Box>
	);
};

export default Education;
