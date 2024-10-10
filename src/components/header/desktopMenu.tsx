import { Box, MenuItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ObjectType } from "../../types";
import { ThemeEnum, themes } from "../../theme";
import {
	contactLinkStyles,
	desktopMenuStyles,
	educationLinkStyles,
	experienceLinkStyles,
	homeLinkStyles,
	menuItemStyles,
	menuLinkItemStyles,
	projectsLinkStyles,
} from "./styles";
import { Link } from "react-router-dom";

const DesktopMenu: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);

	const theme = themes[themeState];

	return (
		<Box sx={desktopMenuStyles}>
			<MenuItem sx={[menuItemStyles, homeLinkStyles]}>
				<Link to='/' style={menuLinkItemStyles(theme)}>
					Home
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyles, educationLinkStyles]}>
				<Link to='/education' style={menuLinkItemStyles(theme)}>
					Education and Certifications
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyles, experienceLinkStyles]}>
				<Link to='/experience' style={menuLinkItemStyles(theme)}>
					Experience
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyles, projectsLinkStyles]}>
				<Link to='/projects' style={menuLinkItemStyles(theme)}>
					Projects
				</Link>
			</MenuItem>
			<MenuItem sx={[menuItemStyles, contactLinkStyles]}>
				<Link to='/contact' style={menuLinkItemStyles(theme)}>
					Contact and Resume
				</Link>
			</MenuItem>
		</Box>
	);
};

export default DesktopMenu;
