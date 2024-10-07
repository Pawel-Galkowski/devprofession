import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const resumeButtonStyles = (theme: LocalTheme) => ({
	backgroundColor: `${theme.accentBright}`,
	fontFamily: "Google Sans Regular",
	fontWeight: "bold",
});

export const basicContactStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: "5rem",
	margin: "3rem 0",
	"& > *": {
		flex: 1,
	},

	[theme.breakpoints.down("md")]: {
		gap: "2rem",
		margin: 0,
		flexDirection: "column",
	},
});

export const contactHeaderStyles = () => ({
	display: "flex",
	flexDirection: "column",
	textAlign: "center",
	alignItems: "center",
	gap: "0.5rem",
	justifyContent: "center",
});

export const contactTextStyles = (localTheme: LocalTheme) => ({
	fontFamily: "Google Sans Medium",
	textAlign: "center",
	color: localTheme.text,
});

export const contactDetailTextStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		marginTop: 0,
		fontFamily: "Google Sans Medium",
		color: localTheme.secondaryText,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});
