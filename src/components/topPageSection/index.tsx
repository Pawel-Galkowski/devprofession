import { Box, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { ObjectType } from "../../types";
import { ThemeEnum, themes } from "../../theme";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
	topPageStyles,
	informationBoxStyles,
	topPageTitleStyles,
	topPageSubTitleStyles,
	topPageImageStyles,
	topPageBodyTextStyles,
} from "./styles";

interface TopPageSectionProps {
	title: string;
	subTitle?: string;
	bodyText?: string;
	image: JSX.Element;
	additionalElements?: JSX.Element[];
}

export const topPageSectionTestId = 'topPageSection-testId'

const TopPageSection: React.FC<TopPageSectionProps> = ({
	title,
	subTitle,
	bodyText,
	image,
	additionalElements,
}) => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);
	const theme = themes[themeState];

	return (
		<Box sx={topPageStyles} data-testid={topPageSectionTestId}>
			<Fade duration={2000} direction='left' triggerOnce>
				<Box sx={topPageImageStyles}>{image}</Box>
			</Fade>
			<Box sx={informationBoxStyles}>
				<Fade duration={2000} direction='right' triggerOnce>
					<Typography sx={topPageTitleStyles(theme)} variant='h2'>
						{title}
					</Typography>

					<Typography variant='h6' sx={topPageSubTitleStyles(theme)}>
						{subTitle}
					</Typography>

					<Typography variant='body1' sx={topPageBodyTextStyles(theme)}>
						{bodyText}
					</Typography>

					{additionalElements?.map((item: JSX.Element) => (
						<Box key={uuidv4()}>{item}</Box>
					))}
				</Fade>
			</Box>
		</Box>
	);
};

export default TopPageSection;
