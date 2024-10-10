const lightTheme = {
	name: "light",
	body: "#FFFFFE",
	text: "#343434",
	dark: "#000000",
	secondaryText: "#7F8DAA",
	accentColor: "#E3405F",
	accentBright: "#FC1056",
	projectCard: "#DCE4F2",
	skinColor: "#F7B799",
	skinColor2: "#FCB696",
	imageDark: "#dce4f2",
	imageClothes: "#dce4f2",
	avatarMisc: "#e9ecf2",
	avatarShoes: "#ccd2e3",
	ironElements: "#a19d94",
	numberColor: "#FC1056",
	darkNumberColor: "#E3405F",
	bikeColor: "#1976d2",
	starColor: "#ffc541",
	themeIcon: "#F9D784",
	themeBackgroundIcon: "#7CD1F7",
};

const darkTheme = {
	name: "dark",
	body: "#1D1D1D",
	text: "#FFFFFF",
	dark: "#000000",
	secondaryText: "#8D8D8D",
	accentColor: "#E3405F",
	accentBright: "#FC1056",
	projectCard: "#292A2D",
	skinColor: "#F7B799",
	skinColor2: "#FCB696",
	imageDark: "#292A2D",
	imageClothes: "#000000",
	avatarMisc: "#212121",
	avatarShoes: "#2B2B2B",
	ironElements: "#4c4f55",
	numberColor: "#00826F",
	darkNumberColor: "#00886F",
	bikeColor: "#3216d2",
	starColor: "#ffc541",
	themeIcon: "#A7A7A7",
	themeBackgroundIcon: "#292C3F",
};

export enum ThemeEnum {
	light = "light",
	dark = "dark",
}

export type ThemeType = ThemeEnum.dark | ThemeEnum.light;

export type LocalTheme = typeof darkTheme;

export const themes: Record<ThemeType, LocalTheme> = {
	light: lightTheme,
	dark: darkTheme,
};
