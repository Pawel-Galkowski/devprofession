import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const certificationHeaderStyles = (localTheme: LocalTheme) => ({
	fontFamily: "Google Sans Regular",
	textAlign: "center",
	color: localTheme.text,
});

export const certificationStyles = () => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});

export const certificationBodyStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "1rem",
	flexWrap: "wrap",
	flexDirection: "row",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
});
