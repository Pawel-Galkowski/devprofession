import { Theme } from "@mui/material";

export const experienceCardLocation =
	(localTheme: Record<string, string>) => (theme: Theme) => ({
		fontFamily: "Google Sans Regular",
		margin: "0.5rem 0 0 0",
		textAlign: "right",
		color: localTheme.secondaryText,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});

export const experienceCardDuration =
	(localTheme: Record<string, string>) => (theme: Theme) => ({
		fontFamily: "Google Sans Regular",
		textAlign: "right",
		color: localTheme.secondaryText,

		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	});
