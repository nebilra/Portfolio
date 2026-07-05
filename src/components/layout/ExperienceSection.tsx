import { useRef, useState } from "react";
import experiences from "../../data/experience.jsonc";
import JobTabContent from "../common/cards/JobTabContent";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../Reveal";

type Experience = {
	position: string;
	company: string;
	url?: string;
	from: Date;
	to: Date | "Present";
	description: string[];
	stack: string[];
};

export const ExperienceSection = () => {
	const [activeTab, setActiveTab] = useState(0);
	const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

	type RawExperience = {
		position: string;
		company: string;
		url?: string;
		from: number;
		to: number | "Present";
		description: string[];
		stack: string[];
	};
	const jobs: Experience[] = (experiences as RawExperience[]).map((exp) => ({
		position: exp.position,
		company: exp.company,
		url: exp.url,
		from: new Date(exp.from),
		to: exp.to === "Present" ? "Present" : new Date(exp.to),
		description: exp.description,
		stack: exp.stack,
	}));

	return (
		<section id="experience" className="experience-section section">
			<Reveal>
				<SectionHeader>Experience</SectionHeader>
			</Reveal>
			<Reveal>
				<div className="flex flex-col sm:flex-row gap-0 sm:gap-10">
					<div
						className="flex-2 relative flex sm:flex-col overflow-x-auto sm:overflow-x-visible shrink-0 sm:w-[200px] no-scrollbar border-b sm:border-b-0 sm:border-l-2 border-frame/20"
						role="tablist"
						aria-label="Experience tabs"
					>
						{jobs.map((job, i) => (
							<button
								type="button"
								key={job.company}
								ref={(el) => {
									tabsRef.current[i] = el;
								}}
								onClick={() => setActiveTab(i)}
								onKeyDown={(e) => {
									if (e.key === "ArrowDown" || e.key === "ArrowRight") {
										e.preventDefault();
										const next = (i + 1) % jobs.length;
										setActiveTab(next);
										tabsRef.current[next]?.focus({ preventScroll: true });
									} else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
										e.preventDefault();
										const prev = (i - 1 + jobs.length) % jobs.length;
										setActiveTab(prev);
										tabsRef.current[prev]?.focus({ preventScroll: true });
									}
								}}
								role="tab"
								tabIndex={activeTab === i ? 0 : -1}
								aria-selected={activeTab === i}
								aria-controls={`panel-${i}`}
								id={`tab-${i}`}
								className={`relative z-10 px-3 py-4 sm:py-4 text-left whitespace-nowrap sm:whitespace-normal transition-colors duration-200 text-base sm:text-lg font-quick border-b-2 sm:border-b-0 sm:border-l-2 sm:-ml-[2px] ${
									activeTab === i
										? "border-frame text-frame font-bold"
										: "border-transparent text-muted-foreground hover:text-frame/70 sm:hover:border-frame/50"
								}`}
							>
								{job.company}
							</button>
						))}
					</div>
					<div className="flex-8 pt-6 sm:pt-0 sm:pl-4 min-h-[360px]">
						{jobs.map((job, i) => (
							<div
								key={job.company}
								role="tabpanel"
								id={`panel-${i}`}
								aria-labelledby={`tab-${i}`}
								hidden={activeTab !== i}
							>
								{activeTab === i && (
									<div className="experience-panel-content">
										<JobTabContent
											position={job.position}
											company={job.company}
											url={job.url}
											from={job.from}
											to={job.to}
											description={job.description}
											stack={job.stack}
										/>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</Reveal>
		</section>
	);
};
