import React from "react";
import "./SoftwareSkill.css";
import { SkillProps } from "../../types";
import { v4 as uuidv4 } from "uuid";

const SoftwareSkill: React.FC<{ skills: SkillProps[] }> = ({ skills }) => (
	<ul className='dev-icons'>
		{skills.map((logo: SkillProps) => (
			<li key={uuidv4()} title={logo.skillName}>
				{logo.image}
			</li>
		))}
	</ul>
);

export default SoftwareSkill;
