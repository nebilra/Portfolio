export const AboutSection = () => {
	return (
		<section className="about-section section">
			<h2>About me</h2>
			<div className="flex gap-4">
				<div className="flex-2 flex flex-col gap-4">
					<p className="text-sm sm:text-lg md:text-xl">
						I am a web developer currently pursuing my degree in Software
						Engineering at Adama Science and Technology University. I am
						passionate about creating beautiful and functional websites that
						provide an enjoyable user experience
					</p>
					<p className="text-sm sm:text-lg md:text-xl">
						I am a web developer currently pursuing my degree in Software
						Engineering at Adama Science and Technology University. I am
						passionate about creating beautiful and functional websites that
						provide an enjoyable user experience
					</p>
					<p className="text-sm sm:text-lg md:text-xl">
						I am a web developer currently pursuing my degree in Software
						Engineering at Adama Science and Technology University. I am
						passionate about creating beautiful and functional websites that
						provide an enjoyable user experience
					</p>
				</div>
				<div className="flex-1 md:flex hidden items-center">
					<img
						src="/images/programming-1.png"
						alt="Programming illustration"
						className="flex-1"
					/>
				</div>
			</div>
		</section>
	);
};
