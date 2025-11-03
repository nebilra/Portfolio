import { ThemeToggle } from "../common/buttons/ThemeToggle";
import { Github, Linkedin, Send } from "../common/icons.ts";
import "./styles/nav.css";

export const Nav = () => {
	return (
		<nav className="nav-container">
			<ul className="flex gap-8">
				<a href="#" className="nav-link">
					<Github className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
				</a>
				<a href="#" className="nav-link">
					<Send className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
				</a>
				<a href="#" className="nav-link">
					<Linkedin className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
				</a>
			</ul>
			<div className="h-6 w-[1px] md:w-0.5 bg-gray-700 dark:bg-gray-50"></div>
			<ThemeToggle />
		</nav>
	);
};
