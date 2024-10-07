import React from "react";
import "./NotFound.css";
import { Box, Button } from "@mui/material";
import { NotFoundSVG } from "./notFoundSVG";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
	const navigate = useNavigate();

	const onButtonClick = () => {
		navigate("/");
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "10px",
				height: '60vh',
				'& > svg': {
					width: '80%'
				},
				textAlign: 'center'
			}}
		>
			<NotFoundSVG />
			Sorry, the page you requested could not be found
			<Button variant='contained' onClick={onButtonClick}>
				Back to main page
			</Button>
		</Box>
	);
};
