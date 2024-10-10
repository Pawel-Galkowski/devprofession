import React from "react";
import Educations from "../../containers/education";
import Certifications from "../../containers/certifications";
import { EducationImg } from "../../assets/svg/images";
import { Box } from "@mui/material";
import { basicEducationStyles } from "./styles";
import TopPageSection from "../../components/topPageSection";
import { educationData } from "../../data";

const Education: React.FC = () => (
	<Box sx={basicEducationStyles}>
		<TopPageSection
			title={educationData.title}
			subTitle={educationData.subtitle}
			bodyText={educationData.description}
			image={<EducationImg />}
		/>
		<Educations />
		<Certifications />
	</Box>
);

export default Education;
