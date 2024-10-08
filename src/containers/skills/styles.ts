import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const skillsImgSectionStyles =
	(leftAlign: boolean): SxProps<Theme> =>
	(theme) => ({
		display: "flex",
		gap: "4rem",
		alignItems: "center",
		flexDirection: leftAlign ? "row" : "row-reverse",

		"& > *": {
			flex: 1,
		},

		[theme.breakpoints.down("lg")]: {
			flexDirection: "column",
			gap: "1rem",
		},
	});

export const skillsHeaderStyles = (localTheme: LocalTheme) => ({
	textAlign: "center",
	color: localTheme.text,
});

export const skillsTwoLayersLayoutStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "column",
	gap: "5rem",

	[theme.breakpoints.down("lg")]: {
		gap: "3rem",
	},
});

export const skillsTextStyles: SxProps<Theme> = (theme) => ({
	marginTop: "3%",

	[theme.breakpoints.down("lg")]: {
		marginTop: 0,
	},
});

export const skillsImageStyles = () => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"& > *": {
		maxWidth: "100%",
		height: "auto",
	},
});

export const skillsHeadingStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		textAlign: "left",
		marginLeft: '0.4rem',
		color: localTheme.text,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const softwareSkillStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "flex-start",
	justifyContent: "flex-start",
	marginLeft: '0.4rem',
	gap: "0.5rem",

	"& li": {
		width: "auto",
		paddingLeft: 0,
		paddingRight: 0,
		"& > *": {
			maxWidth: "50px",
			height: "40px",
		},
	},

	[theme.breakpoints.down("md")]: {
		justifyContent: "center",
	},
});

export const mainSkillsStyles = () => ({
	width: "100%",
});
