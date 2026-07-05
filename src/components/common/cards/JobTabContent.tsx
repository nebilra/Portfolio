import ToolCard from "./ToolCard";

type Props = {
	position: string;
	company: string;
	url?: string;
	from: Date;
	to: Date | "Present";
	description: string[];
	stack: string[];
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const JobTabContent = ({ position, company, url, from, to, description, stack }: Props) => {
	let duration: string;
	if (to === "Present") {
		duration = `${months[from.getMonth()]} ${from.getFullYear()} - Present`;
	} else if (from.getFullYear() !== to.getFullYear()) {
		duration = `${months[from.getMonth()]} ${from.getFullYear()} - ${months[to.getMonth()]} ${to.getFullYear()}`;
	} else {
		duration = `${months[from.getMonth()]} - ${months[to.getMonth()]} ${to.getFullYear()}`;
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-1">
				<h3 className="!text-2xl sm:!text-3xl">
					{position}{" "}
					<span className="text-base sm:text-lg md:text-xl font-light inline-block italic">
						@{" "}
						{url ? (
							<a
								href={url}
								target="_blank"
								rel="noreferrer"
								className="hover:underline underline-offset-4 decoration-1 text-frame hover:text-frame/60 transition-colors duration-200"
							>
								{company}
							</a>
						) : (
							company
						)}
					</span>
				</h3>
				<p className="text-sm sm:text-base text-muted-foreground font-quick">{duration}</p>
			</div>
			<ul className="flex flex-col gap-3 pl-5 text-muted-foreground">
				{description.map((point) => (
					<li key={point} className="text-base sm:text-lg leading-relaxed list-disc">
						{point}
					</li>
				))}
			</ul>
			<div className="flex gap-3 flex-wrap">
				{stack.map((tool) => (
					<ToolCard title={tool} bg="alt" key={tool} size="md" />
				))}
			</div>
		</div>
	);
};

export default JobTabContent;
