import { AppBar, Toolbar, Container, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu";
import { ObjectType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { homePage } from "../../data";
import { ThemeEnum, themes } from "../../theme";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import {
	buttonStyle,
	headerLayoutStyles,
	headerStyles,
	logoStyles,
} from "./styles";
import { setDarkTheme, setLightTheme } from "../../reducers/themeReducer";
import { Link } from "react-router-dom";

const NewHeader: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.theme.value,
	);

	const dispatch = useDispatch();
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
						component='a'
						sx={logoStyles(theme)}
					>
						<Link to='/'>{homePage.logo_name}</Link>
					</Typography>
					<DesktopMenu />
					<Button sx={buttonStyle(themeState, theme)} onClick={changeTheme}>
						{theme.name === ThemeEnum.dark ? (
							<HiMoon strokeWidth={1} size={20} color={theme.themeIcon} />
						) : (
							<CgSun strokeWidth={1} size={20} color={theme.themeIcon} />
						)}
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NewHeader;
