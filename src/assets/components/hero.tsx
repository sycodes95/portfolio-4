import { useEffect, useState } from "react";

type Opacity = 'opacity-0' | 'opacity-100' 

export default function Hero () {

  const [opacity, setOpacity] = useState<Opacity>('opacity-0')
  

  useEffect(() => {
    setOpacity('opacity-100')
  },[]);

  const kevin = ['K', 'E', 'V', 'I', 'N']
  const kim = ['K', 'I', 'M']
  return (
    <div className={`${opacity} text-white  w-full flex flex-col items-center justify-center transition-all duration-1000 `}>
      <div className='flex items-center justify-center w-full h-full max-w-5xl gap-1 border-white/20'>
        <div className='flex justify-center gap-2 mt-5 text-black font-outline-gray font-display display-font-clamp '>
          <span className="text-center col-span-full display-font-clamp">KEVIN</span>
          {/* {
          kevin.map((letter, index) => (
            <span className='w-4 mt-2 text-6xl text-center transition-all duration-300 md:text-7xl font-display' key={index}>{letter}</span>
          ))

          } */}
        </div>

        <div className='flex justify-center gap-2 mt-5 text-4xl text-white/20 w-fit font-display '>
          <span className="text-center w-fit display-font-clamp">kim</span>

          {/* {
          kim.map((letter, index) => (
            <span className='w-4 mt-2 text-6xl text-center transition-all duration-300 md:text-7xl hover:text-black/90 font-display' key={index}>{letter}</span>
          ))

          } */}
        </div>
        {/* <div>
          <span className="h-4 p-1 pl-4 pr-4 text-lg font-bold text-white rounded-md font-display">FULLSTACK DEVELOPER</span>
        </div> */}
        

      </div>
      <div className="relative w-full border-t border-white/20">
        <span className="flex items-center justify-center w-full h-4 text-xs font-semibold text-center text-white/50 ">FULLSTACK DEVELOPER</span>
        <div className="absolute top-0 left-0 w-2 h-full bg-orange-400 border-r border-white/20"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-orange-400 border-l border-white/20"></div>

      </div>
    </div>


  )
}