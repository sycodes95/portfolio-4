interface ContainerProps { 
	children?: React.ReactNode;
	className?: string;
}

export default function Container ( { children, className } : ContainerProps) {

	return (
		<div className={`${className} bg-black max-w-[100rem] items-center grow w-full flex flex-col h-full border-white/5 box-glow-white `}>
			{children}
			{/* <div className="absolute top-0 h-1 w-1 box-glow-white-big z-[60]"></div> */}
		</div>
	)
}