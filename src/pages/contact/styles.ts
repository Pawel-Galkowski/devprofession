import { LocalTheme } from "../../theme";

export const resumeButtonStyles = (theme: LocalTheme) => ({
	backgroundColor: `${theme.accentBright}`,
	fontWeight: "bold",
});

export const additionalInformationStyles = () => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: '100%',
	flexDirection: 'column'
})