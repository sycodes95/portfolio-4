interface BioRowProps {
  title: string;
  value: string;
}

export default function BioRow( { title, value } : BioRowProps  ) {
  return (
    <div className="flex flex-col gap-1 w-full justify-center">
      <span className="text-white text-sm border-b border-white/5 pb-2">{title}</span>
      <span className="text-zinc-500 text-md ">
        <em>{value}</em>
      </span>
    </div>
  )
}