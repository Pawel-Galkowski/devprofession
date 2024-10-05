import React from "react";
import "./Certifications.css";
import { Fade } from "react-awesome-reveal";
import { certifications } from "../../data";
import CertificationCard from "../../components/certificationCard";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box } from "@mui/material";
import { CertificationProps, ObjectType } from "../../types";
import { v4 as uuidv4 } from "uuid";

const Certifications: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box className='certs-header-div'>
				<Fade duration={2000} direction='down'>
					<h1 className='certs-header' style={{ color: theme.text }}>
						Certifications
					</h1>
				</Fade>
			</Box>
			<Box className='certs-body-div'>
				{certifications.map((cert: CertificationProps, index) => (
					<CertificationCard certificate={cert} key={uuidv4()} index={index} />
				))}
			</Box>
		</Box>
	);
};

export default Certifications;
