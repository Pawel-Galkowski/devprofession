import React from "react";
import { Fade, Flip } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Button, Link, Typography } from "@mui/material";
import { DegreeProps, ObjectType } from "../../types";
import {
	visitButtonStyles,
	bodyCardStyles,
	imgStyles,
	cardDegreeSectionStyles,
	bodyHeaderStyles,
	bodyHeaderTitleStyles,
	cardSubtitleStyles,
	cardTitleStyles,
	degreeCardStyles,
	durationDesktopStyles,
	durationMobileStyles,
	buttonLinkStyles,
} from "./styles";
import CustomItemList from "../customItemList";

const DegreeCard: React.FC<{ degree: DegreeProps }> = ({ degree }) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={degreeCardStyles}>
			<Flip direction='vertical' duration={2000} triggerOnce>
				<Box sx={imgStyles(theme)}>{degree.logo}</Box>
			</Flip>
			<Fade direction='right' duration={2000} triggerOnce>
				<Box sx={cardDegreeSectionStyles}>
					<Box sx={bodyCardStyles(theme)}>
						<Box sx={bodyHeaderStyles(theme)}>
							<Box sx={bodyHeaderTitleStyles}>
								<Typography variant='h4' sx={cardTitleStyles}>
									{degree.title}
								</Typography>
								<Typography variant='h6' sx={durationDesktopStyles}>
									{degree.duration}
								</Typography>
							</Box>
							<Typography variant='h5' sx={cardSubtitleStyles}>
								{degree.subtitle}
							</Typography>
							<Typography variant='h6' sx={durationMobileStyles}>
								{degree.duration}
							</Typography>
						</Box>
						<CustomItemList item={degree} />
					</Box>
					<Link
						href={degree.website_link}
						target='_blank'
						rel='noopener noreferrer'
						sx={buttonLinkStyles}
					>
						<Button
							sx={visitButtonStyles(theme)}
							size='large'
							variant='contained'
						>
							Visit Website
						</Button>
					</Link>
				</Box>
			</Fade>
		</Box>
	);
};

export default DegreeCard;
