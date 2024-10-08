import React from "react";
import SoftwareSkill from "./SoftwareSkills";
import { skills } from "../../data";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import {
	Box,
	Typography,
} from "@mui/material";
import { ObjectType, SkillsProps } from "../../types";
import { v4 as uuidv4 } from "uuid";
import {
	skillsHeadingStyles,
	skillsImageStyles,
	skillsRightImgSectionStyles,
	skillsLeftImgSectionStyles,
	skillsTextStyles,
	skillsTwoLayersLayoutStyles,
} from "./styles";
import CustomItemList from "../../components/customItemList";

const SkillSection: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	const ItemTitle = ({ item }: { item: SkillsProps }) => (
		<Typography variant='h2' sx={skillsHeadingStyles(theme)}>
			{item.title}
		</Typography>
	);

	return (
		<Box sx={skillsTwoLayersLayoutStyles}>
			{skills.map((item: SkillsProps, index) =>
				index % 2 === 0 ? (
					<Box sx={skillsLeftImgSectionStyles} key={uuidv4()}>
						<Fade duration={2000} direction='left' triggerOnce>
							<Box sx={skillsImageStyles}>{item.image}</Box>
						</Fade>

						<Box sx={skillsTextStyles}>
							<Fade cascade direction='right' triggerOnce>
								<ItemTitle item={item} />
							</Fade>
							<Fade cascade direction='right' triggerOnce>
								<SoftwareSkill skills={item.softwareSkills} />
							</Fade>
							<Fade cascade direction='right' triggerOnce>
								<CustomItemList item={item} />
							</Fade>
						</Box>
					</Box>
				) : (
					<Box sx={skillsRightImgSectionStyles} key={uuidv4()}>
						<Box sx={skillsTextStyles}>
							<Fade cascade direction='left' triggerOnce>
								<ItemTitle item={item} />
							</Fade>
							<Fade cascade direction='left' triggerOnce>
								<SoftwareSkill skills={item.softwareSkills} />
							</Fade>
							<Fade cascade direction='left' triggerOnce>
								<CustomItemList item={item} />
							</Fade>
						</Box>
						<Fade duration={2000} cascade direction='right' triggerOnce>
							<Box sx={skillsImageStyles}>{item.image}</Box>
						</Fade>
					</Box>
				),
			)}
		</Box>
	);
};

export default SkillSection;
