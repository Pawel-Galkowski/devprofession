import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const contactButtonStyles = (theme: LocalTheme) => ({
	backgroundColor: `${theme.accentBright}`,
	fontWeight: "bold",
	fontFamily: "Google Sans Regular",
});

export const homePageStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "3rem",
});

export const homePageHeaderStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "2rem",
	"& > *": {
		flex: 1,
	},

	[theme.breakpoints.down("md")]: {
		flexDirection: "column-reverse",
	},
});

export const greetingHeadingStyles: SxProps<Theme> = (theme) => ({
	fontFamily: "Google Sans Bold",

	[theme.breakpoints.down("md")]: {
		textAlign: "center",
	},
});

export const greetingTextStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		fontFamily: "Google Sans Medium",
		color: localTheme.secondaryText,
		maxWidth: "90%",

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
			maxWidth: "100%",
		},
	});

export const greetingImageStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	"& svg": {
		height: "auto",

		[theme.breakpoints.down("md")]: {
			maxWidth: "80%",
		},
	},
});

export const informationBoxStyles: SxProps = () => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flexStart",
	gap: "0.3rem",
});

export const contactButtonBoxStyles: SxProps<Theme> = (theme) => ({
	[theme.breakpoints.down("md")]: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
	},
});
