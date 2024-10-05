import { Box } from "@mui/material";
import "./Loader.css";
import React from "react";

export const Loader: React.FC = () => (
	<Box className='logo_wrapper'>
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
