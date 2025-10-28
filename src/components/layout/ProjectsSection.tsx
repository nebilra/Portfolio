import projects from "../../data/projects.json";
import ProjectCard from "../common/cards/ProjectCard";

export const ProjectsSection = () => {
	return (
		<section className="projects-section section">
			<h2>Projects</h2>
			<div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-4">
				{projects.map((project, idx) => (
					<ProjectCard {...project} key={idx} />
				))}
			</div>
		</section>
	);
};
