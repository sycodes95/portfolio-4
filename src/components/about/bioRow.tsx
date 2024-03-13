interface BioRowProps {
  title: string;
  value: string;
}

export default function BioRow( { title, value } : BioRowProps  ) {
  return (
    <div className="flex flex-col justify-center w-full gap-1">
      <span className="text-sm border-b text-zinc-500 border-white/5">[ {title} ]</span>
      <span className="text-sm text-white ">
        {value}
      </span>
    </div>
  )
}