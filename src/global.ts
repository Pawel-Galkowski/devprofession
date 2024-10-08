export const globalStyles = (theme: Record<string, string>) => ({
	"*, *::before, *::after": {
		boxSizing: "border-box",
	},

	body: {
		alignItems: "center",
		background: theme.body,
		color: theme.text,
		display: "flex",
		fontFamily: "Google Sans Regular",
		transition: "all 0.25s linear",
		margin: 0,
	},

	html: {
		scrollBehavior: "smooth",
		overflowY: "scroll",
		overflowX: "hidden",
	},

	"#root": {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		minHeight: "100vh",
	},

	"::-webkit-scrollbar": {
		width: "10px",
	},

	"::-webkit-scrollbar-thumb": {
		background: "#e3405f",
		borderRadius: "5px",
	},
	"::-webkit-scrollbar-thumb:hover": {
		background: "#e3405f",
	},
});
