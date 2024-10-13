import { Menu, Close } from "@mui/icons-material";
import { IconButton, Box, MenuItem, Modal } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ObjectType } from "../../types";
import { ThemeEnum, themes } from "../../theme";
import {
	contactLinkStyles,
	educationLinkStyles,
	experienceLinkStyles,
	homeLinkStyles,
	menuItemStyles,
	menuLinkItemStyles,
	menuMobileLinkItemStyles,
	mobileMenuBoxStyles,
	mobileMenuExitIconStyles,
	mobileMenuModalStyles,
	overlayMenuStyles,
	projectsLinkStyles,
} from "./styles";
import { Link } from "react-router-dom";

const MobileMenu: React.FC = () => {
	const themeState: ThemeEnum = useSelector((state: ObjectType) => state.value);

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
					<IconButton
						onClick={handleCloseNavMenu}
						sx={mobileMenuExitIconStyles}
					>
						<Close htmlColor='#fff' />
					</IconButton>
					<MenuItem
						sx={[menuItemStyles, homeLinkStyles]}
						onClick={handleCloseNavMenu}
						component={Link}
						to='/'
					>
						<Box style={menuLinkItemStyles(theme)}>Home</Box>
					</MenuItem>
					<MenuItem
						sx={[menuItemStyles, educationLinkStyles]}
						onClick={handleCloseNavMenu}
						component={Link}
						to='/education'
					>
						<Box style={menuLinkItemStyles(theme)}>
							Education and Certifications
						</Box>
					</MenuItem>
					<MenuItem
						sx={[menuItemStyles, experienceLinkStyles]}
						onClick={handleCloseNavMenu}
						component={Link}
						to='/experience'
					>
						<Box style={menuLinkItemStyles(theme)}>Experience</Box>
					</MenuItem>
					<MenuItem
						sx={[menuItemStyles, projectsLinkStyles]}
						onClick={handleCloseNavMenu}
						component={Link}
						to='/projects'
					>
						<Box style={menuLinkItemStyles(theme)}>Projects</Box>
					</MenuItem>
					<MenuItem
						sx={[menuItemStyles, contactLinkStyles]}
						onClick={handleCloseNavMenu}
						component={Link}
						to='/contact'
					>
						<Box style={menuLinkItemStyles(theme)}>Contact and Resume</Box>
					</MenuItem>
				</Box>
			</Modal>
		</Box>
	);
};

export default MobileMenu;
