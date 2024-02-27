interface PictureFrameProps {
  src?: string;
}

export default function PictureFrame ({src} : PictureFrameProps) {
  return (
    <div className="p-4 flex items-center justify-center w-56 h-56 relative ">

      <img className="object-cover  blur-[0.5px]  w-full h-full rounded-xl" src={src} alt="" />

      <div className="absolute w-2 h-2 top-0 left-0 border-t border-l border-white rounded-tl-md"></div>

      <div className="absolute w-2 h-2 top-0 right-0 border-t border-r border-white rounded-tr-md"></div>
      
      <div className="absolute w-2 h-2 bottom-0 left-0 border-b border-l border-white rounded-bl-md"></div>

      <div className="absolute w-2 h-2 bottom-0 right-0 border-b border-r border-white rounded-br-md"></div>

    </div>
  )
}