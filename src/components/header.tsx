import { useEffect, useState } from "react";
import SocialMedia from "./socialMedia";
import StackedSteps from "../assets/svgDecor/stacked-steps-haikei.svg"

type Opacity = 'opacity-0' | 'opacity-100' 

export default function Header () {

  const [opacity, setOpacity] = useState<Opacity>('opacity-0')
  

  useEffect(() => {
    setOpacity('opacity-100')
  },[]);

  return ( 
    <div className={`${opacity} sticky top-0 max-w-[100rem] text-white backdrop-blur-lg w-full h-fit items-center p-8 flex justify-between transition-all duration-1000 z-50 bg-black bg-opacity-50  border-l border-b border-r border-white/5 `}>
      <img className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-16 object-cover z-50" src={StackedSteps} alt="" />
			<div className="absolute top-0  left-1/2 -translate-x-1/2 h-1 w-1 box-glow-white-big z-[60]"></div>

      <div className="w-fit flex flex-col">

        <div className="flex flex-col border-b border-white/5 items-center ">
          <span className=" text-6xl h-11 font-display">KEVINKIM</span>
          <span className="font-outline-white font-display text-black/0 text-2xl pl-[2px]">FULLSTACK DEVELOPER.</span>
        </div>

      </div>

      {/* <iframe className="" width="400" height="69" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1782904065%3Fsecret_token%3Ds-UGiFQwJaLPi&color=%23d20000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div > </div> */}

      {/* <div className="h-12 min-h-max border-l border-white/10 w-1 flex items-center grow absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 "></div> */}
      {/* <div className="h-full min-h-max border-l border-white/10 w-1 flex items-center grow "></div> */}

      <SocialMedia />

      
      
      {/* <div className="w-fit flex flex-col">

        <div className="flex flex-col whitespace-nowrap text-right ">
          <span className="text-sm ">Resume</span>

        </div>

      </div> */}


      
    </div>


  )
}