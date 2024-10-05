export const globalStyles = (theme: Record<string, string>) => ({
	"*, *::before, *::after": {
		boxSizing: "border-box",
	},

	body: {
		alignItems: "center",
		background: theme.body,
		color: theme.text,
		display: "flex",
		fontFamily:
			"BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
		transition: "all 0.25s linear",
	},

	"#root": {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		minHeight: "100vh",
	},
});
