import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const topPageTitleStyles = (localTheme: LocalTheme): SxProps<Theme> => ({
	textAlign: "center",
	color: localTheme.text,
});

export const topPageBodyTextStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		color: localTheme.secondaryText,
		textAlign: "center",

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const topPageSubTitleStyles = (
	localTheme: LocalTheme,
): SxProps<Theme> => ({
	textAlign: "center",
	color: localTheme.text,
});

export const topPageImageStyles: SxProps<Theme> = (theme) => ({
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

export const topPageStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "row",
	gap: "2rem",
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

export const informationBoxStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "column",
	gap: "0.3rem",

	[theme.breakpoints.down("md")]: {
		alignItems: "center",
	},
});
