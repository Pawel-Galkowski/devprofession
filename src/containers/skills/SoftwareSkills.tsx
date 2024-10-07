import React from "react";
import { SkillProps } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { softwareSkillStyles } from "./styles";
import { List, ListItem } from "@mui/material";

const SoftwareSkill: React.FC<{ skills: SkillProps[] }> = ({ skills }) => (
	<List sx={softwareSkillStyles}>
		{skills.map((logo: SkillProps) => (
			<ListItem key={uuidv4()} title={logo.skillName}>
				{logo.image}
			</ListItem>
		))}
	</List>
);

export default SoftwareSkill;
