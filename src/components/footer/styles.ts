import { LocalTheme } from "../../theme";

export const footerTextStyles = (
	theme: LocalTheme,
): React.CSSProperties => ({
	color: theme.secondaryText,
	textAlign: "center",
	fontWeight: "bold",
	fontFamily: "Google Sans Regular",
	marginTop: "1rem",
	padding: "1.5rem 0",
});
