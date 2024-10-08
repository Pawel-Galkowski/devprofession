import {
	accordionClasses,
	accordionSummaryClasses,
	SxProps,
	Theme,
} from "@mui/material";
import { LocalTheme } from "../../theme";

export const accordionStyles = (theme: LocalTheme) => ({
	background: theme.body,
	color: theme.text,
	border: 0,
	gap: 0,

	"&.MuiPaper-root": {
		"&:hover": {
			opacity: 0.85,
			background: theme.imageDark,
		},
		"&.Mui-expanded": {
			marginTop: "1px",
			marginBottom: "1px",
			"&:first-of-type": {
				marginTop: 0,
			},
			"&:last-of-type": {
				marginBottom: 0,
			},
			"&:hover": {
				opacity: 1,
				background: "transparent",
			},
		},
	},

	"& .MuiAccordionSummary-content": {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
});

export const experienceAccordStyles: SxProps<Theme> = (theme) => ({
	borderRadius: "5px",
	transition: "all 0.2s ease-in-out",
	"&:hover": {
		color: "rgba(255, 255, 255, 1)",
		boxShadow: "0 5px 15px #e2405f",
	},

	[theme.breakpoints.down("md")]: {
		[`& .${accordionClasses.root}`]: {
			border: "0.1rem solid #A7A7A7",
		},
	},
});

export const accordionSummaryStyles: SxProps<Theme> = (theme) => ({
	padding: "0 2rem",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",

	[theme.breakpoints.down("md")]: {
		padding: "0 1.1rem",
		justifyContent: "center",
		textAlign: "center",
		[`& .${accordionSummaryClasses.content}`]: {
			flexDirection: "column",
		},
	},
});
