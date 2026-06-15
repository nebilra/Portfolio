import { type ReactNode, useEffect, useRef, useState } from "react";

type Props = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(el);
				}
			},
			{ rootMargin: "-80px" },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`${className ?? ""} reveal${visible ? " visible" : ""}`}
			style={{ animationDelay: `${delay}s` }}
		>
			{children}
		</div>
	);
};
