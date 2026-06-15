import { ExternalLink, Github } from "../icons";
import ToolCard from "./ToolCard";
import "../../../styles/animations.css";

type props = {
	image?: string;
	title: string;
	description: string;
	stack: string[];
	links: { label: string; url: string }[];
	bg?: "default" | "alt";
};

const isGitHub = (label: string) => label.toLowerCase() === "github";

const ProjectCard = ({ title, description, links, stack, image }: props) => {
	return (
		<div className="p-4 flex flex-col gap-2 break-inside-avoid-column border border-frame/10 mb-4 bg-card/50 backdrop-blur-sm project-card hover:-translate-y-2">
			{image && (
				<img
					src={image}
					alt={`${title}'s thumbnail`}
					loading="lazy"
					decoding="async"
					className="transition-transform duration-300 hover:scale-105"
				/>
			)}
			<h4 className="text-wrap">{title}</h4>
			<div className="flex gap-2 flex-wrap mb-2">
				{stack.map((tool) => (
					<ToolCard title={tool} size="sm" key={tool} />
				))}
			</div>
			<p className="text-sm sm:text-base">{description}</p>
			<div className="flex gap-3 flex-wrap mt-auto pt-3">
				{links.map((link) => {
					const github = isGitHub(link.label);
					return (
						<a
							key={link.url}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 hover:scale-105 ${
								github
									? "border border-frame/30 text-muted-foreground hover:bg-frame/10"
									: "bg-frame text-frame-foreground shadow-sm hover:brightness-110"
							}`}
						>
							{github ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
							<span>{link.label}</span>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectCard;
