import React from "react";
import SoftwareSkill from "./SoftwareSkills";
import { skills } from "../../data";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Typography } from "@mui/material";
import { ObjectType, SkillsProps } from "../../types";
import { v4 as uuidv4 } from "uuid";
import {
	skillsHeadingStyles,
	skillsImageStyles,
	skillsImgSectionStyles,
	skillsTextStyles,
	skillsTwoLayersLayoutStyles,
} from "./styles";
import CustomItemList from "../../components/customItemList";

export const skillSectionContainerTestId = 'skillSectionContainer-testId'

const SkillSection: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);
	const theme = themes[themeState];

	const fadeDirection = (index: number) => (index % 2 === 0 ? "right" : "left");
	const revertFadeDirection = (index: number) =>
		index % 2 === 0 ? "left" : "right";

	return (
		<Box sx={skillsTwoLayersLayoutStyles} data-testid={skillSectionContainerTestId}>
			{skills.map((item: SkillsProps, index) => (
				<Box sx={skillsImgSectionStyles(index % 2 === 0)} key={uuidv4()}>
					<Fade
						duration={2000}
						direction={revertFadeDirection(index)}
						triggerOnce
					>
						<Box sx={skillsImageStyles}>{item.image}</Box>
					</Fade>

					<Box sx={skillsTextStyles}>
						<Fade cascade direction={fadeDirection(index)} triggerOnce>
							<Typography variant='h4' sx={skillsHeadingStyles(theme)}>
								{item.title}
							</Typography>
						</Fade>
						<Fade cascade direction={fadeDirection(index)} triggerOnce>
							<SoftwareSkill skills={item.softwareSkills} />
						</Fade>
						<Fade cascade direction={fadeDirection(index)} triggerOnce>
							<CustomItemList item={item} />
						</Fade>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default SkillSection;
