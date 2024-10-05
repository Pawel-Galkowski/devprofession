import { Theme } from "@mui/material";

export const projectCardStyle = (theme: Record<string, string>) => ({
	color: "rgb(88, 96, 105)",
	boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
	padding: "2rem",
	cursor: "pointer",
	borderRadius: "5px",
	height: "100%",
	transition: "all 0.2s ease-in-out",
	backgroundColor: theme.projectCard,
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
	":hover": {
		boxShadow: `${theme.imageDark} 0 2px 15px`,
	},
});

export const projectInformationSectionStyle = (
	theme: Record<string, string>,
) => ({
	display: "flex",
	alignItem: "flex-start",
	flexDirection: "column",
	justifyContent: "flex-start",
	gap: "1rem",
	"& > *": {
		fontWeight: "bold",
		color: theme.text,
	},
});

export const actionButonsSectionStyle = (theme: Theme) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",

	[theme.breakpoints.up("md")]: {
		justifyContent: "flex-start",
		gap: "1rem",
	},
});
