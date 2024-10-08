import { Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const projectsPageStyles = (theme: Theme) => ({
	width: "100%",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	gap: "8rem",

	[theme.breakpoints.down("md")]: {
		gap: "2rem",
	},
});

export const projectsDescriptionStyles = {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
};

export const buttonStyles = (localTheme: LocalTheme) => ({
	backgroundColor: localTheme.accentBright,
});
