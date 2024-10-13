import { Box } from "@mui/material";
import "./Loader.css";
import React from "react";

export const loaderTestId = "loader-testId";

const Loader: React.FC = () => (
	<Box className='logo_wrapper' data-testid={loaderTestId}>
		<Box className='loading'>
			<Box className='ball' />
			<Box className='ball' />
			<Box className='ball' />
			<Box className='ball' />
			<Box className='ball' />
			<Box className='ball' />
			<Box className='ball' />
		</Box>
	</Box>
);

export default Loader
