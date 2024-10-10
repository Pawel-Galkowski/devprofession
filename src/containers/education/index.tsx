import React from "react";
import DegreeCard from "../../components/degreeCard";
import { degrees } from "../../data";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Typography } from "@mui/material";
import { DegreeProps, ObjectType } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { educationsHeaderStyles, educationStyles } from "./styles";

const Educations: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={educationStyles}>
			<Fade duration={2000} direction='down' triggerOnce>
				<Typography variant="h2" sx={educationsHeaderStyles(theme)}>
					Degrees Received
				</Typography>
			</Fade>
			{degrees.map((degree: DegreeProps) => (
				<DegreeCard degree={degree} key={uuidv4()} />
			))}
		</Box>
	);
};

export default Educations;
