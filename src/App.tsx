import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { AboutSection } from "./components/layout/AboutSection";
import { HeroSection } from "./components/layout/HeroSection";
import { Nav } from "./components/layout/Nav";

const ContactSection = lazy(() =>
	import("./components/layout/ContactSection").then((m) => ({ default: m.ContactSection })),
);
const ExperienceSection = lazy(() =>
	import("./components/layout/ExperienceSection").then((m) => ({ default: m.ExperienceSection })),
);
const ProjectsSection = lazy(() =>
	import("./components/layout/ProjectsSection").then((m) => ({ default: m.ProjectsSection })),
);

function App() {
	return (
		<div className="overflow-x-hidden">
			<div className="bg-pattern" />
			<Toaster />
			<Nav />
			<main className="main-container">
				<HeroSection />
				<AboutSection />
				<Suspense fallback={null}>
					<ExperienceSection />
					<ProjectsSection />
					<ContactSection />
				</Suspense>
			</main>
		</div>
	);
}

export default App;
