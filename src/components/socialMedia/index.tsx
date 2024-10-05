import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../data";
import { Box, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const SocialMedia: React.FC = () => (
	<Box className='social-media-div'>
		<Link
			href={socialMediaLinks.github}
			className='icon-button github'
			target='_blank'
			rel='noopener noreferrer'
		>
			<GitHub />
		</Link>
		<Link
			href={socialMediaLinks.linkedin}
			className='icon-button linkedin'
			target='_blank'
			rel='noopener noreferrer'
		>
			<LinkedIn className='linkedin' />
		</Link>
		<Link
			href={`mailto:${socialMediaLinks.gmail}`}
			className='icon-button google'
			target='_blank'
			rel='noopener noreferrer'
		>
			<Email />
		</Link>
	</Box>
);

export default SocialMedia;
