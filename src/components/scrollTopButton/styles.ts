export const fabStyle = (theme: Record<string, string>) => ({
	backgroundColor: theme.themeBackgroundIcon,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

export const arrowStyle = (theme: Record<string, string>) => ({
	width: "70%",
	height: "70%",
	fill: theme.themeIcon,
});

export const positionBoxStyle = (theme: Record<string, string>) => ({
	position: "fixed",
	bottom: 24,
	right: 24,
});
