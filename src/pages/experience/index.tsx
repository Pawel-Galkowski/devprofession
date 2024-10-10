import React from "react";
import ExperienceAccordion from "../../containers/experienceAccordion";
import { experience } from "../../data";
import { Box } from "@mui/material";
import { ExperienceImg } from "../../assets/svg/images";
import { experienceMainStyles } from "./styles";
import TopPageSection from "../../components/topPageSection";

const Experience: React.FC = () => (
	<Box sx={experienceMainStyles}>
		<TopPageSection
			title={experience.title}
			subTitle={experience.subtitle}
			bodyText={experience.description}
			image={<ExperienceImg />}
		/>
		<ExperienceAccordion data={experience.data} />
	</Box>
);

export default Experience;
