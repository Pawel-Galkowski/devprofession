export const footerTextStyles = (
	theme: Record<string, string>,
): React.CSSProperties => ({
	color: theme.secondaryText,
	textAlign: "center",
	fontWeight: "bold",
	fontFamily: "Google Sans Regular",
	marginTop: "3rem",
	paddingTop: "0.6rem",
	paddingBottom: "0.6rem",
});
