import { SxProps, Theme } from "@mui/material";
import { LocalTheme } from "../../theme";

export const projectsPageStyles = (theme: Theme) => ({
	width: "100%",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	gap: "8rem",

	[theme.breakpoints.down("md")]: {
		gap: "2rem",
	},
});

export const projectsDescriptionStyles = {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
};

export const projectsHeadingStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	alignItems: "center",
	"& > *": {
		flex: 1,
	},

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
});

export const projectsHeadingImgStyles = {
	alignItems: "center",
	justifyContent: "center",
	"& > *": {
		maxWidth: "100%",
		height: "auto",
	},
};
export const projectsHeadingTextSectionStyles = {
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
};

export const projectsHeadingTextStyles = (localTheme: LocalTheme) => ({
	color: localTheme.text,
	fontFamily: "Google Sans Medium",
	textAlign: "center",
});

export const projectsHeaderDetailTextStyles = (localTheme: LocalTheme) => ({
	textAlign: "center",
	fontFamily: "Google Sans Medium",
	color: localTheme.secondaryText,
});

export const projectsRepositoryCardStyles: SxProps<Theme> = (theme) => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",

	[theme.breakpoints.down("md")]: {
		marginTop: "2rem",
	},
});

export const buttonStyles = (localTheme: LocalTheme) => ({
	backgroundColor: localTheme.accentBright,
});
