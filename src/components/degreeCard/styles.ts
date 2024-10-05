export const imgStyles = (theme: Record<string, string>) => ({
	maxWidth: "300px",
	height: "auto",
	borderRadius: "50%",
	border: `1px solid ${theme.accentColor}`,
	boxShadow: `0px 0px 5px ${theme.accentColor}`,
	transition: "all 0.2s ease-in-out",
	overflow: "hidden",
	background: "#fff",
	padding: "2px",
	svg: {
		width: "100%",
		height: "100%",
	},
});

export const bodyCardStyles = (theme: Record<string, string>) => ({
	borderBottom: `1px solid ${theme.accentColor}`,
	borderLeft: `1px solid ${theme.accentColor}`,
	borderRight: `1px solid ${theme.accentColor}`,
	borderRadius: "7px",
	boxShadow: `0px 1px 5px ${theme.accentColor}`,
	transition: "all 0.2s ease-in-out",
	":hover": {
		color: "rgba(255, 255, 255, 1)",
		boxShadow: `0 5px 15px ${theme.accentColor}`,
	},
	"@media (max-width: 768px)": {
		width: "100%",
	},
});

export const visitButtonStyles = (theme: Record<string, string>) => ({
	textDecoration: "none",
	color: "rgba(255, 255, 255, 1)",
	padding: "15px 15px",
	borderRadius: "4px",
	width: "200px",
	height: "50px",
	fontWeight: "bold",
	fontFamily: "Google Sans Regular",
	fontSize: "17px",
	transition: "all 0.2s ease-in-out",
	cursor: "pointer",
	border: `1px solid ${theme.accentColor}`,
	":hover": {
		color: "rgba(255, 255, 255, 1)",
		boxShadow: `0px 2px 12px ${theme.accentColor}`,
	},
	float: "right",
	backgroundColor: theme.accentColor,
});

export const cardDegreeSectionStyles = () => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	maxWidth: "700px",
});
