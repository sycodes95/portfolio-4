interface PictureFrameProps {
  src?: string;
}

export default function PictureFrame ({src} : PictureFrameProps) {
  return (

    <div className="flex flex-col items-center gap-4 p-4 min-[480px]:border-r md:p-8 border-white/5">
      <div className="relative flex flex-col items-center justify-center w-full h-56 p-4 max-w-72 ">

        <img className="blur-[0.5px] object-top object-cover bg-white bg-opacity-25 grayscale  w-full  h-full " src={src} alt="" />

        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 "></div>

        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 "></div>
        
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 "></div>

        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 "></div>

      </div>

      <span className="flex items-center gap-4 text-xs text-center text-white ">
        <div className="w-1 h-1 bg-green-400 rounded-full box-glow-green-small"></div>
        Available
      </span>

    </div>
    
  )
}