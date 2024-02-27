export default function Stack () {

  return (
    <div className="flex flex-col gap-4 w-full h-full text-white">
      <span className="p-2 w-full text-center border-b border-white/5 text-sm font-semibold">THE STACK</span>

      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="flex flex-col items-center gap-2 h-full border-r border-white/5">
          <span className="w-full text-center text-sm p-2 border border-blue-400 rounded-lg text-blue-400">FRONTEND</span>
          <div className="flex flex-col gap-2">

          </div>
        </div>

        <div className="flex flex-col gap-2 h-full border-r border-white/5">
          <span className="w-full text-center text-sm p-2 border border-green-400 rounded-lg text-green-400">BACKEND</span>
          <div className="flex flex-col gap-2">

          </div>
        </div>

        <div className="flex flex-col gap-2 h-full border-white/5">
          <span className="w-full text-center text-sm p-2 border border-orange-400 rounded-lg text-orange-400">OTHER</span>
          <div className="flex flex-col gap-2">

          </div>
        </div>

      </div>
    </div>
  )
}