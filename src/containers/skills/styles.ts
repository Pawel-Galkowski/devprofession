import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const skillsLeftImgSectionStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	gap: "4rem",
	alignItems: "center",
	flexDirection: "row",

	"& > *": {
		flex: 1,
	},

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		gap: "1rem",
	},
});

export const skillsRightImgSectionStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	gap: "4rem",
	alignItems: "center",
	flexDirection: "row",

	"& > *": {
		flex: 1,
	},

	[theme.breakpoints.down("lg")]: {
		flexDirection: "column",
		gap: "1rem",
	},
});

export const skillsHeaderStyles = (localTheme: LocalTheme) => ({
	fontFamily: "Google Sans Regular",
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
	fontFamily: "Google Sans Regular",

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
		fontFamily: "Google Sans Regular",
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
