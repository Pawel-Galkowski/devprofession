import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard";
import { degrees } from "../../data";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box } from "@mui/material";
import { DegreeProps, ObjectType } from "../../types";
import { v4 as uuidv4 } from "uuid";

const Educations: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Fade duration={2000} direction='down' triggerOnce>
				<h1 className='educations-header' style={{ color: theme.text }}>
					Degrees Received
				</h1>
			</Fade>
			{degrees.map((degree: DegreeProps) => (
				<DegreeCard degree={degree} key={uuidv4()} />
			))}
		</Box>
	);
};

export default Educations;
