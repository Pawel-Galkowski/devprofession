import { ThemeEnum, themes, ThemeType } from "../../theme";

export const imageStyles = () => ({
	padding: "0.3rem",
	width: "100%",
	height: "150px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#fff",
	"& svg": {
		maxWidth: "100%",
		maxHeight: "100%",
	},
});

export const cardStyles = (themeState: ThemeType) => {
	const revertTheme =
		themes[themeState === ThemeEnum.dark ? ThemeEnum.light : ThemeEnum.dark];
	return {
		maxWidth: 400,
		backgroundColor: "#f9f9f9",
		border: "1px solid gray",
		boxShadow: `6px 6px 12px -4px ${revertTheme.secondaryText}`,
	};
};
