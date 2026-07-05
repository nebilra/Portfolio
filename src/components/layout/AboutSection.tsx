import { Blocks, FileText } from "../common/icons";
import { Reveal } from "../Reveal";

export const AboutSection = () => {
	return (
		<section id="about" className="about-section section">
			<Reveal>
				<div className="about-text">
					<p>
						I build full stack web applications, mainly in the TypeScript ecosystem. I started my
						programming journey with HTML, CSS, and JavaScript, but I kept digging past the browser
						because I wanted to understand how things worked underneath. That curiosity led me into
						Linux, development tooling, and the systems behind the applications I was building. I
						enjoy learning new technologies when a project calls for them and turning ideas into
						working products.
					</p>
					<p className="mt-4">
						I've worked on client projects ranging from an AI platform to an e-learning system,
						along with other web applications built for real users. I care about shipping software
						that solves actual problems while continuing to improve how I design, build, and
						maintain it. Whether it's joining a product team full time or helping bring a client's
						idea to life, I'm always looking for opportunities to build something useful.
					</p>
				</div>
			</Reveal>
			<div className="flex gap-4 mt-4">
				<Reveal delay={0.15}>
					<a
						href="https://github.com/nebilra/resume/releases/latest/download/resume.pdf"
						download
						className="btn inline-flex gap-2 items-center justify-center"
					>
						<FileText className="w-4 h-4" /> <span>Download Resume</span>
					</a>
				</Reveal>
				<Reveal delay={0.15}>
					<a
						href="#projects"
						className="btn-secondary inline-flex gap-2 items-center justify-center"
					>
						<Blocks className="w-4 h-4" />
						<span>Projects</span>
					</a>
				</Reveal>
			</div>
		</section>
	);
};
