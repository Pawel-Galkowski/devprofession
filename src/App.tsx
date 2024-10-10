import React from "react";
import Main from "./containers/Main";
import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { ThemeEnum, themes } from "./theme";
import { globalStyles } from "./global";
import { useSelector } from "react-redux";
import { ObjectType } from "./types";

const App: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);

	const theme = themes[themeState ?? "dark"];

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles styles={globalStyles(theme)} />
			<Main />
		</ThemeProvider>
	);
};

export default App;
