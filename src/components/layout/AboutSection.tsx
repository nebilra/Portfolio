import { FileText } from "../common/icons";
import { Reveal } from "../Reveal";

export const AboutSection = () => {
	return (
		<section id="about" className="about-section section">
			<Reveal>
				<div className="about-text">
					<p>
						I am a web developer pursuing my degree in Software Engineering at Adama Science and
						Technology University. I specialize in full-stack development with modern
						JavaScript/TypeScript ecosystems, from crafting pixel-perfect UIs with React to
						designing robust APIs with Node.js. I enjoy solving real-world problems through
						technology and contributing to open-source projects.
					</p>
				</div>
			</Reveal>
			<Reveal delay={0.15}>
				<a
					href="https://github.com/nebilra/resume/releases/latest/download/resume.pdf"
					download
					className="btn inline-flex gap-2 items-center justify-center mt-4"
				>
					<FileText className="w-4 h-4" /> <span>Download Resume</span>
				</a>
			</Reveal>
		</section>
	);
};
