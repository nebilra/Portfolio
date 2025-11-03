import experiences from "../../data/experience.json";
import ExperienceCard from "../common/cards/ExperienceCard";

export const ExperienceSection = () => {
	return (
		<section className="experience-section section">
			<h2>Experience</h2>
			<div className="flex gap-4 items-center">
				<div className="flex flex-col mt-2 gap-8 flex-2">
					{experiences.map((experience) => (
						<ExperienceCard
							key={experience.company}
							{...experience}
							from={new Date(experience.from)}
							to={
								experience.to === "Present"
									? experience.to
									: new Date(experience.to)
							}
						/>
					))}
				</div>
				<div className="flex-1 md:flex hidden items-center">
					<img src="/images/experience.png" alt="experience illustration" />
				</div>
			</div>
		</section>
	);
};
