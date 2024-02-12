export default function Frame () {
  return (
    // <div className="fixed top-0 left-0 w-full h-full min-h-screen -z-10">
    //   <div className="absolute top-0 w-full h-2 border-b border-white/20"></div>
    //   <div className="absolute right-0 w-2 h-full border-l border-white/20"></div>
    //   <div className="absolute left-0 w-2 h-full border-r border-r-white/30"></div>
    //   <div className="absolute bottom-0 w-full h-2 border-t border-b border-b-red-500/30 border-t-white/30"></div>
    // </div>
    <>
          <div className="absolute top-0 z-10 w-full h-2 border-b border-white/20"></div>
      <div className="absolute right-0 w-2 h-full border-l border-white/20"></div>
      <div className="absolute left-0 w-2 h-full border-r border-r-white/30"></div>
      <div className="absolute bottom-0 w-full h-2 border-t border-b border-b-red-500/30 border-t-white/30"></div>

    </>
  )
}