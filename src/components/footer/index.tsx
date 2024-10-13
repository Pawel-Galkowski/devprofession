import React from "react";
import { homePage } from "../../data";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import { Favorite } from "@mui/icons-material";
import { ObjectType } from "../../types";
import { footerIconStyles, footerTextStyles } from "./styles";
import { Typography } from "@mui/material";

export const footerTestId = "footer-testId";
export const footerIconTestId = "footerIcon-testId";

const Footer: React.FC = () => {
	const themeState: ThemeEnum = useSelector((state: ObjectType) => state.value);
	const theme = themes[themeState];
	return (
		<Typography
			variant='h5'
			sx={footerTextStyles(theme)}
			data-testid={footerTestId}
		>
			Made with{" "}
			<Favorite sx={footerIconStyles} data-testid={footerIconTestId} /> by{" "}
			{homePage.footer_information}
		</Typography>
	);
};

export default Footer;
