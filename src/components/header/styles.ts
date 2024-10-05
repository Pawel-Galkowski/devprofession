import { Theme } from "@mui/material";
import { ThemeEnum } from "../../theme";

export const headerStyles = (theme: Theme) => ({
	background: "transparent",
	boxShadow: "none",
	display: "block",
	padding: "20px 10px",
	margin: "0 auto",
});

export const headerLayoutStyles = (theme: Theme) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",

	[theme.breakpoints.up("md")]: {
		display: "flex",
	},

	[theme.breakpoints.down("md")]: {
		textAlign: "center",
	},

	[theme.breakpoints.between("sm", "md")]: {
		fontSize: "12px",
	},
});

export const overlayMenuStyles = () => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
	gap: "0.5rem",
	background: "rgba(0, 0, 0, 0.8)",
	position: "relative",
});

export const logoStyles =
	(localTheme: Record<string, string>) => (theme: Theme) => ({
		mr: 2,
		color: localTheme.text,
		textDecoration: "none",
		fontFamily: "Google Sans Regular",
		fontWeight: "bold",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
		},
		"& a": {
			color: localTheme.text,
			textDecoration: "none",
		},
	});

export const buttonStyle =
	(themeEnum: ThemeEnum, localTheme: Record<string, string>) =>
	(theme: Theme) => ({
		backgroundColor: localTheme.themeBackgroundIcon,
		cursor: "pointer",
		borderRadius: "50%",
		height: "50px",
		width: "50px",
		border: "none",
		alignItems: "center",
		justifyContent: "center",
		outline: "none",
		transition: "all 0.2s ease-in-out",
		display: "flex",
		minWidth: "40px",
		"&:hover": {
			boxShadow: `0 3px 8px ${themeEnum === ThemeEnum.light ? "#F7D774" : "#646464"}`,
		},
		[theme.breakpoints.down("sm")]: {
			height: "40px",
			width: "40px",
			borderRadius: "50%",
		},
	});

export const menuItemStyle = (theme: Record<string, string>) => ({
	borderRadius: 5,
	color: theme.text,
	fontWeight: "bold",
	whiteSpace: "nowrap",
	transition: "all 0.2s ease-in-out",
	padding: 0,
});

export const menuLinkItemStyle = (theme: Record<string, string>) => ({
	fontFamily: "Google Sans Regular",
	color: theme.text,
	display: "block",
	padding: "10px 20px",
	textDecoration: "none",
});

export const menuMobileLinkItemStyle = (theme: Record<string, string>) => ({
	fontFamily: "Google Sans Regular",
	color: "#fff",
	display: "block",
	padding: "10px 20px",
	textDecoration: "none",
});

export const mobileMenuBoxStyles = (theme: Theme) => ({
	flexGrow: 1,
	display: "none",
	[theme.breakpoints.between("xs", "lg")]: {
		display: "flex",
		maxWidth: "50px",
	},
});

export const mobileMenuModalStyles = (theme: Theme) => ({
	display: "none",
	[theme.breakpoints.down("lg")]: {
		display: "block",
	},
});

export const desktopMenuBoxStyles = (theme: Theme) => ({
	flexGrow: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	[theme.breakpoints.down("lg")]: {
		display: "none",
	},
});
