import { SxProps, Theme } from "@mui/material";

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