import React from "react";
import { Box, Button } from "@mui/material";
import { NotFoundSVG } from "../../assets/svg/images";
import { notFoundStyles } from "./styles";

export const notFoundPageTestId = "notFoundPage-testId";

const NotFound: React.FC = () => (
	<Box sx={notFoundStyles} data-testid={notFoundPageTestId}>
		<NotFoundSVG />
		Sorry, the page you requested could not be found
		<Button variant='contained' href='/'>
			Back to main page
		</Button>
	</Box>
);

export default NotFound;
