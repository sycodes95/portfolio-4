interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader ( {title} : SectionHeaderProps ) {

  return (
    <div className="flex items-center justify-center min-w-full gap-4 ">
      <div className="w-full h-2 border-t border-l border-white/10"></div>
      <span className="text-xs font-bold text-white font-glow-white whitespace-nowrap ">{title}</span>
      <div className="w-full h-2 border-t border-r border-white/10"></div>
    </div>
  )
}