import React from "react";
import "./home.css";
import Skills from "../../containers/skills/Skills";
import { Box } from "@mui/material";
import { FeelingProudImg } from "../../assests/svg/images";
import SocialMedia from "../../components/socialMedia";
import { contactButtonStyles } from "./styles";
import { homePage } from "../../data";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ThemeEnum, themes } from "../../theme";
import { ObjectType } from "../../types";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box>
			<Fade duration={2000} direction='down'>
				<Box className='greet-main'>
					<Box className='greeting-text-div'>
						<h1 className='greeting-text'>{homePage.title}</h1>
						<p
							className='greeting-text-p subTitle'
							style={{ color: theme.secondaryText }}
						>
							<span>I&apos;m </span>
							<span style={{ color: theme.accentColor }}>
								{homePage.full_name}.{" "}
							</span>
							{homePage.subTitle}
						</p>
						<SocialMedia />
						<Box className='data-repo-btn-div'>
							<Link to='/contact'>
								<button style={contactButtonStyles(theme)}>Contact Me</button>
							</Link>
						</Box>
					</Box>
					<FeelingProudImg className='greeting-image-div' />
				</Box>
			</Fade>
			<Skills />
		</Box>
	);
};

export default Home;
