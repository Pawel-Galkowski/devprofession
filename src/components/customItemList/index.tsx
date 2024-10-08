import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ObjectType } from "../../types";
import { useSelector } from "react-redux";
import { ThemeEnum, themes } from "../../theme";
import {
	itemListStyles,
	itemListIconStyles,
	itemListTextStyles,
	customListStyles,
} from "./styles";

export const customItemListTestId = "customItemList-testId";

const CustomItemList: React.FC<{
	item: {
		descriptions: string[];
	};
}> = ({ item }) => {
	const themeState: ThemeEnum = useSelector((state: ObjectType) => state.value);
	const theme = themes[themeState];
	return (
		<List sx={customListStyles} data-testid={customItemListTestId}>
			{item.descriptions.map((skillSentence: string) => (
				<ListItem
					style={itemListStyles(theme)}
					key={uuidv4()}
					alignItems='flex-start'
				>
					<ListItemIcon sx={itemListIconStyles}>⚡</ListItemIcon>
					<ListItemText primary={skillSentence} sx={itemListTextStyles} />
				</ListItem>
			))}
		</List>
	);
};

export default CustomItemList;
