import React from "react";
import { Flip } from "react-awesome-reveal";
import { homePage, contactPageData } from "../../data";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button } from "@mui/material";
import { ObjectType } from "../../types";
import { additionalInformationStyles, resumeButtonStyles } from "./styles";
import { Link } from "react-router-dom";
import { ContactImg } from "../../assests/svg/images";
import SocialMedia from "../../components/socialMedia";
import TopPageSection from "../../components/topPageSection";

const Contact: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<TopPageSection
			title={contactPageData.title}
			bodyText={contactPageData.description}
			image={<ContactImg />}
			additionalElements={[
				<Box sx={additionalInformationStyles}>
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
				</Box>,
			]}
		/>
	);
};

export default Contact;
