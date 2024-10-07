import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum } from "../../theme";
import {
	Box,
	CardContent,
	Link,
	Typography,
	Card,
	Button,
	CardActions,
} from "@mui/material";
import { CertificationProps, ObjectType } from "../../types";
import { cardStyles, imageStyles } from "./styles";
import { Send } from "@mui/icons-material";

const CertificationCard: React.FC<{
	certificate: CertificationProps;
}> = ({ certificate }) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);

	return (
		<Fade duration={2000} direction='up' cascade triggerOnce>
			<Card sx={cardStyles(themeState)}>
				<Box sx={imageStyles}>{certificate.logo}</Box>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{certificate.title}
					</Typography>
					<Typography variant='body2' sx={{ color: "text.secondary" }}>
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
