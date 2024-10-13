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

export const desktopMenuTestId = "desktopMenu-testId";

const DesktopMenu: React.FC = () => {
	const themeState: ThemeEnum = useSelector((state: ObjectType) => state.value);

	const theme = themes[themeState];

	return (
		<Box sx={desktopMenuStyles} data-testid={desktopMenuTestId}>
			<MenuItem sx={[menuItemStyles, homeLinkStyles]} component={Link} to='/'>
				<Box style={menuLinkItemStyles(theme)}>Home</Box>
			</MenuItem>
			<MenuItem
				sx={[menuItemStyles, educationLinkStyles]}
				component={Link}
				to='/education'
			>
				<Box style={menuLinkItemStyles(theme)}>
					Education and Certifications
				</Box>
			</MenuItem>
			<MenuItem
				sx={[menuItemStyles, experienceLinkStyles]}
				component={Link}
				to='/experience'
			>
				<Box style={menuLinkItemStyles(theme)}>Experience</Box>
			</MenuItem>
			<MenuItem
				sx={[menuItemStyles, projectsLinkStyles]}
				component={Link}
				to='/projects'
			>
				<Box style={menuLinkItemStyles(theme)}>Projects</Box>
			</MenuItem>
			<MenuItem
				sx={[menuItemStyles, contactLinkStyles]}
				component={Link}
				to='/contact'
			>
				<Box style={menuLinkItemStyles(theme)}>Contact and Resume</Box>
			</MenuItem>
		</Box>
	);
};

export default DesktopMenu;
