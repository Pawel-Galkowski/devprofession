import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const educationMainStyles = () => ({
	width: "100%",
});

export const basicEducationStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "column",
	gap: "5rem",

	[theme.breakpoints.down("md")]: {
		gap: "3rem",
	},

	[theme.breakpoints.down("sm")]: {
		gap: "3rem",
	},
});

export const headingDivStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	alignItems: "center",
	flexDirection: "row",
	"& > *": {
		flex: 1,
	},

	"& > svg": {
		[theme.breakpoints.down("md")]: {
			width: "80%",
		},

		[theme.breakpoints.down("sm")]: {
			width: "90%",
		},
	},

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
});

export const headingStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "row",
	"& > *": {
		flex: 1,
	},

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",

		"& svg": {
			maxWidth: '90%'
		},
	},
});

export const headingTextStyles = (localTheme: LocalTheme): SxProps<Theme> => ({
	fontFamily: "Google Sans Medium",
	textAlign: "center",
	color: localTheme.text,
});

export const headingSubTextStyles = (
	localTheme: LocalTheme,
): SxProps<Theme> => ({
	fontFamily: "Google Sans Regular",
	textAlign: "center",
	color: localTheme.text,
});

export const educationHeaderDetailTextStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		fontFamily: "Google Sans Medium",
		color: localTheme.secondaryText,
		textAlign: "center",

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});
