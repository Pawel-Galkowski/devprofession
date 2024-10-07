import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Box, Link, Typography } from "@mui/material";
import { DegreeProps, ObjectType } from "../../types";
import {
	visitButtonStyles,
	bodyCardStyles,
	imgStyles,
	cardDegreeSectionStyles,
} from "./styles";

const DegreeCard: React.FC<{ degree: DegreeProps }> = ({ degree }) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];

	return (
		<Box className='degree-card'>
			<Flip direction='vertical' duration={2000} triggerOnce>
				<Box sx={imgStyles(theme)}>{degree.logo}</Box>
			</Flip>
			<Fade direction='right' duration={2000} triggerOnce>
				<Box sx={cardDegreeSectionStyles}>
					<Box sx={bodyCardStyles(theme)}>
						<Box
							className='body-header'
							style={{ backgroundColor: theme.accentColor }}
						>
							<Box className='body-header-title'>
								<h2 className='card-title'>{degree.title}</h2>
								<h3 className='card-subtitle'>{degree.subtitle}</h3>
							</Box>
							<Box className='body-header-duration'>
								<h3 className='duration'>{degree.duration}</h3>
							</Box>
						</Box>
						<ul className='custom-list-style'>
							{degree.descriptions.map((sentence: string) => (
								<li
									className='content-list'
									style={{ color: theme.text }}
									key={sentence}
								>
									{sentence}
								</li>
							))}
						</ul>
					</Box>
					<Link
						href={degree.website_link}
						target='_blank'
						rel='noopener noreferrer'
						style={{ textDecoration: "none", textAlign: "center" }}
					>
						<Typography sx={visitButtonStyles(theme)} variant='body2'>
							Visit Website
						</Typography>
					</Link>
				</Box>
			</Fade>
		</Box>
	);
};

export default DegreeCard;
