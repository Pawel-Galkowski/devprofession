import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const educationStyles = () => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
});

export const educationsHeaderStyles =
	(localTheme: LocalTheme): SxProps<Theme> =>
	(theme) => ({
		textAlign: "center",
		color: localTheme.text,

		[theme.breakpoints.down("md")]: {
			marginBottom: "2rem",
		},
	});
