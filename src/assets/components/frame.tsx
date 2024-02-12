export default function Frame () {
  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen -z-10">
      <div className="absolute top-0 w-full h-2 border-t border-b border-t-red-500/30 border-black/30"></div>
      <div className="absolute right-0 w-2 h-full border-l border-r border-r-red-500/30 border-black/30"></div>
      <div className="absolute left-0 w-2 h-full border-l border-r border-l-red-500/30 border-r-black/30"></div>
      <div className="absolute bottom-0 w-full h-2 border-t border-b border-b-red-500/30 border-t-black/30"></div>
    </div>
  )
}