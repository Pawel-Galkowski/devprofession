import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const experienceCardLocation =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme: Theme) => ({
		fontFamily: "Google Sans Regular",
		margin: "0.5rem 0 0 0",
		textAlign: "right",
		color: localTheme.secondaryText,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const experienceCardDuration =
	(localTheme: LocalTheme) =>
	(theme: Theme) => ({
		fontFamily: "Google Sans Regular",
		textAlign: "right",
		color: localTheme.secondaryText,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const experienceCard =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		width: "100%",
		marginBottom: "20px",
		borderRadius: "10px",
		display: "flex",
		flexDirection: "row",
		border: `1px solid ${localTheme.accentBright}`,
		backgroundColor: localTheme.avatarMisc,

		[theme.breakpoints.down("lg")]: {
			flexDirection: "column",
		},

		[theme.breakpoints.down("md")]: {
			marginBottom: "10px",
			textAlign: "center",
		},
	});

export const experienceCardLogoDiv = (theme: Theme) => ({
	margin: "10px",
	[theme.breakpoints.down("lg")]: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		maxHeight: "5rem",

		"& svg": {
			maxHeight: "50px",
		},
	},
});

export const experienceCardBodyDiv = () => ({
	padding: '0.5rem 0',
	width: "100%",
});

export const experienceCardHeaderDiv = (theme: Theme) => ({
	display: "flex",
	flexDirection: "row",
	paddingBottom: "0.3rem",
	marginRight: "2rem",
	borderBottom: "1px solid red",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
});

export const experienceCardInsideHeaderDiv = () => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
});

export const technologiesSectionStyles = () => ({
	padding: "0 0 0 0.5rem",
});

export const experienceCardLogo = () => ({
	width: "70px",
});

export const experienceCardTitle =
	(localTheme: LocalTheme) => (theme: Theme) => ({
		fontFamily: "Google Sans Regular",
		marginTop: "10px",
		marginBottom: "2px",
		marginLeft: "0px",
		marginRight: "7px",
		textAlign: "left",
		color: localTheme.text,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const experienceCardCompany = (localTheme: LocalTheme) => ({
	fontFamily: "Google Sans Regular",
	margin: 0,
	textAlign: "left",
	localTheme: localTheme.text, //theme.secondaryText

	"& > a": {
		position: "relative",
		color: "#8c8c8c",
		textDecoration: "none",
		"&:hover": {
			color: "#8c8c8c",
			"&:before": {
				visibility: "visible",
				transform: "scaleX(1)",
			},
		},
		"&:before": {
			content: '""',
			position: "absolute",
			width: "100%",
			height: "1px",
			bottom: 0,
			left: 0,
			backgroundColor: "#8c8c8c",
			visibility: "hidden",
			transform: "scaleX(0)",
			transition: "all 0.3s ease-in-out 0s",
		},
	},
});

export const experienceCardHeadingLeft = () => ({
	float: "left",
	marginLeft: "10px",
	marginRight: "auto",
});

export const experienceCardHeadingRight = (theme: Theme) => ({
	float: "right",
	marginLeft: "auto",
	marginRight: "0.7rem",
	"&:has(.experience-card-location)": {
		marginRight: 0,
	},

	[theme.breakpoints.down("md")]: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export const experienceCardDescription = () => ({
	paddingRight: "0.5rem",
	fontFamily: "Google Sans Regular",
	display: "flex",
	flexDirection: "column",
});
