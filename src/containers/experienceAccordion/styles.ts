export const accordionStyles = (theme: Record<string, string>) => ({
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
