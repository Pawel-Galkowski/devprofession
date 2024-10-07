import React from "react";
import { Fade } from "react-awesome-reveal";
import { certifications } from "../../data";
import CertificationCard from "../../components/certificationCard";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Typography } from "@mui/material";
import { CertificationProps, ObjectType } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { certificationHeaderStyles, certificationBodyStyles, certificationStyles } from "./styles";

const Certifications: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={certificationStyles}>
			<Fade duration={2000} direction='down' triggerOnce>
				<Typography variant='h2' sx={certificationHeaderStyles(theme)}>
					Certifications
				</Typography>
			</Fade>
			<Box sx={certificationBodyStyles}>
				{certifications.map((cert: CertificationProps) => (
					<CertificationCard certificate={cert} key={uuidv4()} />
				))}
			</Box>
		</Box>
	);
};

export default Certifications;
