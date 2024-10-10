import React from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";
import { ThemeEnum, themes } from "../../theme";
import { useSelector } from "react-redux";
import { ObjectType } from "../../types";
import { arrowStyle, fabStyle, positionBoxStyle } from "./styles";

const scrollTopButton: React.FC = () => {
	const themeState: ThemeEnum = useSelector(
		(state: ObjectType) => state.value,
	);

	const theme = themes[themeState];
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector("#back-to-top-anchor");

		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
			});
		}
	}, []);

	return (
		<Fade in={trigger}>
			<Box onClick={handleClick} role='presentation' sx={positionBoxStyle}>
				<Fab size='medium' aria-label='scroll back to top' sx={fabStyle(theme)}>
					<KeyboardArrowUp sx={arrowStyle(theme)} />
				</Fab>
			</Box>
		</Fade>
	);
};

export default scrollTopButton;
