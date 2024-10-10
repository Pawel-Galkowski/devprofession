import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import {
	Box,
	CardContent,
	Link,
	Typography,
	Card,
	Button,
	CardActions,
} from "@mui/material";
import { CertificationProps } from "../../types";
import { cardStyles, imageStyles, subTitleStyles } from "./styles";
import { Send } from "@mui/icons-material";
import { RootState } from "../../store";

export const certificationCardTestId = "certificationCardTestId";

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
					<Link href={certificate.certificate_link}>
						<Button size='small' endIcon={<Send />}>
							Open certification
						</Button>
					</Link>
				</CardActions>
			</Card>
		</Fade>
	);
};

export default CertificationCard;
