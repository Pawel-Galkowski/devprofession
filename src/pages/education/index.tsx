import React from "react";
import Educations from "../../containers/education";
import Certifications from "../../containers/certifications";
import { EducationImg } from "../../assests/svg/images";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box } from "@mui/material";
import { ObjectType } from "../../types";

const Education: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box className='basic-education'>
			<Box className='heading-div'>
				<Fade duration={2000} direction='left' triggerOnce>
					<EducationImg />
				</Fade>
				<Fade duration={2000} direction='right' triggerOnce>
					<Box className='heading-text-div'>
						<h1 className='heading-text' style={{ color: theme.text }}>
							Education
						</h1>
						<h3 className='heading-sub-text' style={{ color: theme.text }}>
							Basic Qualification and Certifications
						</h3>
						<p
							className='experience-header-detail-text subTitle'
							style={{ color: theme.secondaryText }}
						>
							I actively participate in technical events and learning sessions.
							Below are some of my certifications.
						</p>
					</Box>
				</Fade>
			</Box>
			<Educations />
			<Certifications />
		</Box>
	);
};

export default Education;
