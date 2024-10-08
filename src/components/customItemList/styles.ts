import { SxProps } from "@mui/material";
import { LocalTheme } from "../../theme";
import { Theme } from "@mui/system";

export const itemListStyles = (localTheme: LocalTheme) => ({
	color: localTheme.secondaryText,
	padding: 0,
});

export const itemListIconStyles = () => ({
	minWidth: "auto",
	color: "orange",
});

export const itemListTextStyles = () => ({
	marginTop: "0.4rem",
});

export const customListStyles: SxProps<Theme> = (theme) => ({
	margin: '0.4rem'
});
