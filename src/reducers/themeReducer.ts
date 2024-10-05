import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum } from "../theme";

export const themeSlice = createSlice({
	name: "theme",
	initialState: {
		value: ThemeEnum.dark,
	},
	reducers: {
		setDarkTheme: (state) => {
			state.value = ThemeEnum.dark;
		},
		setLightTheme: (state) => {
			state.value = ThemeEnum.light;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
