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
	menuMobileLinkItemStyles,
	mobileMenuBoxStyles,
	mobileMenuExitIconStyles,
	mobileMenuModalStyles,
	overlayMenuStyles,
	projectsLinkStyles,
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
					<IconButton
						onClick={handleCloseNavMenu}
						sx={mobileMenuExitIconStyles}
					>
						<Close htmlColor='#fff' />
					</IconButton>
					<Link to='/' style={menuMobileLinkItemStyles(theme)}>
						<MenuItem
							sx={[menuItemStyles, homeLinkStyles]}
							onClick={handleCloseNavMenu}
						>
							Home
						</MenuItem>
					</Link>
					<Link to='/education' style={menuMobileLinkItemStyles(theme)}>
						<MenuItem
							sx={[menuItemStyles, educationLinkStyles]}
							onClick={handleCloseNavMenu}
						>
							Education and Certifications
						</MenuItem>
					</Link>
					<Link to='/experience' style={menuMobileLinkItemStyles(theme)}>
						<MenuItem
							sx={[menuItemStyles, experienceLinkStyles]}
							onClick={handleCloseNavMenu}
						>
							Experience
						</MenuItem>
					</Link>
					<Link to='/projects' style={menuMobileLinkItemStyles(theme)}>
						<MenuItem
							sx={[menuItemStyles, projectsLinkStyles]}
							onClick={handleCloseNavMenu}
						>
							Projects
						</MenuItem>
					</Link>
					<Link to='/contact' style={menuMobileLinkItemStyles(theme)}>
						<MenuItem
							sx={[menuItemStyles, contactLinkStyles]}
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
