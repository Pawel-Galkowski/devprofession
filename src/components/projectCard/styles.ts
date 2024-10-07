import { Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const projectCardStyle = (theme: LocalTheme) => ({
	color: "rgb(88, 96, 105)",
	boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
	padding: "2rem",
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
	theme: LocalTheme,
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

export const repositoryNameStyle = (localTheme: LocalTheme) => ({
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	fontFamily: "Google Sans Regular",
	color: localTheme.text
});

export const repositoryDescriptionStyle = (localTheme: LocalTheme) => ({
	wordWrap: "break-word",
	textAlign: "left",
	display: "-webkit-box",
	fontFamily: "Google Sans Regular",
	color: localTheme.text,
	lineClamp: 4,
	boxOrient: "vertical",
});

export const languagesIconsStyle = () => ({
	listStyle: "none",
	display: "flex",
	flexDirection: "row",
	gap: "0.5rem",
	"& li > *": {
		maxWidth: "50px",
		height: "100%",
		display: "block",
	},
});

export const repositoryDetailsStyle = () => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "flex-start",
	gap: "0.5rem",
});
