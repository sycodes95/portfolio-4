import { useEffect, useState } from "react";

type Opacity = 'opacity-0' | 'opacity-100' 

export default function Header () {

  const [opacity, setOpacity] = useState<Opacity>('opacity-0')
  

  useEffect(() => {
    setOpacity('opacity-100')
  },[]);

  return (
    <div className={`${opacity} text-white w-full h-full p-8 flex justify-between transition-all duration-1000 relative overflow-hidden `}>

      <div className="w-fit flex flex-col">

        <div className="flex flex-col border-b border-white/5 pb-4 ">
          <span className=" text-4xl font-display h-7">kevin kim</span>
          <span className="font-outline-grey text-black/0 text-lg">fullstack developer.</span>
        </div>

      </div>

      <div className="h-full min-h-max border-l border-white/10 w-1 flex items-center grow absolute left-1/2 -translate-x-1/2 top-8 "></div>

      <div className="w-fit flex flex-col">

        <div className="flex flex-col whitespace-nowrap text-right ">
          <span className="text-sm ">Resume</span>

        </div>

      </div>


      
    </div>


  )
}