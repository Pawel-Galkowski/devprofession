import { SxProps, Theme } from "@mui/material";

export const socialMediaStyles: SxProps<Theme> = (theme) => ({
	fontSize: "2em",

	[theme.breakpoints.down("md")]: {
		textAlign: "center",
	},
});

export const iconButtonStyles = () => ({
	marginBottom: "10px",
	"& svg": {
		borderRadius: "2.6rem",
		cursor: "pointer",
		display: "inline-block",
		fontSize: "1.3rem",
		height: "2.6rem",
		lineHeight: "2.6rem",
		margin: "0 5px",
		position: "relative",
		textAlign: "center",
		userSelect: "none",
		width: "2.6rem",
		marginBottom: "10px",
		padding: "5px",
	},
});

export const linkedinStyles = () => ({
	"& svg": {
        color: "white",
		backgroundColor: "#0e76a8",
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			color: "rgba(255, 255, 255, 1)",
			boxShadow: "0 5px 15px #0e76a8",
		},
	},
});

export const githubStyles = () => ({
	"& svg": {
        color: "white",
		backgroundColor: "#333",
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			color: "rgba(255, 255, 255, 1)",
			boxShadow: "0 5px 15px #333",
		},
	},
});

export const gmailStyles = () => ({
	"& svg": {
        color: "white",
		backgroundColor: "#ea4335",
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			color: "rgba(255, 255, 255, 1)",
			boxShadow: "0 5px 15px #ea4335",
		},
	},
});
