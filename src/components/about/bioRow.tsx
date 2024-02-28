interface BioRowProps {
  title: string;
  value: string;
}

export default function BioRow( { title, value } : BioRowProps  ) {
  return (
    <div className="flex flex-col justify-center w-full gap-1">
      <span className="pb-2 text-xs text-white border-b border-white/5">{title}</span>
      <span className="text-sm text-zinc-500 ">
        <em>{value}</em>
      </span>
    </div>
  )
}