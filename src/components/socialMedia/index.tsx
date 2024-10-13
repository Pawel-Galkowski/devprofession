import React from "react";
import { socialMediaLinks } from "../../data";
import { Box, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import {
	socialMediaStyles,
	githubStyles,
	linkedinStyles,
	gmailStyles,
	iconButtonStyles,
} from "./styles";

export interface RequiredSocialMediaProps {
	github?: boolean;
	linkedin?: boolean;
	gmail?: boolean;
}

export const socialMediaTestId = 'socialMedia-testId'

const SocialMedia: React.FC<RequiredSocialMediaProps> = ({
	github,
	linkedin,
	gmail,
}) => (
	<Box sx={socialMediaStyles} data-testid={socialMediaTestId}>
		{github && (
			<Link
				href={socialMediaLinks.github}
				sx={[githubStyles, iconButtonStyles]}
				target='_blank'
				rel='noopener noreferrer'
			>
				<GitHub />
			</Link>
		)}
		{linkedin && (
			<Link
				href={socialMediaLinks.linkedin}
				sx={[linkedinStyles, iconButtonStyles]}
				target='_blank'
				rel='noopener noreferrer'
			>
				<LinkedIn className='linkedin' />
			</Link>
		)}
		{gmail && (
			<Link
				href={`mailto:${socialMediaLinks.gmail}`}
				sx={[gmailStyles, iconButtonStyles]}
				target='_blank'
				rel='noopener noreferrer'
			>
				<Email />
			</Link>
		)}
	</Box>
);

export default SocialMedia;
