import React from "react";
import { Flip } from "react-awesome-reveal";
import { homePage, contactPageData } from "../../data";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button } from "@mui/material";
import { ObjectType } from "../../types";
import { additionalInformationStyles, resumeButtonStyles } from "./styles";
import { ContactImg } from "../../assets/svg/images";
import SocialMedia from "../../components/socialMedia";
import TopPageSection from "../../components/topPageSection";

export const contactTestId = "contactImg-testId";
export const contactAdditionalElemTestId = "contactAdditionalElem-testId";

const Contact: React.FC = () => {
	const themeState: ThemeEnum = useSelector((state: ObjectType) => state.value);
	const theme = themes[themeState];

	return (
		<TopPageSection
			title={contactPageData.title}
			bodyText={contactPageData.description}
			data-testid={contactTestId}
			image={<ContactImg />}
			additionalElements={[
				<Box
					sx={additionalInformationStyles}
					data-testid={contactAdditionalElemTestId}
				>
					<SocialMedia linkedin gmail />
					<Flip delay={1200} direction='vertical' triggerOnce>
						<Button
							sx={resumeButtonStyles(theme)}
							size='large'
							variant='contained'
							href={homePage.resumeLink}
							target='_blank'
						>
							Check my resume
						</Button>
					</Flip>
				</Box>,
			]}
		/>
	);
};

export default Contact;
