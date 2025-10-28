type props = {
	title: string;
	bg?: "default" | "alt";
	size?: "sm" | "md" | "lg";
};

const sizes = {
	sm: "py-1 px-2 text-xs rounded",
	md: "py-2 px-4 rounded-lg",
	lg: "py-3 px-6 text-lg rounded-lg",
};
const ToolCard = ({ title, bg = "default", size = "md" }: props) => {
	return (
		<div
			className={`${sizes[size]} ${bg === "default" ? "bg-frame" : "bg-main-background"} `}
		>
			<p>{title}</p>
		</div>
	);
};

export default ToolCard;
