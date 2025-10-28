import ToolCard from "./ToolCard";

type props = {
	image?: string;
	title: string;
	description: string;
	stack: string[];
	links: { label: string; url: string }[];
	bg?: "default" | "alt";
};

const ProjectCard = ({ title, description, links, stack, image }: props) => {
	return (
		<div
			className={`p-4 rounded-lg flex flex-col gap-2 break-inside-avoid-column border border-gray-700 dark:border-white mb-4`}
		>
			{image && <img src={image} alt={`${title}'s thumbnail`} />}
			<h4 className="text-wrap">{title}</h4>
			<div className="flex gap-2 flex-wrap mb-2">
				{stack.map((tool) => (
					<ToolCard title={tool} size="sm" key={tool} />
				))}
			</div>
			<p>{description}</p>
			<div className="flex gap-2 flex-wrap mt-2">
				{links.map((link) => (
					<a
						href={link.url}
						className="border border-frame px-3 py-1.5 rounded hover:bg-frame "
						key={link.url}
					>
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
