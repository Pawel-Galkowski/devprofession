import React from "react";
import Skills from "../../containers/skills/Skills";
import { Box, Button, Typography } from "@mui/material";
import { FeelingProudImg } from "../../assets/svg/images";
import SocialMedia from "../../components/socialMedia";
import {
	contactButtonBoxStyles,
	contactButtonStyles,
	greetingHeadingStyles,
	greetingImageStyles,
	greetingTextStyles,
	homePageHeaderStyles,
	homePageStyles,
	informationBoxStyles,
} from "./styles";
import { homePage } from "../../data";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ThemeEnum, themes } from "../../theme";
import { ObjectType } from "../../types";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={homePageStyles}>
			<Box sx={homePageHeaderStyles}>
				<Box sx={informationBoxStyles}>
					<Fade duration={2000} direction='left' triggerOnce>
						<Typography sx={greetingHeadingStyles} variant='h2'>
							{homePage.title}
						</Typography>
						<Typography variant='h5' sx={greetingTextStyles(theme)}>
							I&apos;m{" "}
							<span style={{ color: theme.accentColor }}>
								{homePage.full_name}.{" "}
							</span>
							{homePage.subTitle}
						</Typography>

						<SocialMedia />
						<Box sx={contactButtonBoxStyles}>
							<Link to='/contact'>
								<Button
									sx={contactButtonStyles(theme)}
									variant='contained'
									size='large'
								>
									Contact Me
								</Button>
							</Link>
						</Box>
					</Fade>
				</Box>
				<Fade duration={2000} direction='right' triggerOnce>
					<Box sx={greetingImageStyles}>
						<FeelingProudImg />
					</Box>
				</Fade>
			</Box>
			<Skills />
		</Box>
	);
};

export default Home;
