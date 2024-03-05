interface BioRowProps {
  title: string;
  value: string;
}

export default function BioRow( { title, value } : BioRowProps  ) {
  return (
    <div className="flex flex-col justify-center w-full gap-1">
      <span className="pb-2 text-xs border-b text-zinc-500 border-white/5">[ {title} ]</span>
      <span className="text-xs text-white ">
        {value}
      </span>
    </div>
  )
}