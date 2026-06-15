import "../../styles/animations.css";
import "./styles/sections.css";

export const HeroSection = () => {
	return (
		<section id="hero" className="hero-section section">
			<div className="hero-inner">
				<div className="hero-photo hero-scale-in">
					<div className="hero-photo-clip">
						<picture>
							<source srcSet="/images/headshot.webp" type="image/webp" />
							<img
								src="/images/headshot.png"
								alt="Nebil Rahmeto"
								fetchPriority="high"
								width={150}
								height={160}
							/>
						</picture>
					</div>
				</div>
				<div className="hero-text">
					<p className="hero-fade-in-left" style={{ animationDelay: "0.2s" }}>
						Hi, I'm
					</p>
					<h1 className="hero-fade-in-left" style={{ animationDelay: "0.2s" }}>
						<span className="bg-gradient-to-r from-frame via-[#6c757d] to-[#adb5bd] dark:from-frame dark:via-[#ced4da] dark:to-[#dee2e6] bg-clip-text text-transparent hidden sm:flex">
							Nebil Rahmeto
						</span>
						<span className="bg-gradient-to-r from-frame via-[#6c757d] to-[#adb5bd] dark:from-frame dark:via-[#ced4da] dark:to-[#dee2e6] bg-clip-text text-transparent flex sm:hidden">
							Nebil
						</span>
					</h1>
					<h5 className="hero-fade-in" style={{ animationDelay: "0.5s" }}>
						I build things for the web
					</h5>
				</div>
			</div>
		</section>
	);
};
