import { SxProps, Theme, typographyClasses } from "@mui/material";
import { LocalTheme } from "../../theme";

export const experienceCardLocationStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme: Theme) => ({
		margin: "0.5rem 0 0 0",
		textAlign: "right",
		color: localTheme.secondaryText,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const experienceCardDurationStyles =
	(localTheme: LocalTheme) => (theme: Theme) => ({
		textAlign: "right",
		color: localTheme.secondaryText,
		display: "flex",
		flexDirection: "column",

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const experienceCardDescriptionStyles =
	(localTheme: LocalTheme) => (theme: Theme) => ({
		marginRight: "2rem",
		paddingBottom: "0.3rem",
		display: "flex",
		color: localTheme.text,
		flexDirection: "column",

		[theme.breakpoints.down("md")]: {
			marginRight: 0,
		},
	});

export const experienceCardStyles =
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

export const experienceLogStyles = (theme: Theme) => ({
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

export const experienceCardBodyStyles = () => ({
	padding: "0.5rem 0",
	width: "100%",
});

export const experienceCardHeaderStyles = (theme: Theme) => ({
	display: "flex",
	flexDirection: "row",
	paddingBottom: "0.3rem",
	marginRight: "2rem",
	borderBottom: "1px solid red",
	alignItems: "flex-start",
	justifyContent: "space-between",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		justifyContent: "center",
		margin: 0,
		width: "100%",
		[`& .${typographyClasses.root}`]: {
			textAlign: 'center'
		},
	},
});

export const experienceCardInsideHeaderStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		justifyContent: "center",
		[`& .${typographyClasses.root}`]: {
			textAlign: 'center'
		},
	},
});

export const technologiesSectionStyles = () => ({
	padding: "0 0 0 0.5rem",
});

export const experienceCardLogoStyles = () => ({
	width: "70px",
});

export const experienceCardTitleStyles =
	(localTheme: LocalTheme) => (theme: Theme) => ({
		margin: "10px 7px 2px 0",
		textAlign: "left",
		color: localTheme.text,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
			margin: 0
		},
	});

export const experienceCardCompanyStyles = (localTheme: LocalTheme) => ({
	margin: 0,
	textAlign: "left",
	color: localTheme.text, //theme.secondaryText

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

export const experienceCardHeadingLeftStyles: SxProps<Theme> = (theme) => ({
	marginLeft: "0.8rem",
	[theme.breakpoints.down("md")]: {
		width: '100%',
		marginLeft: 0,
		textAlign: "center",
	},
});

export const experienceCardHeadingRightStyles: SxProps<Theme> = (theme) => ({
	"&:has(.experience-card-location)": {
		marginRight: 0,
	},

	[theme.breakpoints.down("md")]: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: '100%',
		marginLeft: 0,
		[`& .${typographyClasses.root}`]: {
			margin: 0,
		},
	},
});
