import React from "react";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Typography } from "@mui/material";
import { ObjectType } from "../../types";
import { mainSkillsStyles, skillsHeaderStyles } from "./styles";

const Skills: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Box sx={mainSkillsStyles}>
			<Fade duration={2000} direction='down' triggerOnce>
				<Typography sx={skillsHeaderStyles(theme)} variant="h2">
					Here&apos;s what I do
				</Typography>
			</Fade>
			<SkillSection />
		</Box>
	);
};

export default Skills;
