import React from "react";
import { Fade, Flip } from "react-awesome-reveal";
import { homePage, contactPageData } from "../../data";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Typography } from "@mui/material";
import { ObjectType } from "../../types";
import {
	basicContactStyles,
	contactDetailTextStyles,
	contactTextStyles,
	resumeButtonStyles,
	contactHeaderStyles,
} from "./styles";
import { Link } from "react-router-dom";
import { ContactImg } from "../../assests/svg/images";
import SocialMedia from "../../components/socialMedia";

const Contact: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={basicContactStyles}>
			<Fade duration={1000} direction='left'>
				<ContactImg />
			</Fade>
			<Fade duration={1000} direction='right'>
				<Box sx={contactHeaderStyles}>
					<Typography variant='h2' sx={contactTextStyles(theme)}>
						{contactPageData.title}
					</Typography>
					<Typography variant='body1' sx={contactDetailTextStyles(theme)}>
						{contactPageData.description}
					</Typography>
					<SocialMedia linkedin gmail />
					<Flip delay={1200} direction='vertical' triggerOnce>
						<Link to={homePage.resumeLink} target='_blank'>
							<Button
								sx={resumeButtonStyles(theme)}
								size='large'
								variant='contained'
							>
								Check my resume
							</Button>
						</Link>
					</Flip>
				</Box>
			</Fade>
		</Box>
	);
};

export default Contact;
