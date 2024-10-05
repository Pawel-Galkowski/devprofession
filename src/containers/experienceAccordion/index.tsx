import React from "react";
import "./ExperienceAccordion.css";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
} from "@mui/material";
import { ExperienceDataProps, ObjectType } from "../../types";
import { v4 as uuidv4 } from "uuid";
import ExperienceCard from "../../components/experienceCard";
import { accordionStyles } from "./styles";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";

const ExperienceAccordion: React.FC<{ children: ExperienceDataProps[] }> = ({
	children,
}) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Box className='experience-accord'>
			{children.map((data: ExperienceDataProps, index) => (
				<Accordion
					key={uuidv4()}
					sx={accordionStyles(theme)}
					defaultExpanded={index === 0 ? true : false}
				>
					<AccordionSummary>
						<Box sx={{ paddingLeft: "0.5rem" }}>{data.title}</Box>
						<Box sx={{ paddingRight: "2rem" }}>{data.duration}</Box>
					</AccordionSummary>
					<AccordionDetails>
						<ExperienceCard>{data}</ExperienceCard>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
};

export default ExperienceAccordion;
