import { Theme } from "@mui/material";
import { LocalTheme, ThemeEnum } from "../../theme";

export const headerStyles = () => ({
	background: "transparent",
	boxShadow: "none",
	display: "block",
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

export const logoStyles = (localTheme: LocalTheme) => (theme: Theme) => ({
	mr: 2,
	color: localTheme.text,
	textDecoration: "none",
	fontWeight: "bold",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
	},
	"& a": {
		color: localTheme.text,
		textDecoration: "none",
	},
});

export const buttonStyles =
	(themeEnum: ThemeEnum, localTheme: LocalTheme) => (theme: Theme) => ({
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

export const menuItemStyles = () => ({
	borderRadius: 5,
	fontWeight: "bold",
	whiteSpace: "nowrap",
	transition: "all 0.2s ease-in-out",
	padding: 0,
});

export const menuLinkItemStyles = (theme: LocalTheme) => ({
	color: theme.text,
	display: "block",
	padding: "0.8rem 1.6rem",
	textDecoration: "none",
});

export const menuMobileLinkItemStyles = (theme: LocalTheme) => ({
	color: "#fff",
	display: "block",
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

export const desktopMenuStyles = (theme: Theme) => ({
	flexGrow: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	[theme.breakpoints.down("lg")]: {
		display: "none",
	},
});

export const homeLinkStyles = () => ({
	":hover": {
		boxShadow: "0 2px 10px #2ab0ee",
		backgroundColor: "transparent",
		color: "#ffffff",
	},
});
export const educationLinkStyles = () => ({
	":hover": {
		boxShadow: "0 2px 10px #eb6559",
		backgroundColor: "transparent",
		color: "#ffffff",
	},
});
export const experienceLinkStyles = () => ({
	":hover": {
		boxShadow: "0 2px 10px #f7b908",
		backgroundColor: "transparent",
		color: "#ffffff",
	},
});
export const projectsLinkStyles = () => ({
	":hover": {
		boxShadow: "0 2px 10px #e44160",
		backgroundColor: "transparent",
		color: "#ffffff",
	},
});
export const contactLinkStyles = () => ({
	":hover": {
		boxShadow: "0 1px 10px #47a148",
		backgroundColor: "transparent",
		color: "#ffffff",
	},
});

export const mobileMenuExitIconStyles = () => ({
	position: "absolute",
	top: 10,
	right: 10,
	zIndex: 1500,
});
