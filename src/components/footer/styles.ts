import { SxProps } from "@mui/material";
import { LocalTheme } from "../../theme";

export const footerIconStyles = () => ({
	fill: "#FF0000",
	fontSize: "1.3rem",
});

export const footerTextStyles = (theme: LocalTheme): SxProps => ({
	color: theme.secondaryText,
	textAlign: "center",
	fontWeight: "bold",
	fontFamily: "Google Sans Regular",
	marginTop: "1rem",
	padding: "1.5rem 0",
});
