import { Menu, Close } from "@mui/icons-material";
import { IconButton, Box, MenuItem, Modal } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ObjectType } from "../../types";
import { ThemeEnum, themes } from "../../theme";
import {
	contactLinkStyle,
	educationLinkStyle,
	experienceLinkStyle,
	homeLinkStyle,
	menuItemStyle,
	menuMobileLinkItemStyle,
	mobileMenuBoxStyles,
	mobileMenuExitIconStyle,
	mobileMenuModalStyles,
	overlayMenuStyles,
	projectsLinkStyle,
} from "./styles";
import { Link } from "react-router-dom";

const MobileMenu: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);

	const theme = themes[themeState];

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleOpenNavMenu = useCallback(() => {
		setIsMenuOpen(true);
	}, []);

	const handleCloseNavMenu = useCallback(() => {
		setIsMenuOpen(false);
	}, []);
	return (
		<Box sx={mobileMenuBoxStyles}>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				sx={{
					color: theme.text,
				}}
			>
				<Menu />
			</IconButton>
			<Modal
				open={isMenuOpen}
				onClose={handleCloseNavMenu}
				keepMounted
				disableAutoFocus
				disablePortal
				sx={mobileMenuModalStyles}
			>
				<Box sx={overlayMenuStyles}>
					<IconButton onClick={handleCloseNavMenu} sx={mobileMenuExitIconStyle}>
						<Close htmlColor='#fff' />
					</IconButton>
					<Link to='/' style={menuMobileLinkItemStyle(theme)}>
						<MenuItem
							sx={[menuItemStyle, homeLinkStyle]}
							onClick={handleCloseNavMenu}
						>
							Home
						</MenuItem>
					</Link>
					<Link to='/education' style={menuMobileLinkItemStyle(theme)}>
						<MenuItem
							sx={[menuItemStyle, educationLinkStyle]}
							onClick={handleCloseNavMenu}
						>
							Education and Certifications
						</MenuItem>
					</Link>
					<Link to='/experience' style={menuMobileLinkItemStyle(theme)}>
						<MenuItem
							sx={[menuItemStyle, experienceLinkStyle]}
							onClick={handleCloseNavMenu}
						>
							Experience
						</MenuItem>
					</Link>
					<Link to='/projects' style={menuMobileLinkItemStyle(theme)}>
						<MenuItem
							sx={[menuItemStyle, projectsLinkStyle]}
							onClick={handleCloseNavMenu}
						>
							Projects
						</MenuItem>
					</Link>
					<Link to='/contact' style={menuMobileLinkItemStyle(theme)}>
						<MenuItem
							sx={[menuItemStyle, contactLinkStyle]}
							onClick={handleCloseNavMenu}
						>
							Contact and Resume
						</MenuItem>
					</Link>
				</Box>
			</Modal>
		</Box>
	);
};

export default MobileMenu;
