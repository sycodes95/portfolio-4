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
    <div className={`${opacity} text-white  w-full flex flex-col justify-center transition-all duration-1000 pt-16 md:pt-24 `}>
      <div className='flex flex-col items-center pb-8'>
        <div className='grid items-center grid-cols-5 gap-2 font-outline-black '>
          {
          kevin.map((letter, index) => (
            <span className='w-full mt-2 text-4xl text-center transition-all duration-300 md:text-7xl font-display' key={index}>{letter}</span>
          ))

          }
        </div>

        <div className='grid items-center grid-cols-3 gap-2 font-outline-black '>
          {
          kim.map((letter, index) => (
            <span className='mt-2 text-4xl text-center transition-all duration-300 md:text-7xl hover:text-black/90 font-display' key={index}>{letter}</span>
          ))

          }
        </div>
        {/* <div>
          <span className="h-4 p-1 pl-4 pr-4 text-lg font-bold text-white rounded-md font-display">fullstack developer</span>
        </div> */}
        

      </div>
      <div className="relative w-full">
        <span className="flex items-center justify-center w-full h-4 text-xs font-semibold text-center bg-black">fullstack developer</span>
        <div className="absolute top-0 left-0 w-2 h-full bg-orange-400 border-r border-black/30"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-orange-400 border-l border-black/30"></div>

      </div>
    </div>


  )
}