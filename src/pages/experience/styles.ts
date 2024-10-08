import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const experienceMainStyles: SxProps<Theme> = (theme) => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "5rem",

	[theme.breakpoints.down("md")]: {
		gap: "2rem",
	},
});
