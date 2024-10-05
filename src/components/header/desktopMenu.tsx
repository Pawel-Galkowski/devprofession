import { Box, MenuItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ObjectType } from "../../types";
import { ThemeEnum, themes } from "../../theme";
import {
	desktopMenuBoxStyles,
	menuItemStyle,
	menuLinkItemStyle,
} from "./styles";
import { Link } from "react-router-dom";

const DesktopMenu: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);

	const theme = themes[themeState];

	return (
		<Box sx={desktopMenuBoxStyles}>
			<MenuItem className='homei' sx={menuItemStyle(theme)}>
				<Link to='/' style={menuLinkItemStyle(theme)}>
					Home
				</Link>
			</MenuItem>
			<MenuItem className='ec' sx={menuItemStyle(theme)}>
				<Link to='/education' style={menuLinkItemStyle(theme)}>
					Education and Certifications
				</Link>
			</MenuItem>
			<MenuItem className='xp' href='/experience' sx={menuItemStyle(theme)}>
				<Link to='/experience' style={menuLinkItemStyle(theme)}>
					Experience
				</Link>
			</MenuItem>
			<MenuItem className='projects' sx={menuItemStyle(theme)}>
				<Link to='/projects' style={menuLinkItemStyle(theme)}>
					Projects
				</Link>
			</MenuItem>
			<MenuItem className='cr' sx={menuItemStyle(theme)}>
				<Link to='/contact' style={menuLinkItemStyle(theme)}>
					Contact and Resume
				</Link>
			</MenuItem>
		</Box>
	);
};

export default DesktopMenu;
