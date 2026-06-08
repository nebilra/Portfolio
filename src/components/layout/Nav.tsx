import { ThemeToggle } from "../common/buttons/ThemeToggle";
import { Github, Linkedin, Send } from "../common/icons.ts";
import "./styles/nav.css";

// const links = [
// 	{ label: "About", href: "#about" },
// 	{ label: "Skills", href: "#skills" },
// 	{ label: "Experience", href: "#experience" },
// 	{ label: "Projects", href: "#projects" },
// 	{ label: "Contact", href: "#contact" },
// ];

export const Nav = () => {
	return (
		<div className="nav-wrapper">
			<nav className="nav-container">
				<ul className="flex gap-4 md:gap-6">
					<a
						href="https://github.com/Patrix726"
						target="_blank"
						rel="noopener noreferrer"
						className="nav-icon"
					>
						<Github className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
					</a>
					<a href="#contact" className="nav-icon">
						<Send className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
					</a>
					<a
						href="https://linkedin.com/in/nebilrahmeto"
						target="_blank"
						rel="noopener noreferrer"
						className="nav-icon"
					>
						<Linkedin className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
					</a>
				</ul>
				<div className="h-6 w-[1px] md:w-0.5 bg-frame-foreground/30"></div>
				<ThemeToggle />
			</nav>
		</div>
	);
};
