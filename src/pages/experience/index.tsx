import React from "react";
import ExperienceAccordion from "../../containers/experienceAccordion";
import "./Experience.css";
import { experience } from "../../data";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box } from "@mui/material";
import { ObjectType } from "../../types";
import { ExperienceImg } from "../../assests/svg/images";

const Experience: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box className='experience-main'>
			<Box className='basic-experience'>
				<Fade duration={2000} direction='down'>
					<Box className='experience-heading-div'>
						<Box className='experience-heading-img-div'>
							<ExperienceImg />
						</Box>
						<Box className='experience-heading-text-div'>
							<h1
								className='experience-heading-text'
								style={{ color: theme.text }}
							>
								{experience.title}
							</h1>
							<h3
								className='experience-heading-sub-text'
								style={{ color: theme.text }}
							>
								{experience.subtitle}
							</h3>
							<p
								className='experience-header-detail-text'
								style={{ color: theme.secondaryText }}
							>
								{experience.description}
							</p>
						</Box>
					</Box>
				</Fade>
			</Box>
			<ExperienceAccordion>{experience.data}</ExperienceAccordion>
		</Box>
	);
};

export default Experience;
