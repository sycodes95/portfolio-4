interface ContainerProps { 
	children?: React.ReactNode;
	className?: string;
}

export default function Container ( { children, className } : ContainerProps) {

	return (
		<div className={`${className} max-w-[95rem] grow w-full flex flex-col border-l items-center border-r border-white/5 box-glow-white gap-2`}>
			{children}
		</div>
	)
}