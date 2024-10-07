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
		fontFamily: "Google Sans Regular",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
});

export const experienceAccordStyles = () => ({
	borderRadius: "5px",
	transition: "all 0.2s ease-in-out",
	"&:hover": {
		color: "rgba(255, 255, 255, 1)",
		boxShadow: "0 5px 15px #e2405f",
	},
});

export const accordionTitleStyles = () => ({
	paddingLeft: "0.5rem"
});

	
export const accordionDurationStyles = () => ({
	paddingRight: "2rem"
});
