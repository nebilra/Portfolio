import coreSkills from "../../data/core-skills.json";
import otherSkills from "../../data/other-skills.json";
import ToolCard from "../common/cards/ToolCard";

export const SkillsSection = () => {
	return (
		<section className="skills-section section">
			<h2 className="mb-2">Skills</h2>
			<p>
				I specialize in full-stack development with modern web technologies and
				have hands-on experience across a wide range of tools and frameworks.
			</p>
			<div className="flex flex-wrap gap-6 md:gap-12 mt-4">
				<div className="flex flex-col gap-2 pt-4">
					<h4>Core Stack/Skills</h4>
					{Object.entries(coreSkills).map(([title, skills], idx) => {
						return (
							<div key={idx} className="flex flex-col gap-2">
								<h6>{title}</h6>
								<div className="flex gap-2 items-start flex-wrap">
									{skills.map((skill) => (
										<ToolCard title={skill} key={skill} />
									))}
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col gap-2 pt-4">
					<h4>Also familiar with</h4>
					{Object.entries(otherSkills).map(([title, skills], idx) => {
						return (
							<div key={idx} className="flex flex-col gap-2">
								<h6>{title}</h6>
								<div className="flex gap-2 items-start flex-wrap">
									{skills.map((skill) => (
										<ToolCard title={skill} key={skill} />
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
