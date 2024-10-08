import { LocalTheme } from "../../theme";

export const fabStyle = (theme: LocalTheme) => ({
	backgroundColor: theme.themeBackgroundIcon,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

export const arrowStyle = (theme: LocalTheme) => ({
	width: "70%",
	height: "70%",
	fill: theme.themeIcon,
});

export const positionBoxStyle = () => ({
	position: "fixed",
	bottom: 24,
	right: 24,
});
