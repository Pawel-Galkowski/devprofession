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

export const headingImgDivStyles = () => ({
	alignItems: "center",
	justifyContent: "center",
	"& > *": {
		maxWidth: "100%",
		height: "auto",
	},
});

export const headingTextDivStyles = () => ({
	textAlign: "center",
});

export const headingTextStyles = (localTheme: LocalTheme): SxProps<Theme> => ({
	fontFamily: "Google Sans Medium",
	lineHeight: 1.1,
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

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});
