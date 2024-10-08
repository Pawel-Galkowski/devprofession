import React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from "@mui/material";
import { ExperienceDataProps, ObjectType } from "../../types";
import { v4 as uuidv4 } from "uuid";
import ExperienceCard from "../../components/experienceCard";
import {
	accordionStyles,
	accordionSummaryStyles,
	experienceAccordStyles,
} from "./styles";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";

const ExperienceAccordion: React.FC<{ data: ExperienceDataProps[] }> = ({
	data,
}) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Box sx={experienceAccordStyles}>
			{data.map((item: ExperienceDataProps, index) => (
				<Accordion
					key={uuidv4()}
					sx={accordionStyles(theme)}
					defaultExpanded={index === 0}
				>
					<AccordionSummary sx={accordionSummaryStyles}>
						<Typography variant="h6">{item.title}</Typography>
						<Typography variant="h6">{item.duration}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<ExperienceCard>{item}</ExperienceCard>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
};

export default ExperienceAccordion;
