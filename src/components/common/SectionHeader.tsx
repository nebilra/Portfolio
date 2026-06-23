import type { ReactNode } from "react";

type Props = {
	children: string | ReactNode;
};

export const SectionHeader = ({ children }: Props) => (
	<div className="flex flex-col gap-1.5 flex-1">
		{typeof children === "string" ? <h2>{children}</h2> : children}
		<div className="w-3/4 h-0.5 bg-gradient-to-r from-frame to-transparent" />
	</div>
);
