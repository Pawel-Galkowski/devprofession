import { Box, MenuItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ObjectType } from "../../types";
import { ThemeEnum, themes } from "../../theme";
import {
	contactLinkStyle,
	desktopMenuBoxStyles,
	educationLinkStyle,
	experienceLinkStyle,
	homeLinkStyle,
	menuItemStyle,
	menuLinkItemStyle,
	projectsLinkStyle,
} from "./styles";
import { Link } from "react-router-dom";

const DesktopMenu: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);

	const theme = themes[themeState];

	return (
		<Box sx={desktopMenuBoxStyles}>
			<MenuItem sx={[menuItemStyle, homeLinkStyle]}>
				<Link to='/' style={menuLinkItemStyle(theme)}>
					Home
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyle, educationLinkStyle]}>
				<Link to='/education' style={menuLinkItemStyle(theme)}>
					Education and Certifications
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyle, experienceLinkStyle]}>
				<Link to='/experience' style={menuLinkItemStyle(theme)}>
					Experience
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyle, projectsLinkStyle]}>
				<Link to='/projects' style={menuLinkItemStyle(theme)}>
					Projects
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyle, contactLinkStyle]}>
				<Link to='/contact' style={menuLinkItemStyle(theme)}>
					Contact and Resume
				</Link>
			</MenuItem>
		</Box>
	);
};

export default DesktopMenu;
