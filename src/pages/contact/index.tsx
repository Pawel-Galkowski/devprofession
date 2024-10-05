import React from "react";
import { Fade, Flip } from "react-awesome-reveal";
import "./ContactComponent.css";
import { homePage, contactPageData, socialMediaLinks } from "../../data";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Link as MuiLink } from "@mui/material";
import { ObjectType } from "../../types";
import { resumeButtonStyles } from "./styles";
import { LinkedIn, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ContactImg } from "../../assests/svg/images";

const Contact: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box className='basic-contact'>
			<Fade duration={1000} direction='left'>
				<ContactImg />
			</Fade>
			<Fade duration={1000} direction='right'>
				<Box className='contact-heading-text-div'>
					<h1 className='contact-heading-text' style={{ color: theme.text }}>
						{contactPageData.title}
					</h1>
					<p
						className='contact-header-detail-text subTitle'
						style={{ color: theme.secondaryText }}
					>
						{contactPageData.description}
					</p>
					<Box className='social-media-div'>
						<MuiLink
							href={socialMediaLinks.linkedin}
							className='icon-button linkedin'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkedIn className='linkedin' />
						</MuiLink>
						<Link
							to={`mailto:${socialMediaLinks.gmail}`}
							className='icon-button google'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Email />
						</Link>
					</Box>
					<MuiLink href={homePage.resumeLink} download>
						<Flip delay={1200} direction='vertical'>
							<Button
								sx={resumeButtonStyles(theme)}
								size='large'
								variant='contained'
							>
								Check my resume
							</Button>
						</Flip>
					</MuiLink>
				</Box>
			</Fade>
		</Box>
	);
};

export default Contact;
