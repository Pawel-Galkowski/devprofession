import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const imgStyles = (theme: LocalTheme) => ({
	maxWidth: "300px",
	height: "auto",
	borderRadius: "50%",
	border: `1px solid ${theme.accentColor}`,
	boxShadow: `0px 0px 5px ${theme.accentColor}`,
	transition: "all 0.2s ease-in-out",
	overflow: "hidden",
	background: "#fff",
	padding: "2px",
	"& svg": {
		width: "100%",
		height: "100%",
	},
});

export const bodyCardStyles = (localTheme: LocalTheme) => (theme: Theme) => ({
	borderBottom: `1px solid ${localTheme.accentColor}`,
	borderLeft: `1px solid ${localTheme.accentColor}`,
	borderRight: `1px solid ${localTheme.accentColor}`,
	borderRadius: "7px",
	boxShadow: `0px 1px 5px ${localTheme.accentColor}`,
	transition: "all 0.2s ease-in-out",
	"&:hover": {
		color: "rgba(255, 255, 255, 1)",
		boxShadow: `0 5px 15px ${localTheme.accentColor}`,
	},

	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
});

export const visitButtonStyles = (theme: LocalTheme) => ({
	textDecoration: "none",
	color: "rgba(255, 255, 255, 1)",
	padding: "15px 15px",
	borderRadius: "4px",
	width: "200px",
	height: "50px",
	fontWeight: "bold",
	fontFamily: "Google Sans Regular",
	transition: "all 0.2s ease-in-out",
	cursor: "pointer",
	border: `1px solid ${theme.accentColor}`,
	float: "right",
	backgroundColor: theme.accentColor,
	"&:hover": {
		color: "rgba(255, 255, 255, 1)",
		boxShadow: `0px 2px 12px ${theme.accentColor}`,
	},
});

export const cardDegreeSectionStyles = () => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	maxWidth: "700px",
});

export const degreeCardStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	width: "100%",
	justifyContent: "space-around",
	alignItems: "center",
	gap: "20px",
	flexDirection: "row",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
});

export const cardTitleStyles: SxProps<Theme> = (theme) => ({
	fontFamily: "Google Sans Medium",
	marginLeft: "10px",
	color: "#ffffff",
	flexDirection: "row",
});

export const cardSubtitleStyles: SxProps<Theme> = (theme) => ({
	fontFamily: "Google Sans Medium",
	color: "#ffffff",
	textAlign: "center",
});

export const bodyHeaderStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		display: "flex",
		borderRadius: "7px 7px 0px 0px",
		padding: "10px",
		flexDirection: "column",
		backgroundColor: localTheme.accentColor,

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	});

export const bodyHeaderTitleStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
});

export const durationDesktopStyles: SxProps<Theme> = (theme) => ({
	fontGamily: "Google Sans Regular",
	paddingRight: "10px",
	color: "#ffffff",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
});

export const durationMobileStyles: SxProps<Theme> = (theme) => ({
	fontGamily: "Google Sans Regular",
	color: "#ffffff",
	display: "none",
	textAlign: "center",

	[theme.breakpoints.down("md")]: {
		display: "block",
	},
});

export const buttonLinkStyles = () => ({
	textDecoration: "none",
	textAlign: "center",
});
