import React from "react";
import { homePage } from "../../data";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ObjectType } from "../../types";
import { footerIconStyles, footerTextStyles } from "./styles";
import { Typography } from "@mui/material";

const Footer: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Typography variant="h5" sx={footerTextStyles(theme)}>
			Made with <FavoriteIcon sx={footerIconStyles} /> by{" "}
			{homePage.footer_information}
		</Typography>
	);
};

export default Footer;
