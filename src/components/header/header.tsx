import { AppBar, Toolbar, Container, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu";
import { ObjectType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { homePage } from "../../data";
import { ThemeEnum, themes } from "../../theme";
import { LightMode, DarkMode } from "@mui/icons-material";
import {
	buttonStyles,
	headerLayoutStyles,
	headerStyles,
	logoStyles,
} from "./styles";
import { setDarkTheme, setLightTheme } from "../../reducers/themeReducer";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../store";

const NewHeader: React.FC = () => {
	const themeState: ThemeEnum = useSelector((state: ObjectType) => state.value);

	const dispatch: AppDispatch = useDispatch();
	const theme = themes[themeState];

	const changeTheme = useCallback(() => {
		dispatch(themeState === ThemeEnum.light ? setDarkTheme() : setLightTheme());
	}, [dispatch, themeState]);

	return (
		<AppBar position='static' sx={headerStyles} id='back-to-top-anchor'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters sx={headerLayoutStyles}>
					<MobileMenu />
					<Typography
						variant='h4'
						noWrap
						component={Link}
						sx={logoStyles(theme)}
						to='/'
					>
						{homePage.logo_name}
					</Typography>
					<DesktopMenu />
					<Button sx={buttonStyles(themeState, theme)} onClick={changeTheme}>
						{theme.name === ThemeEnum.dark ? (
							<DarkMode strokeWidth={1} htmlColor={theme.themeIcon} />
						) : (
							<LightMode strokeWidth={1} htmlColor={theme.themeIcon} />
						)}
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NewHeader;
