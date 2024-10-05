import React from "react";
import { Fade } from "react-awesome-reveal";
import { homePage } from "../../data";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ObjectType } from "../../types";
import { footerTextStyles } from "./styles";

const Footer: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);
	const theme = themes[themeState];
	return (
		<Fade direction='up'>
			<p style={{ ...footerTextStyles(theme) }}>
				Made with <FavoriteIcon sx={{ fill: "#FF0000", fontSize: "1.3rem" }} />{" "}
				by {homePage.footer_information}
			</p>
		</Fade>
	);
};

export default Footer;
