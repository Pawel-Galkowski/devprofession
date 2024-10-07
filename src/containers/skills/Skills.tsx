import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box } from "@mui/material";
import { ObjectType } from "../../types";

const Skills: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Box className='main' id='skills'>
			<Box className='skills-header-Box'>
				<Fade duration={2000} direction='down' triggerOnce>
					<h1 className='skills-header' style={{ color: theme.text }}>
						Here&apos;s what I do
					</h1>
				</Fade>
			</Box>
			<SkillSection />
		</Box>
	);
};

export default Skills;
