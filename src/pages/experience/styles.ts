import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import { LocalTheme } from "../../theme";

export const experienceMainStyles: SxProps<Theme> = (theme) => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "5rem",

	[theme.breakpoints.down("md")]: {
		gap: "2rem",
	},
});

export const experienceHeaderStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",

	"& > *": {
		flex: 1,
	},

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
});

export const experienceHeadingImgStyles = () => ({
	alignItems: "center",
	justifyContent: "center",
	"& > *": {
		maxWidth: "100%",
		height: "auto",
	},
});

export const experienceHeadingStyles = () => ({
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export const experienceHeadingTextStyles = (localTheme: LocalTheme) => ({
	fontFamily: "Google Sans Medium",
	textAlign: "center",
	color: localTheme.text,
});

export const experienceHeadingSubTextStyles = (localTheme: LocalTheme) => ({
	fontFamily: "Google Sans Regular",
	textAlign: "center",
	marginBottom: "10px",
	color: localTheme.text,
});
export const experienceHeaderDetailTextStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		fontFamily: "Google Sans Medium",
		color: localTheme.secondaryText,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});
