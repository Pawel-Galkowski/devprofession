import { Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const projectCardStyles = (theme: LocalTheme) => ({
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

export const projectInformationSectionStyles = (theme: LocalTheme) => ({
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

export const actionButonsSectionStyles = (theme: Theme) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",

	[theme.breakpoints.up("md")]: {
		justifyContent: "flex-start",
		gap: "1rem",
	},
});

export const repositoryNameStyles = (localTheme: LocalTheme) => ({
	textOverflow: "ellipsis",
	color: localTheme.text,
});

export const repositoryDescriptionStyles =
	(localTheme: LocalTheme) => (theme: Theme) => ({
		wordWrap: "break-word",
		textAlign: "left",
		display: "-webkit-box",
		color: localTheme.text,
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: 5,
		overflow: "hidden",
		textOverflow: "ellipsis",

		[theme.breakpoints.down("md")]: {
			textAlign: "justify",
			WebkitLineClamp: 7,
		},
	});

export const languagesIconsStyles = () => ({
	listStyles: "none",
	display: "flex",
	flexDirection: "row",
	gap: "0.5rem",
	"& li > *": {
		maxWidth: "50px",
		height: "100%",
		display: "block",
	},
});

export const repositoryDetailsStyles = () => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "flex-start",
	gap: "0.5rem",
});
