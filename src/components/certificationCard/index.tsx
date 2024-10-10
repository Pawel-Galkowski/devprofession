import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import {
	Box,
	CardContent,
	Typography,
	Card,
	Button,
	CardActions,
} from "@mui/material";
import { CertificationProps } from "../../types";
import { cardStyles, imageStyles, subTitleStyles } from "./styles";
import { Send } from "@mui/icons-material";
import { RootState } from "../../store";

export const certificationCardTestId = "certificationCard-testId";

const CertificationCard: React.FC<{
	certificate: CertificationProps;
}> = ({ certificate }) => {
	const themeState: ThemeEnum = useSelector((state: RootState) => state.value);

	const theme = themes[themeState];
	return (
		<Fade duration={2000} direction='up' cascade triggerOnce>
			<Card sx={cardStyles(themeState)} data-testid={certificationCardTestId}>
				<Box sx={imageStyles}>{certificate.logo}</Box>
				<CardContent>
					<Typography gutterBottom variant='h5'>
						{certificate.title}
					</Typography>
					<Typography variant='body2' sx={subTitleStyles(theme)}>
						{certificate.subtitle}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						endIcon={<Send />}
						href={certificate.certificate_link}
						target="_blank"
					>
						Open certification
					</Button>
				</CardActions>
			</Card>
		</Fade>
	);
};

export default CertificationCard;
