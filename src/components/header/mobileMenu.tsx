import { Menu, Close } from "@mui/icons-material";
import { IconButton, Box, MenuItem, Modal } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ObjectType } from "../../types";
import { ThemeEnum, themes } from "../../theme";
import {
	menuItemStyle,
	menuMobileLinkItemStyle,
	mobileMenuBoxStyles,
	mobileMenuModalStyles,
	overlayMenuStyles,
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
						sx={{ position: "absolute", top: 10, right: 10, zIndex: 1500 }}
					>
						<Close htmlColor='#fff' />
					</IconButton>
					<MenuItem
						className='homei'
						sx={menuItemStyle(theme)}
						onClick={handleCloseNavMenu}
					>
						<Link to='/' style={menuMobileLinkItemStyle(theme)}>
							Home
						</Link>
					</MenuItem>
					<MenuItem
						className='ec'
						sx={menuItemStyle(theme)}
						onClick={handleCloseNavMenu}
					>
						<Link to='/education' style={menuMobileLinkItemStyle(theme)}>
							Education and Certifications
						</Link>
					</MenuItem>
					<MenuItem
						className='xp'
						sx={menuItemStyle(theme)}
						onClick={handleCloseNavMenu}
					>
						<Link to='/experience' style={menuMobileLinkItemStyle(theme)}>
							Experience
						</Link>
					</MenuItem>
					<MenuItem
						className='projects'
						sx={menuItemStyle(theme)}
						onClick={handleCloseNavMenu}
					>
						<Link to='/projects' style={menuMobileLinkItemStyle(theme)}>
							Projects
						</Link>
					</MenuItem>
					<MenuItem
						className='cr'
						sx={menuItemStyle(theme)}
						onClick={handleCloseNavMenu}
					>
						<Link to='/contact' style={menuMobileLinkItemStyle(theme)}>
							Contact and Resume
						</Link>
					</MenuItem>
				</Box>
			</Modal>
		</Box>
	);
};

export default MobileMenu;
