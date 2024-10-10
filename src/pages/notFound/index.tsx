import React, { useCallback } from "react";
import { Box, Button } from "@mui/material";
import { NotFoundSVG } from "../../assets/svg/images";
import { useNavigate } from "react-router-dom";
import { notFoundStyles } from "./styles";

export const NotFound: React.FC = () => {
	const navigate = useNavigate();

	const onButtonClick = useCallback(() => {
		navigate("/");
	}, [navigate]);

	return (
		<Box sx={notFoundStyles}>
			<NotFoundSVG />
			Sorry, the page you requested could not be found
			<Button variant='contained' onClick={onButtonClick}>
				Back to main page
			</Button>
		</Box>
	);
};
