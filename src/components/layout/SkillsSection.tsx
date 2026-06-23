import coreSkills from "../../data/core-skills.jsonc";
import otherSkills from "../../data/other-skills.jsonc";
import ToolCard from "../common/cards/ToolCard";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../Reveal";

type SkillsData = Record<string, string[]>;

export const SkillsSection = () => {
	const core = coreSkills as SkillsData;
	const other = otherSkills as SkillsData;

	const allCategories = [...new Set([...Object.keys(core), ...Object.keys(other)])];

	return (
		<section id="skills" className="skills-section section">
			<Reveal>
				<SectionHeader>
					<div className="flex justify-between items-center">
						<h2>Skills</h2>
						<Reveal delay={0.12}>
							<div className="skills-legend">
								<span className="skills-legend-item">
									<ToolCard title="" size="md" />
									<span className="skills-legend-label">Proficient</span>
								</span>
								<span className="skills-legend-item">
									<ToolCard title="" bg="alt" size="md" />
									<span className="skills-legend-label">Familiar</span>
								</span>
							</div>
						</Reveal>
					</div>
				</SectionHeader>
			</Reveal>
			<div className="skills-category-grid">
				{allCategories.map((category, i) => {
					const coreList = core[category] || [];
					const otherList = other[category] || [];

					return (
						<Reveal key={category} delay={0.2 + i * 0.05}>
							<div className="skill-category-card">
								<h4 className="skill-category-label">{category}</h4>
								{coreList.length > 0 && (
									<div className="skills-pills">
										{coreList.map((skill) => (
											<ToolCard key={skill} title={skill} size="sm" />
										))}
									</div>
								)}
								{otherList.length > 0 && (
									<div className="skills-pills skills-pills-exploring">
										{otherList.map((skill) => (
											<ToolCard key={skill} title={skill} bg="alt" size="sm" />
										))}
									</div>
								)}
							</div>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
};
